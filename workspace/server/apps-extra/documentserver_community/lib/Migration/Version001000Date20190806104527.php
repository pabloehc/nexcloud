<?php

declare(strict_types=1);

namespace OCA\DocumentServer\Migration;

use Closure;
use Doctrine\DBAL\Schema\Schema;
use OCP\Migration\SimpleMigrationStep;
use OCP\Migration\IOutput;

class Version001000Date20190806104527 extends SimpleMigrationStep {
	public function changeSchema(IOutput $output, Closure $schemaClosure, array $options) {
		/** @var Schema $schema */
		$schema = $schemaClosure();

		if (!$schema->hasTable('documentserver_changes')) {
			$table = $schema->createTable('documentserver_changes');
			$table->addColumn('change_id', 'bigint', [
				'autoincrement' => true,
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('document_id', 'bigint', [
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('change', 'text', [
				'notnull' => true,
			]);
			$table->addColumn('time', 'bigint', [
				'notnull' => true,
				'length' => 6
			]);
			$table->addColumn('user', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('user_original', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('processing', 'boolean', [
				'notnull' => false,
				'default' => false
			]);
			$table->setPrimaryKey(['change_id']);
			$table->addIndex(['document_id'], 'documentserver_change_document');
			$table->addIndex(['time'], 'documentserver_change_time');
			$table->addIndex(['document_id', 'processing'], 'documentserver_change_proc');
		}

		if (!$schema->hasTable('documentserver_sess')) {
			$table = $schema->createTable('documentserver_sess');
			$table->addColumn('session_id', 'string', [
				'notnull' => true,
				'length' => 16,
			]);
			$table->addColumn('document_id', 'bigint', [
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('user', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('user_original', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('last_seen', 'bigint', [
				'notnull' => true,
				'length' => 6
			]);
			$table->addColumn('readonly', 'boolean', [
				'notnull' => false
			]);
			$table->addColumn('user_index', 'bigint', [
				'notnull' => true,
				'length' => 6,
			]);
			$table->setPrimaryKey(['session_id']);
			$table->addIndex(['document_id'], 'documentserver_ses_doc');
			$table->addIndex(['last_seen'], 'documentserver_ses_last');
			$table->addIndex(['document_id', 'last_seen'], 'documentserver_ses_doc_last');
		}

		if (!$schema->hasTable('documentserver_locks')) {
			$table = $schema->createTable('documentserver_locks');
			$table->addColumn('lock_id', 'bigint', [
				'autoincrement' => true,
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('document_id', 'bigint', [
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('user', 'string', [
				'notnull' => true,
				'length' => 64,
			]);
			$table->addColumn('time', 'bigint', [
				'notnull' => true,
				'length' => 6
			]);
			$table->addColumn('block', 'text', [
				'notnull' => true,
			]);
			$table->setPrimaryKey(['lock_id']);
			$table->addIndex(['document_id'], 'documentserver_locks_document');
			$table->addIndex(['document_id', 'user'], 'documentserver_locks_doc_user');
		}

		if (!$schema->hasTable('documentserver_ipc')) {
			$table = $schema->createTable('documentserver_ipc');
			$table->addColumn('message_id', 'bigint', [
				'autoincrement' => true,
				'notnull' => true,
				'length' => 6,
			]);
			$table->addColumn('session_id', 'string', [
				'notnull' => true,
				'length' => 16,
			]);
			$table->addColumn('time', 'bigint', [
				'notnull' => true,
				'length' => 6
			]);
			$table->addColumn('message', 'text', [
				'notnull' => true,
			]);
			$table->setPrimaryKey(['message_id']);
			$table->addIndex(['session_id', 'message_id'], 'documentserver_ipc_session');
			$table->addIndex(['time'], 'documentserver_ipc_time');
		}

		return $schema;
	}
}
