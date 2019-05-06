###############################
Common management commands
###############################

*****************
v-add-backup-host
*****************

**Parameters**: Type Host Username Password [PATH] [PORT]

**Example usage**:

*****************
v-add-cron-job
*****************

**Parameters**: User Min Hour Day Month Wday Command [JOB] [RESTART]

**Example usage**:

**************************
v-add-cron-letsencrypt-job
**************************

**Parameters**: None

**Example usage**:


*******************
v-add-cron-reports
*******************

**Parameters**: User

**Example usage**:

**********************
v-add-cron-restart-job
**********************

**Parameters**: None

**Example usage**:

*****************
v-add-database
*****************

**Parameters**: User Database Dbuser Dbpass [TYPE] [HOST] [CHARSET]

**Example usage**:

********************
v-add-database-host
********************

**Parameters**: Type Host Dbuser Dbpass [MAX_DB] [CHARSETS] [TPL]

**Example usage**:

*****************
v-add-domain
*****************

**Parameters**: User Domain [IP] [RESTART]

**Example usage**:

******************
v-add-firewall-ban
******************

**Parameters**: Ip Chain

**Example usage**:

********************
v-add-firewall-chain
********************

**Parameters**: Chain [PORT] [PROTOCOL]

**Example usage**:

*******************
v-add-firewall-rule
*******************

**Parameters**: Action Ip Port [PROTOCOL] [COMMENT] [RULE]

**Example usage**:

*****************
v-add-fs-archive
*****************

**Parameters**: User Archive File [FILE_2] [FILE_3] [FILE ...]

**Example usage**

*******************
v-add-fs-directory
*******************

**Parameters**: User Directory

**Example usage**:

*****************
v-add-fs-file
*****************

**Parameters**: User File

**Example usage**:

*****************
v-add-user
*****************

**Parameters**: User Password Email [PACKAGE] [FNAME] [LNAME]
**Example usage**:

********************
v-add-user-sftp-jail
********************

**Parameters**: User

**Example usage**:

*****************
v-list-user
*****************

**Parameters**: User [FORMAT]

**Example usage**:

*******************
v-list-user-backup
*******************

**Parameters**: User Backup [FORMAT]

**Example usage**:

*****************************
v-list-user-backup-exclusions
*****************************

**Parameters**: User [FORMAT]

**Example usage**:

********************
v-list-user-backups
********************

**Parameters**: User [FORMAT]

**Example usage**:

**********************
v-list-user-favourites
**********************

**Parameters**: User [FORMAT]

**Example usage**:

*****************
v-list-user-ips
*****************

**Parameters**: User [FORMAT]

**Example usage**:

*****************
v-list-user-log 
*****************

**Parameters**: User [FORMAT]

**Example usage**:

*************************
v-list-user-notifications
*************************

**Parameters**: User [FORMAT]

**Example usage**:

*****************
v-list-user-ns
*****************

**Parameters**: User [FORMAT]

**Example usage**:

v-list-user-package
**Parameters**: Package [FORMAT]

**Example usage**:

********************
v-list-user-packages
********************

**Parameters**:None

**Example usage**:

*****************
v-backup-user
*****************

**Parameters**: User [NOTIFY]

**Example usage**:

*****************
v-backup-users
*****************

**Parameters**: None

**Example usage**:

*****************
v-change-cron-job
*****************

**Parameters**: User Job Min Hour Day Month Wday Command

**Example usage**:

*******************************
v-change-database-host-password
*******************************

**Parameters**: Type Host Dbuser Dbpass

**Example usage**:

***********************
v-change-database-owner
***********************

**Parameters**: Database User

**Example usage**:

**************************
v-change-database-password
**************************

**Parameters**: User Database Dbpass

**Example usage**:

**********************
v-change-database-user
**********************

**Parameters**: User Database Dbuser [DBPASS]

**Example usage**:

*********************
v-change-domain-owner
*********************

**Parameters**: Domain User

**Example usage**:

**********************
v-change-firewall-rule
**********************

**Parameters**: Rule Action Ip  Port [PROTOCOL] [COMMENT]

**Example usage**:

***************************
v-change-fs-file-permission
***************************

**Parameters**: User File Permissions

**Example usage**:

*******************
v-add-sys-firewall
*******************

**Parameters**:None

*****************
v-add-sys-ip
*****************

**Parameters**: Ip Netmask [INTERFACE] [USER] [STATUS] [NAME] [NATED_IP]

**Example usage**:

*****************
v-add-sys-quota
*****************

**Parameters**: None

**Example usage**:


*******************
v-add-sys-sftp-jail
*******************

**Parameters**: None

**Example usage**:

****************************************
v-check-fs-permission
****************************************

**Parameters**: User File

**Example usage**:

****************************************
v-check-user-hash
****************************************
**Parameters**: User Hash

**Example usage**:

****************************************
v-check-user-password
****************************************

**Parameters**: User Password

****************************************
v-copy-fs-directory
****************************************

**Parameters**: User Src_directory Dst_directory

****************************************
v-copy-fs-file
****************************************

**Parameters**: User Src_file Dst_file

****************************************
v-delete-backup-host
****************************************

**Parameters**: Type [HOST]

****************************************
v-delete-cron-hestia-autoupdate
****************************************

**Parameters**: None

****************************************
v-delete-cron-job
****************************************

**Parameters**: User Job

**Example usage**:

****************************************
v-delete-cron-reports
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-delete-cron-restart-job
****************************************

**Parameters**: None

**Example usage**:

****************************************
v-delete-database
****************************************

**Parameters**: User Database

**Example usage**:

****************************************
v-delete-database-host
****************************************

**Parameters**: Type Host

**Example usage**:

****************************************
v-delete-databases
****************************************

**Parameters**: User

**Example usage**:

****************************************
v-list-remote-dns-hosts
****************************************

**Example usage**:

**Parameters**:None

****************************************
v-list-sys-clamd-config
****************************************

**Example usage**:

**Parameters**:None

****************************************
v-list-sys-config
****************************************

**Example usage**:

**Parameters**:None

****************************************
v-list-sys-cpu-status
****************************************

**Example usage**:

**Parameters**:None


****************************************
v-list-sys-disk-status
****************************************


**Parameters**:None

**Example usage**:


****************************************
v-list-sys-hestia-autoupdate
****************************************
**Parameters**:None



**Example usage**:


****************************************
**Parameters**:None

v-list-sys-hestia-ssl
****************************************


**Example usage**:

**Parameters**:None


****************************************
v-list-sys-hestia-updates
****************************************


**Parameters**:None

**Example usage**:

****************************************
v-list-sys-info
****************************************

**Parameters**:None


**Example usage**:
