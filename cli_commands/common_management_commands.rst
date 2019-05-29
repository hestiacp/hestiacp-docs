###############################
Common management commands
###############################

*****************
v-add-backup-host
*****************

**Parameters**: Type Host Username Password [PATH] [PORT]

**Example usage**: `v-add-backup-host sftp backup.acme.com admin p4$$w@Rd`

*****************
v-add-cron-job
*****************

**Parameters**: User Min Hour Day Month Wday Command [JOB] [RESTART]

**Example usage**: `v-add-cronjob admin * * * * * sudo /usr/local/hestia/bin/v-backup-users`

**************************
v-add-cron-letsencrypt-job
**************************

**Parameters**: None

**Example usage**: `v-add-letsencrypt-job`


*******************
v-add-cron-reports
*******************

**Parameters**: User

**Example usage**: `v-add-cron-reports admin`

**********************
v-add-cron-restart-job
**********************

**Parameters**: None

**Example usage**: `v-add-cron-restart-job`

*****************
v-add-database
*****************

**Parameters**: User Database Dbuser Dbpass [TYPE] [HOST] [CHARSET]

**Example usage**: `v-add-database admin wordpress_db matt qwerty123`

********************
v-add-database-host
********************

**Parameters**: Type Host Dbuser Dbpass [MAX_DB] [CHARSETS] [TPL]

**Example usage**: `v-add-database-host mysql localhost alice p@$$wOrd`

*****************
v-add-domain
*****************

**Parameters**: User Domain [IP] [RESTART]

**Example usage**: `v-add-domain admin example.com`

******************
v-add-firewall-ban
******************

**Parameters**: Ip Chain

**Example usage**: `v-add-firewall-ban 37.120.129.20 MAIL`

********************
v-add-firewall-chain
********************

**Parameters**: Chain [PORT] [PROTOCOL]

**Example usage**: `v-add-firewall-chain CRM 5678 TCP`

*******************
v-add-firewall-rule
*******************

**Parameters**: Action Ip Port [PROTOCOL] [COMMENT] [RULE]

**Example usage**: `v-add-firewall-rule DROP 185.137.111.77 25`

*****************
v-add-fs-archive
*****************

**Parameters**: User Archive File [FILE_2] [FILE_3] [FILE ...]

**Example usage** `v-add-fs-archive archive.tar  readme.txt`

*******************
v-add-fs-directory
*******************

**Parameters**: User Directory

**Example usage**: `v-add-fs-directory admin mybar`

*****************
v-add-fs-file
*****************

**Parameters**: User File

**Example usage**: `v-add-fs-file admin readme.md`

*****************
v-add-user
*****************

**Parameters**: User Password Email [PACKAGE] [FNAME] [LNAME]

**Example usage**: `v-add-user admin2 P4$$w@rD bgates@aol.com`

********************
v-add-user-sftp-jail
********************

**Parameters**: User

**Example usage**:`v-add-user-sftp-jail admin`

*****************
v-list-user
*****************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user admin`

*******************
v-list-user-backup
*******************

**Parameters**: User Backup [FORMAT]

**Example usage**: `v-list-user-backups  admin admin.2019-05-19_03-31-30.tar`

*****************************
v-list-user-backup-exclusions
*****************************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-backup-exclusions admin`

********************
v-list-user-backups
********************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-backups admin`

**********************
v-list-user-favourites
**********************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-favourites admin`

*****************
v-list-user-ips
*****************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-ips admin`

*****************
v-list-user-log 
*****************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-log admin`

*************************
v-list-user-notifications
*************************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-notifications admin`

*****************
v-list-user-ns
*****************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-user-ns admin`

***********************
v-list-user-package
***********************

**Parameters**: Package [FORMAT]

**Example usage**: `v-list-user-package`

********************
v-list-user-packages
********************

**Parameters**:None

**Example usage**: `v-list-user-packages`

*****************
v-backup-user
*****************

**Parameters**: User [NOTIFY]

**Example usage**: `v-backup-user admin yes`

*****************
v-backup-users
*****************

**Parameters**: None

**Example usage**: `v-backup-users`

*****************
v-change-cron-job
*****************

**Parameters**: User Job Min Hour Day Month Wday Command

**Example usage**: `v-change-cron-job admin 7 * * * * * * /usr/bin/uptime`

*******************************
v-change-database-host-password
*******************************

**Parameters**: Type Host Dbuser Dbpass

**Example usage**: `v-change-database-host-password mysql localhost wp_user pA$$w@rD`

***********************
v-change-database-owner
***********************

**Parameters**: Database User

**Example usage**: `v-change-database-owner mydb alice`

**************************
v-change-database-password
**************************

**Parameters**: User Database Dbpass

**Example usage**: `v-change-database-password admin wp_db neW_pAssWorD`

**********************
v-change-database-user
**********************

**Parameters**: User Database Dbuser [DBPASS]

**Example usage**: `v-change-database-user admin my_db joe_user`

*********************
v-change-domain-owner
*********************

**Parameters**: Domain User

**Example usage**: `v-change-domain-owner www.example.com bob`

**********************
v-change-firewall-rule
**********************

**Parameters**: Rule Action Ip  Port [PROTOCOL] [COMMENT]

**Example usage**: `v-change-firewall-rule 3 ACCEPT 5.188.123.17 443`

***************************
v-change-fs-file-permission
***************************

**Parameters**: User File Permissions

**Example usage**: `v-change-fs-file-permission admin readme.txt 0777`

*******************
v-add-sys-firewall
*******************

**Parameters**:None

**Example usage**: `v-add-sys-firewall`

*****************
v-add-sys-ip
*****************

**Parameters**: Ip Netmask [INTERFACE] [USER] [STATUS] [NAME] [NATED_IP]

**Example usage**: `v-add-sys-ip 216.239.32.21 255.255.255.0`

*****************
v-add-sys-quota
*****************

**Parameters**: None

**Example usage**: `v-add-sys-quota`


*******************
v-add-sys-sftp-jail
*******************

**Parameters**: None

**Example usage**: `v-add-sys-sftp-jail`

****************************************
v-check-fs-permission
****************************************

**Parameters**: User File

**Example usage**: `v-check-fs-permission admin readme.txt`

****************************************
v-check-user-hash
****************************************
**Parameters**: User Hash

**Example usage**: `v-check-user-hash admin CN5JY6SMEyNGnyCuvmK5z4r7gtHAC4mRZ...`

**Note**: The second argument of function is long hash string, it's string of user's password. 

****************************************
v-check-user-password
****************************************

**Parameters**: User Password

**Example usage**: `v-check-user-password admin qwerty1234`

****************************************
v-copy-fs-directory
****************************************

**Parameters**: User Src_directory Dst_directory

**Example usage**: `v-copy-fs-directory alice /home/alice/dir1 /home/bob/dir2`

****************************************
v-copy-fs-file
****************************************

**Parameters**: User Src_file Dst_file

**Example usage**: `v-copy-fs-file admin readme.txt readme_new.txt`

****************************************
v-delete-backup-host
****************************************

**Parameters**: Type [HOST]

**Example usage**: `v-delete-backup-host sftp`

****************************************
v-delete-cron-hestia-autoupdate
****************************************

**Parameters**: None

**Example usage**: `v-delete-cron-hestia-autoupdate`

****************************************
v-delete-cron-job
****************************************

**Parameters**: User Job

**Example usage**: `v-delete-cron-job admin 9`

****************************************
v-delete-cron-reports
****************************************

**Parameters**: User

**Example usage**: `v-delete-cron-reports admin`

****************************************
v-delete-cron-restart-job
****************************************

**Parameters**: None

**Example usage**: `v-delete-cron-restart-job`

****************************************
v-delete-database
****************************************

**Parameters**: User Database

**Example usage**: `v-delete-database admin wp_db`

****************************************
v-delete-database-host
****************************************

**Parameters**: Type Host

**Example usage**: `v-delete-database-host pgsql localhost`

****************************************
v-delete-databases
****************************************

**Parameters**: User

**Example usage**: `v-delete-databases admin`

****************************************
v-list-remote-dns-hosts
****************************************

**Parameters**:None

**Example usage**: `v-list-remote-dns-hosts`

****************************************
v-list-sys-clamd-config
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-clamdconfig`

****************************************
v-list-sys-config
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-config`

****************************************
v-list-sys-cpu-status
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-cpu-status`


****************************************
v-list-sys-disk-status
****************************************


**Parameters**:None

**Example usage**: `v-list-sys-disk-status`


****************************************
v-list-sys-hestia-autoupdate
****************************************

**Parameters**:None


**Example usage**: `v-list-hestia-autoupdate`


****************************************
v-list-sys-hestia-ssl
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-hestia-ssl`


****************************************
v-list-sys-hestia-updates
****************************************

**Parameters**:None

**Example usage**: `v-list-sys-hestia-updates`

****************************************
v-list-sys-info
****************************************

**Parameters**:None


**Example usage**: `v-list-sys-info`

****************************************
v-delete-fs-directory
****************************************

**Parameters**: User Directory

**Example usage**: `v-delete-fs-directory admin report1`


****************************************
v-delete-fs-file
****************************************

**Parameters**: User File

**Example usage**: `v-delete-fs-file admin readme.txt`

****************************************
v-extract-fs-archive
****************************************

**Parameters**: User Archive Directory

**Example usage**: `v-extract-fs-archive admin latest.tar.gz /home/admin`

****************************************
v-get-fs-file-type
****************************************

**Parameters**: User File

**Example usage**: `v-get-fs-file-type admin index.html`

****************************************
v-list-fs-directory
****************************************

**Parameters**: User [PATH]

**Example usage**: `v-list-fs-directory /home/admin/web`

****************************************
v-move-fs-directory
****************************************

**Parameters**: User Src_directory Dst_directory

**Example usage**: `v-move-fs-directory admin /home/admin/web /home/user02/`

****************************************
v-move-fs-file
****************************************

**Parameters**: User Src_file Dst_file

**Example usage**: `v-move-fs-file admin readme.txt new_readme.txt`

****************************************
v-open-fs-config
****************************************

**Parameters**: Config

**Example usage**: `v-open-fs-config /etc/mysql/my.cnf`

****************************************
v-open-fs-file
****************************************

**Parameters**: User File

**Example usage**: `v-open-fs-file admin README.md`

****************************************
v-search-fs-object
****************************************

**Parameters**: User Object [PATH]

**Example usage**: `v-search-fs-object admin hello.txt`
