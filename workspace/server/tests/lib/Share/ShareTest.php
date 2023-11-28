<?php
/**
 * ownCloud
 *
 * @author Michael Gapczynski
 * @copyright 2012 Michael Gapczynski mtgap@owncloud.com
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 */

namespace Test\Share;

use OC\Share\Share;
use OCP\DB\QueryBuilder\IQueryBuilder;
use OCP\IDBConnection;
use OCP\IGroup;
use OCP\IGroupManager;
use OCP\IUser;
use OCP\IUserManager;
use OCP\Share\IShare;

/**
 * Class Test_Share
 *
 * @group DB
 */
class ShareTest extends \Test\TestCase {
	protected $itemType;

	protected IUser $user1;
	protected IUser $user2;
	protected IUser $user3;
	protected IUser $user4;
	protected IUser $user5;
	protected IUser $user6;
	protected IUser $groupAndUser_user;

	protected IGroup $group1;
	protected IGroup $group2;
	protected IGroup $groupAndUser_group;

	protected string $resharing;
	protected string $dateInFuture;
	protected string $dateInPast;

	protected IGroupManager $groupManager;
	protected IUserManager $userManager;
	private IDBConnection $connection;

	protected function setUp(): void {
		parent::setUp();

		$this->groupManager = \OC::$server->getGroupManager();
		$this->userManager = \OC::$server->getUserManager();

		$this->userManager->clearBackends();
		$this->userManager->registerBackend(new \Test\Util\User\Dummy());

		$this->user1 = $this->userManager->createUser($this->getUniqueID('user1_'), 'pass');
		$this->user2 = $this->userManager->createUser($this->getUniqueID('user2_'), 'pass');
		$this->user3 = $this->userManager->createUser($this->getUniqueID('user3_'), 'pass');
		$this->user4 = $this->userManager->createUser($this->getUniqueID('user4_'), 'pass');
		$this->user5 = $this->userManager->createUser($this->getUniqueID('user5_'), 'pass');
		$this->user6 = $this->userManager->createUser($this->getUniqueID('user6_'), 'pass');
		$groupAndUserId = $this->getUniqueID('groupAndUser_');
		$this->groupAndUser_user = $this->userManager->createUser($groupAndUserId, 'pass');
		\OC_User::setUserId($this->user1->getUID());

		$this->groupManager->clearBackends();
		$this->groupManager->addBackend(new \Test\Util\Group\Dummy());
		$this->group1 = $this->groupManager->createGroup($this->getUniqueID('group1_'));
		$this->group2 = $this->groupManager->createGroup($this->getUniqueID('group2_'));
		$this->groupAndUser_group = $this->groupManager->createGroup($groupAndUserId);
		$this->connection = \OC::$server->get(IDBConnection::class);

		$this->group1->addUser($this->user1);
		$this->group1->addUser($this->user2);
		$this->group1->addUser($this->user3);
		$this->group2->addUser($this->user2);
		$this->group2->addUser($this->user4);
		$this->groupAndUser_group->addUser($this->user2);
		$this->groupAndUser_group->addUser($this->user3);

		Share::registerBackend('test', 'Test\Share\Backend');
		\OC_Hook::clear('OCP\\Share');
		\OC::registerShareHooks(\OC::$server->getSystemConfig());
		$this->resharing = \OC::$server->getConfig()->getAppValue('core', 'shareapi_allow_resharing', 'yes');
		\OC::$server->getConfig()->setAppValue('core', 'shareapi_allow_resharing', 'yes');

		// 20 Minutes in the past, 20 minutes in the future.
		$now = time();
		$dateFormat = 'Y-m-d H:i:s';
		$this->dateInPast = date($dateFormat, $now - 20 * 60);
		$this->dateInFuture = date($dateFormat, $now + 20 * 60);
	}

	protected function tearDown(): void {
		$query = $this->connection->getQueryBuilder();
		$query->delete('share')->andWhere($query->expr()->eq('item_type', $query->createNamedParameter('test')));
		$query->executeStatement();
		\OC::$server->getConfig()->setAppValue('core', 'shareapi_allow_resharing', $this->resharing);

		$this->user1->delete();
		$this->user2->delete();
		$this->user3->delete();
		$this->user4->delete();
		$this->user5->delete();
		$this->user6->delete();
		$this->groupAndUser_user->delete();

		$this->group1->delete();
		$this->group2->delete();
		$this->groupAndUser_group->delete();

		$this->logout();
		parent::tearDown();
	}

	public function testGetItemSharedWithUser() {
		\OC_User::setUserId($this->user1->getUID());

		// add dummy values to the share table
		$query = $this->connection->getQueryBuilder();
		$query->insert('share')
			->values([
				'item_type' => $query->createParameter('itemType'),
				'item_source' => $query->createParameter('itemSource'),
				'item_target' => $query->createParameter('itemTarget'),
				'share_type' => $query->createParameter('shareType'),
				'share_with' => $query->createParameter('shareWith'),
				'uid_owner' => $query->createParameter('uidOwner')
			]);
		$args = [
			['test', 99, 'target1', IShare::TYPE_USER, $this->user2->getUID(), $this->user1->getUID()],
			['test', 99, 'target2', IShare::TYPE_USER, $this->user4->getUID(), $this->user1->getUID()],
			['test', 99, 'target3', IShare::TYPE_USER, $this->user3->getUID(), $this->user2->getUID()],
			['test', 99, 'target4', IShare::TYPE_USER, $this->user3->getUID(), $this->user4->getUID()],
			['test', 99, 'target4', IShare::TYPE_USER, $this->user6->getUID(), $this->user4->getUID()],
		];
		foreach ($args as $row) {
			$query->setParameter('itemType', $row[0]);
			$query->setParameter('itemSource', $row[1], IQueryBuilder::PARAM_INT);
			$query->setParameter('itemTarget', $row[2]);
			$query->setParameter('shareType', $row[3], IQueryBuilder::PARAM_INT);
			$query->setParameter('shareWith', $row[4]);
			$query->setParameter('uidOwner', $row[5]);
			$query->executeStatement();
		}

		$result1 = Share::getItemSharedWithUser('test', 99, $this->user2->getUID(), $this->user1->getUID());
		$this->assertSame(1, count($result1));
		$this->verifyResult($result1, ['target1']);

		$result2 = Share::getItemSharedWithUser('test', 99, null, $this->user1->getUID());
		$this->assertSame(2, count($result2));
		$this->verifyResult($result2, ['target1', 'target2']);

		$result3 = Share::getItemSharedWithUser('test', 99, $this->user3->getUID());
		$this->assertSame(2, count($result3));
		$this->verifyResult($result3, ['target3', 'target4']);

		$result4 = Share::getItemSharedWithUser('test', 99, null, null);
		$this->assertSame(5, count($result4)); // 5 because target4 appears twice
		$this->verifyResult($result4, ['target1', 'target2', 'target3', 'target4']);

		$result6 = Share::getItemSharedWithUser('test', 99, $this->user6->getUID(), null);
		$this->assertSame(1, count($result6));
		$this->verifyResult($result6, ['target4']);
	}

	public function testGetItemSharedWithUserFromGroupShare() {
		\OC_User::setUserId($this->user1->getUID());

		// add dummy values to the share table
		$query = $this->connection->getQueryBuilder();
		$query->insert('share')
			->values([
				'item_type' => $query->createParameter('itemType'),
				'item_source' => $query->createParameter('itemSource'),
				'item_target' => $query->createParameter('itemTarget'),
				'share_type' => $query->createParameter('shareType'),
				'share_with' => $query->createParameter('shareWith'),
				'uid_owner' => $query->createParameter('uidOwner')
			]);
		$args = [
			['test', 99, 'target1', IShare::TYPE_GROUP, $this->group1->getGID(), $this->user1->getUID()],
			['test', 99, 'target2', IShare::TYPE_GROUP, $this->group2->getGID(), $this->user1->getUID()],
			['test', 99, 'target3', IShare::TYPE_GROUP, $this->group1->getGID(), $this->user2->getUID()],
			['test', 99, 'target4', IShare::TYPE_GROUP, $this->group1->getGID(), $this->user4->getUID()],
		];
		foreach ($args as $row) {
			$query->setParameter('itemType', $row[0]);
			$query->setParameter('itemSource', $row[1], IQueryBuilder::PARAM_INT);
			$query->setParameter('itemTarget', $row[2]);
			$query->setParameter('shareType', $row[3], IQueryBuilder::PARAM_INT);
			$query->setParameter('shareWith', $row[4]);
			$query->setParameter('uidOwner', $row[5]);
			$query->executeStatement();
		}

		// user2 is in group1 and group2
		$result1 = Share::getItemSharedWithUser('test', 99, $this->user2->getUID(), $this->user1->getUID());
		$this->assertSame(2, count($result1));
		$this->verifyResult($result1, ['target1', 'target2']);

		$result2 = Share::getItemSharedWithUser('test', 99, null, $this->user1->getUID());
		$this->assertSame(2, count($result2));
		$this->verifyResult($result2, ['target1', 'target2']);

		// user3 is in group1 and group2
		$result3 = Share::getItemSharedWithUser('test', 99, $this->user3->getUID());
		$this->assertSame(3, count($result3));
		$this->verifyResult($result3, ['target1', 'target3', 'target4']);

		$result4 = Share::getItemSharedWithUser('test', 99, null, null);
		$this->assertSame(4, count($result4));
		$this->verifyResult($result4, ['target1', 'target2', 'target3', 'target4']);

		$result6 = Share::getItemSharedWithUser('test', 99, $this->user6->getUID(), null);
		$this->assertSame(0, count($result6));
	}

	public function verifyResult($result, $expected) {
		foreach ($result as $r) {
			if (in_array($r['item_target'], $expected)) {
				$key = array_search($r['item_target'], $expected);
				unset($expected[$key]);
			}
		}
		$this->assertEmpty($expected, 'did not found all expected values');
	}

	/**
	 * @dataProvider urls
	 * @param string $url
	 * @param string $expectedResult
	 */
	public function testRemoveProtocolFromUrl($url, $expectedResult) {
		$share = new Share();
		$result = self::invokePrivate($share, 'removeProtocolFromUrl', [$url]);
		$this->assertSame($expectedResult, $result);
	}

	public function urls() {
		return [
			['http://owncloud.org', 'owncloud.org'],
			['https://owncloud.org', 'owncloud.org'],
			['owncloud.org', 'owncloud.org'],
		];
	}

	/**
	 * @dataProvider dataProviderTestGroupItems
	 * @param array $ungrouped
	 * @param array $grouped
	 */
	public function testGroupItems($ungrouped, $grouped) {
		$result = DummyShareClass::groupItemsTest($ungrouped);

		$this->compareArrays($grouped, $result);
	}

	public function compareArrays($result, $expectedResult) {
		foreach ($expectedResult as $key => $value) {
			if (is_array($value)) {
				$this->compareArrays($result[$key], $value);
			} else {
				$this->assertSame($value, $result[$key]);
			}
		}
	}

	public function dataProviderTestGroupItems() {
		return [
			// one array with one share
			[
				[ // input
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_ALL, 'item_target' => 't1']],
				[ // expected result
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_ALL, 'item_target' => 't1']]],
			// two shares both point to the same source
			[
				[ // input
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1'],
				],
				[ // expected result
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ | \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1',
						'grouped' => [
							['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
							['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1'],
						]
					],
				]
			],
			// two shares both point to the same source but with different targets
			[
				[ // input
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't2'],
				],
				[ // expected result
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't2'],
				]
			],
			// three shares two point to the same source
			[
				[ // input
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
					['item_source' => 2, 'permissions' => \OCP\Constants::PERMISSION_CREATE, 'item_target' => 't2'],
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1'],
				],
				[ // expected result
					['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ | \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1',
						'grouped' => [
							['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_READ, 'item_target' => 't1'],
							['item_source' => 1, 'permissions' => \OCP\Constants::PERMISSION_UPDATE, 'item_target' => 't1'],
						]
					],
					['item_source' => 2, 'permissions' => \OCP\Constants::PERMISSION_CREATE, 'item_target' => 't2'],
				]
			],
		];
	}
}

class DummyShareClass extends Share {
	public static function groupItemsTest($items) {
		return parent::groupItems($items, 'test');
	}
}

class DummyHookListener {
	public static $shareType = null;

	public static function listen($params) {
		self::$shareType = $params['shareType'];
	}
}