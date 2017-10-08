# nextcloud-dev-docker-compose

Nextcloud development environment using docker-compose 

## Features

- sqlite setup running on localhost:8010
- mysql setup running on localhost:8011
- Xdebug enabled

## Getting startd

    git clone git@github.com:nextcloud/server.git
    cd server
    export NEXTCLOUD_SOURCE=$PWD
    docker-compose up

## Environment variables

	NEXTCLOUD_SOURCE				local path to your nextcloud source directory
	NEXTCLOUD_AUTOINSTALL			set to YES if you want to automatically install 
	NEXTCLOUD_AUTOINSTALL_APPS		set list of apps to be enabled after installation
