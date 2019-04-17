
**********************************
Mail subsystem management commands
**********************************

**v-rebuild-mail-domains**
 
The function rebuilds EXIM configuration files for all mail domains.



**OPTIONS**

    user
    

**v-add-mail-domain**



This function adds mail domain


**OPTIONS**

  user domain [antispam] [antivirus] [dkim] [dkim_size]
    
    
   
**v-add-mail-account**

The function add new email account for specified domain.



**OPTIONS**

     user domain account password [quota]
    
    
**v-change-mail-account-quota**

Script change mail disk quota for the account given

**OPTIONS**

    user domain account quota


**v-get-mail-account-value**


The function intended to get specific mail account parametr. 


**OPTIONS**

    user domain account key


**v-list-mail-domain-dkim-dns**

The function of obtaining domain dkim public key for proper setup in DNS records.


**OPTIONS**

    user domain [format]
    
    
**v-add-mail-account-fwd-only**

Script adds *fwd-only* flag


**OPTIONS**

    user domain account
    
 **v-add-mail-domain-catchall**

The function enables catchall account for incoming emails.

**OPTIONS**

    user domain email
