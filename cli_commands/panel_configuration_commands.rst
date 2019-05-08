#############################
Panel configuration commands
#############################

**************
v-add-user-2fa
**************

**Parameters**: User

**Example usage**: `v-add-user-2fa admin`

****************
v-check-user-2fa
****************

**Parameters**: User Token

**Example usage**: `v-check-user-2fa admin 493690`

*****************
v-delete-user-2fa
*****************

**Parameters**: User

**Example usage**: `v-delete-user-2fa admin`


*************************
v-change-sys-config-value
*************************

**Parameters**: Key Value

**Example usage**: `v-change-sys-config-value VERSION 1.0`


***********************
v-change-sys-hestia-ssl
***********************

**Parameters**: ssl_dir [RESTART]

**Example usage**: `v-change-hestia-ssl /home/new/dir/path yes`


*********************
v-change-sys-hostname
*********************

**Parameters**: Hostname

**Example usage**: `v-change-sys-hostname mydomain.tld`


********************
v-change-sys-ip-name
********************

**Parameters**: Ip Ip_name

**Example usage**: `v-change-sys-ip-name 80.122.52.70 acme.com`


*******************
v-change-sys-ip-nat
*******************

**Parameters**: Ip Nat_ip [RESTART]

**Example usage**: `185.209.50.140 10.110.104.205`


*********************
v-change-sys-ip-owner
*********************

**Parameters**: Ip User

**Example usage**: `91.198.136.14 admin`

**********************
v-change-sys-ip-status
**********************

**Parameters**: Ip Ip_status

**Example usage**: `91.198.136.14 yourstatus`


*********************
v-change-sys-language
*********************

**Parameters**: Language

**Example usage**: `v-change-sys-language ru`


*****************
v-change-sys-pma
*****************

**Parameters**: Pma

**Example usage**:  `v-change-sys-pma trickyurlhere`


*****************
v-change-sys-port
*****************

**Parameters**: Port

**Example usage**: `v-change-sys-port 5678`


***************************
v-change-sys-service-config
***************************

**Parameters**: Config Service [RESTART]

**Example usage**: `v-change-sys-service-config /home/admin/dovecot.conf dovecot yes`

The function for changing service confguration located at the default system path with the new one. 

New configuration should be specified in the first argument. Used for internal purposes most often.


*********************
v-change-sys-timezone
*********************

**Parameters**: Timezone

**Example usage**: `v-change-sys-timezone Europe/Berlin`


********************
v-change-sys-webmail
********************
**Parameters**: Webmail

**Example usage**: `v-change-sys-webmail YourtrickyURLhere`


**********************
v-change-user-contact
**********************

**Parameters**: User Email

**Example usage**: `v-change-user-contact admin admin@yahoo.com`

**********************
v-change-user-language
**********************

**Parameters**: User Language

**Example usage**: `v-change-user-language admin en`


******************
v-change-user-name
******************

**Parameters**: User Fname Lname

**Example usage**: `v-change-user-name admin John Smith`


*****************
v-change-user-ns
*****************

**Parameters**: User Ns1 Ns2 [NS3] [NS4] [NS5] [NS6] [NS7] [NS8]

**Example usage**: `v-change-user-ns ns1.domain.tld ns2.domain.tld`


**********************
v-change-user-package
**********************

**Parameters**: User Package [FORCE]

**Example usage**: `v-change-user-package admin yourpackage`


***********************
v-change-user-password
***********************

**Parameters**: User Password

**Example usage**: `v-change-user-password admin NewPassword123`


*********************
v-change-user-shell
*********************
**Parameters**: User Shell

**Example usage**: `v-change-user-shell admin nologin`

************************
v-change-user-template
************************

**Parameters**: User Type Template

**Example usage**: `v-change-user-template admin WEB wordpress`


****************************************
v-delete-domain
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-delete-firewall-ban
****************************************

**Parameters**: Ip Chain

**Example usage**:


****************************************
v-delete-firewall-chain
****************************************

**Parameters**: Chain

**Example usage**:

****************************************
v-delete-firewall-rule
****************************************


**Parameters**: Rule

**Example usage**:


****************************************
v-delete-letsencrypt-domain
****************************************


**Parameters**: User Domain [RESTART]

**Example usage**:


****************************************
v-delete-sys-firewall
****************************************


**Example usage**:


****************************************
v-delete-sys-ip
****************************************

**Parameters**: Ip

**Example usage**:


****************************************
v-delete-sys-quota
****************************************

**Example usage**:


****************************************
v-delete-sys-sftp-jail
****************************************

**Example usage**:


****************************************
v-delete-user
****************************************

**Example usage**:

**Parameters**: User

****************************************
v-delete-user-backup
****************************************

**Parameters**: User Backup

**Example usage**:

****************************************
v-delete-user-backup-exclusions
****************************************

**Parameters**: User [SYSTEM]

**Example usage**:


****************************************
v-delete-user-favourites
****************************************

**Parameters**: User System Object

**Example usage**:

****************************************
v-delete-user-ips
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-delete-user-notification
****************************************

**Parameters**: User Notification

**Example usage**:


****************************************
v-delete-user-package
****************************************

**Parameters**: Package

**Example usage**:

****************************************
v-delete-user-sftp-jail
****************************************


**Parameters**: User

**Example usage**:

****************************************
v-generate-api-key
****************************************
**Parameters**:None

**Example usage**:


****************************************
v-generate-password-hash
****************************************

**Parameters**: Hash-Method Salt Password


**Example usage**:

****************************************
v-generate-ssl-cert
****************************************

**Parameters**: Domain Email Country State City Org Unit [ALIASES] [FORMAT]

**Example usage**:

****************************************
v-get-sys-timezone
****************************************

**Example usage**:

****************************************
v-get-sys-timezones
****************************************

**Example usage**:


****************************************
v-get-user-salt
****************************************

**Parameters**: User [IP] [SALT]

**Example usage**:

****************************************
v-get-user-value
****************************************

**Parameters**: User Key

**Example usage**:


****************************************
v-list-backup-host
****************************************

**Parameters**: Type [FORMAT]

**Example usage**:

****************************************
v-list-cron-job
****************************************

**Parameters**: User Job [FORMAT]

**Example usage**:

****************************************
v-list-cron-jobs
****************************************

**Parameters**: User [FORMAT]

**Example usage**:

****************************************
v-list-database
****************************************

**Parameters**: User Database [FORMAT]

**Example usage**:

****************************************
v-list-database-host
****************************************

**Parameters**: Type Host [FORMAT]

**Example usage**:

****************************************
v-list-database-hosts
****************************************

**Example usage**:

****************************************
v-list-database-types
****************************************

**Example usage**:


****************************************
v-list-databases
****************************************

**Parameters**: User [FORMAT]

**Example usage**:


****************************************
v-list-firewall-ban
****************************************


**Example usage**:

****************************************
v-list-firewall-rule
****************************************

**Parameters**: Rule [FORMAT]

**Example usage**:


****************************************
v-list-letsencrypt-user
****************************************

**Parameters**: User [FORMAT]

**Example usage**:

****************************************
v-list-sys-ip
****************************************

**Parameters**: Ip [FORMAT]

**Example usage**:

****************************************
v-list-sys-ips
****************************************

**Example usage**:

****************************************
v-list-sys-languages
****************************************

**Example usage**:


****************************************
v-list-sys-memory-status
****************************************

**Example usage**:

****************************************
v-list-sys-mysql-config
****************************************

**Example usage**:

****************************************
v-list-sys-nginx-config
****************************************

**Example usage**:

****************************************
v-list-sys-pgsql-config
****************************************

**Example usage**:

****************************************
v-list-sys-php-config
****************************************

**Example usage**:

****************************************
v-list-sys-proftpd-config
****************************************

**Example usage**:

****************************************
v-list-sys-rrd
****************************************

**Example usage**:


****************************************
v-list-sys-spamd-config
****************************************

**Example usage**:


****************************************
v-list-sys-users
****************************************

**Example usage**:

****************************************
v-list-user-stats
****************************************


**Parameters**: User [FORMAT]


**Example usage**:

****************************************
v-list-users
****************************************


**Example usage**:


****************************************
v-rebuild-cron-jobs
****************************************


**Parameters**: User [RESTART]


**Example usage**:

****************************************
v-rebuild-databases
****************************************

**Parameters**: User

**Example usage**:


****************************************
v-rebuild-user
****************************************

**Example usage**:

**Parameters**: User [RESTART]


****************************************
v-restart-cron
****************************************

**Example usage**:

****************************************
v-restart-ftp
****************************************

**Example usage**:

****************************************
v-restart-proxy
****************************************

**Example usage**:

****************************************
v-restart-service
****************************************

**Parameters**: Service

**Example usage**:

****************************************
v-restart-system
****************************************

**Parameters**: Restart

**Example usage**:


****************************************
v-restore-user
****************************************

**Parameters**: User Backup [WEB] [DNS] [MAIL] [DB] [CRON] [UDIR] [NOTIFY]

**Example usage**:

****************************************
v-schedule-letsencrypt-domain
****************************************

**Parameters**: User Domain [ALIASES]

**Example usage**:


****************************************
v-schedule-user-backup
****************************************

**Example usage**:

**Parameters**: User

****************************************
v-schedule-user-restore
****************************************

**Parameters**: User Backup [WEB] [DNS] [MAIL] [DB] [CRON] [UDIR]

**Example usage**:

****************************************
v-search-domain-owner
****************************************

**Parameters**: Domain [TYPE]

**Example usage**:


****************************************
v-search-object
****************************************

**Parameters**: Object [FORMAT]

**Example usage**:

****************************************
v-search-user-object
****************************************

**Parameters**: User Object [FORMAT]

**Example usage**:

****************************************
v-start-service
****************************************

**Parameters**: Service

****************************************
v-stop-firewall
****************************************

**Example usage**:

****************************************
v-stop-service
****************************************

**Parameters**: Service

**Example usage**:

****************************************
v-suspend-cron-job
****************************************

**Parameters**: User Job [RESTART]

**Example usage**:


****************************************
v-suspend-cron-jobs
****************************************

**Example usage**:

**Parameters**: User

****************************************
v-suspend-database
****************************************

**Parameters**: User Database

**Example usage**:

****************************************
v-suspend-database-host
****************************************

**Parameters**: Type Host

**Example usage**:


****************************************
v-suspend-databases
****************************************

**Parameters**: User

**Example usage**:


**Parameters**: User Domain Id [RESTART]

**Example usage**:

****************************************
v-suspend-domain
****************************************

**Example usage**:


**Parameters**: User Domain

**Example usage**:

****************************************
v-suspend-firewall-rule
****************************************

**Parameters**: Rule

**Example usage**:


****************************************
v-suspend-user
****************************************

**Parameters**: User [RESTART]

**Example usage**:


****************************************
v-unsuspend-cron-job
****************************************

**Parameters**: User Job [RESTART]

****************************************
v-unsuspend-cron-jobs
****************************************

**Parameters**: User [RESTART]

**Example usage**:

****************************************
v-unsuspend-database
****************************************

**Parameters**: User Database

**Example usage**:

****************************************
v-unsuspend-database-host
****************************************

**Parameters**: Type Host

**Example usage**:

****************************************
v-unsuspend-databases
****************************************

**Parameters**: User

**Example usage**:


****************************************
v-unsuspend-domain
****************************************

**Parameters**: User Domain

**Example usage**:


****************************************
v-unsuspend-firewall-rule
****************************************

**Parameters**: Rule

**Example usage**:

****************************************
v-unsuspend-user
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-update-database-disk
****************************************

**Parameters**: User Database

**Example usage**:

****************************************
v-update-databases-disk
****************************************

**Parameters**: User

**Example usage**:


****************************************
v-update-firewall
****************************************

**Example usage**:

****************************************
v-update-host-certificate
****************************************


**Parameters**: [USER] [HOSTNAME]

**Example usage**:

****************************************
v-update-letsencrypt-ssl
****************************************

**Example usage**:

****************************************
v-update-sys-hestia
****************************************

**Parameters**: Package

**Example usage**:

****************************************
v-update-sys-hestia-all
****************************************

**Example usage**:

****************************************
v-update-sys-ip
****************************************

**Example usage**:


****************************************
v-update-sys-ip-counters
****************************************


**Example usage**:

****************************************
v-update-sys-queue
****************************************

**Parameters**: Queue

**Example usage**:


****************************************
v-update-sys-rrd
****************************************


**Example usage**:


****************************************
v-update-sys-rrd-apache2
****************************************


**Example usage**:


****************************************
v-update-sys-rrd-ftp
****************************************


**Example usage**:


****************************************
v-update-sys-rrd-httpd
****************************************


**Example usage**:


****************************************
v-update-sys-rrd-la
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-mail
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-mem
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-mysql
****************************************


**Example usage**:


****************************************
v-update-sys-rrd-net
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-nginx
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-pgsql
****************************************

**Example usage**:


****************************************
v-update-sys-rrd-ssh
****************************************

**Example usage**:


****************************************
v-update-user-backup-exclusions
****************************************

**Parameters**: User File

**Example usage**:

****************************************
v-update-user-counters
****************************************

**Example usage**:


****************************************
v-update-user-disk
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-update-user-package
****************************************

**Parameters**: Package

**Example usage**:


****************************************
v-update-user-quota
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-update-user-stats
****************************************

**Example usage**:
