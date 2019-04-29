*******************************
Common management commands
*******************************

**v-list-user-backups**

The function is intended for obtaining list of user backups avalaible.

**OPTIONS**

    user backup [format]
    
**v-restore-user**

This function restores user and all of its data from backup specified.

**OPTIONS**

    user backup [web] [dns] [mail] [db] [cron] [udir] [notify]
    
**v-backup-user**

The call is used for backing up user with all its domains and databases.

**OPTIONS**
    
    user notify

**v-add-domain**

The function adds web/dns/mail domain to a server.

**OPTIONS**
    
    user domain [ip] restart
    
    
