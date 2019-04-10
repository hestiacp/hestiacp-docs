****************************
Panel Configuration Commands
****************************

**v-change-sys-pma PMA**

change phpMyAdmin URL in Hestia with argument given

**OPTIONS**

    new_url
    
**v-change-sys-webmail WEBMAIL**



change RoundCube URL in Hestia with argument given

**OPTIONS**

    new_url
   
**v-delete-user-2fa USER**

delete 2FA authentication for user specified in argument

**OPTIONS**

    username
    
**v-check-user-2fa USER TOKEN**

check 2FA token for user specified in argument

**OPTIONS**

    username token
    
**v-add-user-2fa USER**

add 2FA authentication for user specified in argument

**OPTIONS**

    username
    
**v-change-sys-language LANGUAGE**

change locale of *login page only* to given language

**OPTIONS**

    language code (e.g. en, de, ru)
    
**v-update-sys-ip**

updates system IP when running under hypervizor.

The function scans configured ip in the system and register them with Hestia internal database. 

This call is intended for use on vps servers, where ip is set by hypervizor (e.g. OpenVZ)

**OPTIONS**

    [user] [ip status]
    
    
    
    
    
    
    
    
    
    
