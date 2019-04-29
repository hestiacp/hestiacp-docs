*******************************
Web domains management commands
*******************************

**v-restart-web**

Restart web server


**OPTIONS**

    None
    

**v-list-web-domain-accesslog**



Shows web domain access log


**OPTIONS**

    user domain [access] [format]
    
    
   
**v-add-web-domain-httpauth**

Set up basic HTTP AUTH password protection for web domain



**OPTIONS**

    user domain auth_user auth_password [restart]
    
    
**v-add-web-domain-ssl**

Adding ssl support for web domain.

The function turns on SSL support for a domain. 

Parameter *ssl_dir* is a path to directory where 2 or 3 ssl files can be found. 

Certificate file *domain.tld.crt* and its key *domain.tld.key* are mandatory. 

Certificate authority *domain.tld.ca* file is optional.

If home directory parameter ( *ssl_home* ) is not set, https domain uses public_shtml as separate document root directory.

**OPTIONS**

    user domain ssl_dir [ssl_home] [restart]


**v-update-web-domain-ssl**


The function updates the SSL certificate for a domain. 

Parameter *ssl_dir* is a path to directory where 2 or 3 ssl files can be found. 

Certificate file *domain.tld.crt* and its key *domain.tld.key* are mandatory. 

Certificate authority *domain.tld.ca* file is optional. 

**OPTIONS**

    user domain ssl_dir [restart]


**v-delete-web-domain-ssl USER DOMAIN**

deleting letsencrypt ssl certificate for web domain


**OPTIONS**

    username domain
    
    
**v-change-web-domain-ip**

The script changes IP address of web domain to specified in argument


**OPTIONS**

    user domain ip [restart]
    

    
**v-check-letsencrypt-domain**

The function check and validates domain using standard LetsEncrypt functionality


**OPTIONS**

    user domain
