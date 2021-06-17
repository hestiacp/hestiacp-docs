*******************************************************************
v-acknowledge-user-notification
*******************************************************************

**update user notification**

**Label**:   `panel` 

**Options**: `USER` `NOTIFICATION` 


The function updates user notification.


*******************************************************************
v-add-backup-host
*******************************************************************

**add backup host**

**Label**:  

**Options**: `TYPE` `HOST` `USERNAME` `PASSWORD` `[PATH]` `[PORT]` 

**Examples**:

.. code-block:: bash
   
  v-add-backup-host sftp backup.acme.com admin p4$$w@Rd
 v-add-backup-host b2 bucketName keyID applicationKey
   

Add a new remote backup location. Currently SFTP, FTP and Backblaze are supported


*******************************************************************
v-add-cron-hestia-autoupdate
*******************************************************************

**add cron job for hestia autoupdates**

**Label**:  

**Options**: `MODE` 


The function adds cronjob for hestia autoupdate from apt or git.


*******************************************************************
v-add-cron-job
*******************************************************************

**add cron job**

**Label**:  

**Options**: `USER` `MIN` `HOUR` `DAY` `MONTH` `WDAY` `COMMAND` `[JOB]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-cron-job admin * * * * * sudo /usr/local/hestia/bin/v-backup-users
   

The function adds a job to cron daemon. When executing commands, any output is mailed to user's email if parameter REPORTS is set to 'yes'.


*******************************************************************
v-add-cron-letsencrypt-job
*******************************************************************

**add letsencrypt cronjob**

**Label**:  

**Options**: – 


The script for enabling letsencrypt cronjob


*******************************************************************
v-add-cron-reports
*******************************************************************

**add cron reports**

**Label**:  

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-add-cron-reports admin
   

The script for enabling reports on cron tasks and administrative notifications.


*******************************************************************
v-add-cron-restart-job
*******************************************************************

**add cron reports**

**Label**:  

**Options**: – 


The script for enabling restart cron tasks


*******************************************************************
v-add-database
*******************************************************************

**add database**

**Label**:  

**Options**: `USER` `DATABASE` `DBUSER` `DBPASS` `[TYPE]` `[HOST]` `[CHARSET]` 

**Examples**:

.. code-block:: bash
   
  v-add-database admin wordpress_db matt qwerty123
   

The function creates the database concatenating username and user_db. Supported types of databases you can get using v-list-sys-config script. If the host isn't stated and there are few hosts configured on the server, then the host will be defined by one of three algorithms. "First" will choose the first host in the list. "Random" will chose the host by a chance. "Weight" will distribute new database through hosts evenly. Algorithm and types of supported databases is designated in the main configuration file.


*******************************************************************
v-add-database-host
*******************************************************************

**add new database server**

**Label**:  

**Options**: `TYPE` `HOST` `DBUSER` `DBPASS` `[MAX_DB]` `[CHARSETS]` `[TEMPLATE]` `[PORT]` 

**Examples**:

.. code-block:: bash
   
  v-add-database-host mysql localhost alice p@$$wOrd
   

The function add new database server to the server pool. It supports local and remote database servers, which is useful for clusters. By adding a host you can set limit for number of databases on a host. Template parameter is used only for PostgreSQL and has an default value "template1". You can read more about templates in official PostgreSQL documentation.


*******************************************************************
v-add-database-temp-user
*******************************************************************

**add temp database user**

**Label**:   `database`  `hestia` 

**Options**: `USER` `DATABASE` `[TYPE]` `[HOST]` `[TTL]` 

**Examples**:

.. code-block:: bash
   
  v-add-database-temp-user wordress wordpress_db mysql
   

The function creates an temporary database user mysql_sso_db_XXXXXXXX and a random password The user has an limited validity and only granted access to the specific database Returns json to be read SSO Script


*******************************************************************
v-add-dns-domain
*******************************************************************

**add dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `IP` `[NS1]` `[NS2]` `[NS3]` `[NS4]` `[NS5]` `[NS6]` `[NS7]` `[NS8]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-dns-domain admin example.com ns1.example.com ns2.example.com '' '' '' '' '' '' yes
   

The function adds DNS zone with records defined in the template. If the exp argument isn't stated, the expiration date value will be set to next year. The soa argument is responsible for the relevant record. By default the first user's NS server is used. TTL is set as common for the zone and for all of its records with a default value of 14400 seconds.


*******************************************************************
v-add-dns-on-web-alias
*******************************************************************

**add dns domain or dns record after web domain alias**

**Label**:   `dns` 

**Options**: `USER` `ALIAS` `IP` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-dns-on-web-alias admin www.example.com 8.8.8.8
   

The function adds dns domain or dns record based on web domain alias.


*******************************************************************
v-add-dns-record
*******************************************************************

**add dns record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `RECORD` `TYPE` `VALUE` `[PRIORITY]` `[ID]` `[RESTART]` `[TTL]` 

**Examples**:

.. code-block:: bash
   
  v-add-dns-record admin acme.com www A 162.227.73.112
   

The call is used for adding new DNS record. Complex records of TXT, MX and SRV types can be used by a filling in the 'value' argument. The function also gets an id parameter for definition of certain record identifier or for the regulation of records.


*******************************************************************
v-add-domain
*******************************************************************

**add web/dns/mail domain**

**Label**:  

**Options**: `USER` `DOMAIN` `[IP]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-domain admin example.com
   

The function adds web/dns/mail domain to a server.


*******************************************************************
v-add-fastcgi-cache
*******************************************************************

**Enable FastCGI cache for nginx**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `[DURATION]` `[DEBUG]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-fastcgi-cache user domain.tld 30m
   

The function enables FastCGI cache for nginx Acceptable values for duration is time in seconds (10s) minutes (10m) or days (10d) Add "yes" as last parameter to append debug information to response headers


*******************************************************************
v-add-firewall-ban
*******************************************************************

**add firewall blocking rule**

**Label**:  

**Options**: `IP` `CHAIN` 

**Examples**:

.. code-block:: bash
   
  v-add-firewall-ban 37.120.129.20 MAIL
   

The function adds new blocking rule to system firewall


*******************************************************************
v-add-firewall-chain
*******************************************************************

**add firewall chain**

**Label**:  

**Options**: `CHAIN` `[PORT]` `[PROTOCOL]` `[PROTOCOL]` 

**Examples**:

.. code-block:: bash
   
  v-add-firewall-chain CRM 5678 TCP
   

The function adds new rule to system firewall


*******************************************************************
v-add-firewall-ipset
*******************************************************************

**add firewall ipset**

**Label**:   `hestia` 

**Options**: `NAME` `[SOURCE]` `[IPVERSION]` `[AUTOUPDATE]` `[FORCE]` 

**Examples**:

.. code-block:: bash
   
  v-add-firewall-ipset country-nl 'http://ipverse.net/ipblocks/data/countries/nl.zone'
   

The function adds new ipset to system firewall


*******************************************************************
v-add-firewall-rule
*******************************************************************

**add firewall rule**

**Label**:  

**Options**: `ACTION` `IP` `PORT` `[PROTOCOL]` `[COMMENT]` `[RULE]` 

**Examples**:

.. code-block:: bash
   
  v-add-firewall-rule DROP 185.137.111.77 25
   

The function adds new rule to system firewall


*******************************************************************
v-add-fs-archive
*******************************************************************

**archive directory**

**Label**:  

**Options**: `USER` `ARCHIVE` `SOURCE` `[SOURCE...]` 

**Examples**:

.. code-block:: bash
   
  v-add-fs-archive admin archive.tar readme.txt
   

The function creates tar archive


*******************************************************************
v-add-fs-directory
*******************************************************************

**add directory**

**Label**:  

**Options**: `USER` `DIRECTORY` 

**Examples**:

.. code-block:: bash
   
  v-add-fs-directory admin mybar
   

The function creates new directory on the file system


*******************************************************************
v-add-fs-file
*******************************************************************

**add file**

**Label**:  

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-add-fs-file admin readme.md
   

The function creates new files on file system


*******************************************************************
v-add-letsencrypt-domain
*******************************************************************

**check letsencrypt domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[ALIASES]` `[MAIL]` 

**Examples**:

.. code-block:: bash
   
  v-add-letsencrypt-domain admin wonderland.com www.wonderland.com
   

The function check and validates domain with Let's Encrypt


*******************************************************************
v-add-letsencrypt-host
*******************************************************************

**add letsencrypt for host and backend**

**Label**:   `hestia` 

**Options**: – 


The function check and validates the backend certificate and generate a new let's encrypt certificate.


*******************************************************************
v-add-letsencrypt-user
*******************************************************************

**register letsencrypt user account**

**Label**:   `web` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-add-letsencrypt-user bob
   

The function creates and register LetsEncrypt account


*******************************************************************
v-add-mail-account
*******************************************************************

**add mail domain account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `PASSWORD` `[QUOTA]` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-account user example.com john P4$$vvOrD
   

The function add new email account.


*******************************************************************
v-add-mail-account-alias
*******************************************************************

**add mail account alias aka nickname**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-account-alias admin acme.com alice alicia
   

The function add new email alias.


*******************************************************************
v-add-mail-account-autoreply
*******************************************************************

**add mail account autoreply message**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `MESSAGE` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-account-autoreply admin example.com user Hello from e-mail!
   

The function add new email account.


*******************************************************************
v-add-mail-account-forward
*******************************************************************

**add mail account forward address**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `FORWARD` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-account-forward admin acme.com alice bob
   

The function add new email account.


*******************************************************************
v-add-mail-account-fwd-only
*******************************************************************

**add mail account forward-only flag**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-account-fwd-only admin example.com user
   

The function adds fwd-only flag


*******************************************************************
v-add-mail-domain
*******************************************************************

**add mail domain**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[ANTISPAM]` `[ANTIVIRUS]` `[DKIM]` `[DKIM_SIZE]` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain admin mydomain.tld
   

The function adds MAIL domain.


*******************************************************************
v-add-mail-domain-antispam
*******************************************************************

**add mail domain antispam support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain-antispam admin mydomain.tld
   

The function enables spamassasin for incoming emails.


*******************************************************************
v-add-mail-domain-antivirus
*******************************************************************

**add mail domain antivirus support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain-antivirus admin mydomain.tld
   

The function enables clamav scan for incoming emails.


*******************************************************************
v-add-mail-domain-catchall
*******************************************************************

**add mail domain catchall account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `EMAIL` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain-catchall admin example.com master@example.com
   

The function enables catchall account for incoming emails.


*******************************************************************
v-add-mail-domain-dkim
*******************************************************************

**add mail domain dkim support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[DKIM_SIZE]` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain-dkim admin acme.com
   

The function adds DKIM signature to outgoing domain emails.


*******************************************************************
v-add-mail-domain-smtp-relay
*******************************************************************

**Add mail domain smtp relay support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `HOST` `USERNAME` `PASSWORD` `[PORT]` 

**Examples**:

.. code-block:: bash
   
  v-add-mail-domain-smtp-relay user domain.tld srv.smtprelay.tld uname123 pass12345
   

This function adds mail domain smtp relay support.


*******************************************************************
v-add-mail-domain-ssl
*******************************************************************

**add mail SSL for $domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 


The function turns on SSL support for a mail domain. Parameter ssl_dir is a path to a directory where 2 or 3 ssl files can be found. Certificate file mail.domain.tld.crt and its key mail.domain.tld.key are mandatory. Certificate authority mail.domain.tld.ca file is optional.


*******************************************************************
v-add-mail-domain-webmail
*******************************************************************

**add webmail support for a domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `[WEBMAIL]` `[RESTART]` `[QUIET]` 

**Examples**:

.. code-block:: bash
   
  v-add-sys-webmail user domain.com
 example: v-add-sys-webmail user domain.com rainloop
 example: v-add-sys-webmail user domain.com roundcube
   

this function enables webmail client for a mail domain.


*******************************************************************
v-add-remote-dns-domain
*******************************************************************

**add remote dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `[FLUSH]` 

**Examples**:

.. code-block:: bash
   
  v-add-remote-dns-domain admin mydomain.tld yes
   

The function synchronize dns domain with the remote server.


*******************************************************************
v-add-remote-dns-host
*******************************************************************

**add new remote dns host**

**Label**:   `dns` 

**Options**: `HOST` `PORT` `USER` `PASSWORD` `[TYPE]` `[DNS_USER]` 

**Examples**:

.. code-block:: bash
   
  v-add-remote-dns-host slave.your_host.com 8083 admin your_passw0rd
   

.. code-block:: bash
   
  v-add-remote-dns-host slave.your_host.com 8083 api_key ''
   

The function adds remote dns server to the dns cluster. As alternative api_key generated on the slave server. See v-generate-api-key can be used to connect the remote dns server


*******************************************************************
v-add-remote-dns-record
*******************************************************************

**add remote dns domain record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` 

**Examples**:

.. code-block:: bash
   
  v-add-remote-dns-record bob acme.com 23
   

The function synchronize dns domain with the remote server.


*******************************************************************
v-add-sys-api-ip
*******************************************************************

**add ip adresss to allowed ip list api**

**Label**:   `hestia` 

**Options**: `IP` 

**Examples**:

.. code-block:: bash
   
  v-add-sys-api-ip 1.1.1.1
   




*******************************************************************
v-add-sys-filemanager
*******************************************************************

**add file manager functionality to Hestia Control Panel**

**Label**:   `hestia` 

**Options**: `[MODE]` 


The function installs the File Manager on the server for access through the Web interface.


*******************************************************************
v-add-sys-firewall
*******************************************************************

**add system firewall**

**Label**:  

**Options**: – 


The script enables firewall


*******************************************************************
v-add-sys-ip
*******************************************************************

**add system ip address**

**Label**:  

**Options**: `IP` `NETMASK` `[INTERFACE]` `[USER]` `[IP_STATUS]` `[IP_NAME]` `[NAT_IP]` `[HELO]` 

**Examples**:

.. code-block:: bash
   
  v-add-sys-ip 216.239.32.21 255.255.255.0
   

The function adds ip address into a system. It also creates rc scripts. You can specify ip name which will be used as root domain for temporary aliases. For example, if you set a1.myhosting.com as name, each new domain created on this ip will automatically receive alias $domain.a1.myhosting.com. Of course you must have wildcard record `*`.a1.myhosting.com pointed to ip. This feature is very handy when customer wants to test domain before dns migration.


*******************************************************************
v-add-sys-pma-sso
*******************************************************************

**enables support for single sign on PHPmyAdmin**

**Label**:  

**Options**: `[MODE]` 


Enables support for SSO to PHPmyAdmin


*******************************************************************
v-add-sys-quota
*******************************************************************

**add system quota**

**Label**:  

**Options**: – 


The script enables filesystem quota on /home partition Some kernels do require additional packages to be installed first


*******************************************************************
v-add-sys-rainloop
*******************************************************************

**Install Rainloop in HestiaCP**

**Label**:   `hestia` 

**Options**: `[MODE]` 


The function installs Rainloop


*******************************************************************
v-add-sys-roundcube
*******************************************************************

**Install RoundCube for Nginx/Apache2**

**Label**:   `hestia` 

**Options**: `[MODE]` 


The function installs Round Cube


*******************************************************************
v-add-sys-sftp-jail
*******************************************************************

**add system sftp jail**

**Label**:  

**Options**: `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-sys-sftp-jail yes
   

The script enables sftp jailed environment


*******************************************************************
v-add-sys-smtp-relay
*******************************************************************

**add system wide smtp relay support**

**Label**:   `hestia` 

**Options**: `HOST` `USERNAME` `PASSWORD` `[PORT]` 

**Examples**:

.. code-block:: bash
   
  v-add-sys-smtp-relay srv.smtprelay.tld uname123 pass12345
   

this function adds system wide smtp relay support.


*******************************************************************
v-add-user
*******************************************************************

**add system user**

**Label**:  

**Options**: `USER` `PASSWORD` `EMAIL` `[PACKAGE]` `[NAME]` `[LASTNAME]` 

**Examples**:

.. code-block:: bash
   
  v-add-user admin2 P4$$w@rD bgates@aol.com
   

The function creates new user account.


*******************************************************************
v-add-user-2fa
*******************************************************************

**add 2fa to existing user**

**Label**:   `hestia`  `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-add-user-2fa admin
   

The function creates a new 2fa token for user.


*******************************************************************
v-add-user-composer
*******************************************************************

**add composer (php dependency manager) for a user**

**Label**:   `hestia` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-add-user-composer user [version]
   

The function adds support for composer (php dependency manager) Homepage: https://getcomposer.org/


*******************************************************************
v-add-user-notification
*******************************************************************

**add user notification**

**Label**:  

**Options**: `USER` `TOPIC` `NOTICE` `[TYPE]` 


The function adds user notification.


*******************************************************************
v-add-user-package
*******************************************************************

**adding user package**

**Label**:  

**Options**: `PKG_DIR` `PACKAGE` `[REWRITE]` 


The function adds new user package to the system.


*******************************************************************
v-add-user-sftp-jail
*******************************************************************

**add user sftp jail**

**Label**:  

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-user-sftp-jail admin
   

The script enables sftp jailed environment


*******************************************************************
v-add-user-sftp-key
*******************************************************************

**add user sftp key**

**Label**:   `hestia` 

**Options**: `USER` `[TTL]` 


The script creates and updates ssh key for filemanager usage


*******************************************************************
v-add-user-ssh-key
*******************************************************************

**add ssh key**

**Label**:   `hestia` 

**Options**: `USER` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-add-user-ssh-key user 'valid ssh key'
   

Function check if $user/.ssh/authorized_keys exists and create it. After that it append the new key(s)


*******************************************************************
v-add-user-wp-cli
*******************************************************************

**add wp-cli for a user**

**Label**:   `hestia` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-add-user-wp-cli user
   

The function adds support for wp-cli to the user account


*******************************************************************
v-add-web-domain
*******************************************************************

**add web domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[IP]` `[RESTART]` `[ALIASES]` `[PROXY_EXTENSIONS]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain admin wonderland.com 192.18.22.43 yes www.wonderland.com
   

The function adds virtual host to a server. In cases when ip is undefined in the script, "default" template will be used. The alias of www.domain.tld type will be automatically assigned to the domain unless "none" is transmited as argument. If ip have associated dns name, this domain will also get the alias domain-tpl.$ipname. An alias with the ip name is useful during the site testing while dns isn't moved to server yet.


*******************************************************************
v-add-web-domain-alias
*******************************************************************

**add web domain alias**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `ALIASES` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-alias admin acme.com www.acme.com yes
   

The call is intended for adding aliases to a domain (it is also called "domain parking"). The function supports wildcards `*`.domain.tpl.


*******************************************************************
v-add-web-domain-allow-users
*******************************************************************

**Allow other users create subdomains**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-allow-users admin admin.com
   

Bypass the rule check for Enforce subdomain ownership for a specific domain. Enforce subdomain ownership setting in /edit/server/ set to no will always overwrite this behaviour eg: admin adds admin.com user can create user.admin.com


*******************************************************************
v-add-web-domain-backend
*******************************************************************

**add web domain backend**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[TEMPLATE]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-backend admin exmaple.com default yes
   

The call is used for adding web backend configuration.


*******************************************************************
v-add-web-domain-ftp
*******************************************************************

**add ftp account for web domain.**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PASSWORD` `[FTP_PATH]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-ftp alice wonderland.com alice_ftp p4$$vvOrD
   

The function creates additional ftp account for web domain.


*******************************************************************
v-add-web-domain-httpauth
*******************************************************************

**add password protection for web domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `AUTH_USER` `AUTH_PASSWORD` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-httpauth admin acme.com user02 super_pass
   

The call is used for securing web domain with http auth


*******************************************************************
v-add-web-domain-proxy
*******************************************************************

**add webdomain proxy support**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[TEMPLATE]` `[EXTENTIONS]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-proxy admin example.com
   

The function enables proxy support for a domain. This can significantly improve website speed.


*******************************************************************
v-add-web-domain-redirect
*******************************************************************

**Adding force redirect to domain**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `REDIRECT` `HTTPCODE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-redirect user domain.tld domain.tld 
 example: v-add-web-domain-redirect user domain.tld www.domain.tld 
 example: v-add-web-domain-redirect user domain.tld shop.domain.tld  
 example: v-add-web-domain-redirect user domain.tld different-domain.com
 example: v-add-web-domain-redirect user domain.tld shop.different-domain.com
 example: v-add-web-domain-redirect user domain.tld different-domain.com 302
   

Function creates a forced redirect to a domain


*******************************************************************
v-add-web-domain-ssl
*******************************************************************

**adding ssl for domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `SSL_DIR` `[SSL_HOME]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-ssl admin example.com /home/admin/conf/example.com/web
   

The function turns on SSL support for a domain. Parameter ssl_dir is a path to directory where 2 or 3 ssl files can be found. Certificate file domain.tld.crt and its key domain.tld.key are mandatory. Certificate authority domain.tld.ca file is optional. If home directory parameter (ssl_home) is not set, https domain uses public_shtml as separate documentroot directory.


*******************************************************************
v-add-web-domain-ssl-force
*******************************************************************

**Adding force SSL for a domain**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-ssl-force admin acme.com
   

The function forces SSL for the requested domain.


*******************************************************************
v-add-web-domain-ssl-hsts
*******************************************************************

**Adding hsts to a domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` 


The function enables HSTS for the requested domain.


*******************************************************************
v-add-web-domain-ssl-preset
*******************************************************************

**Adding force SSL for a domain**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `[SSL]` 


Up on creating an web domain set the SSL Force values due to the delay of LE due to DNS propergation over DNS cluster When LE has been activated it will set the actions


*******************************************************************
v-add-web-domain-stats
*******************************************************************

**add log analyzer to generate domain statistics**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `TYPE` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-stats admin example.com awstats
   

The call is used for enabling log analyzer system to a domain. For viewing the domain statistics use http://domain.tld/vstats/ link. Access this page is not protected by default. If you want to secure it with passwords you should use v-add-web-domain_stat_auth script.


*******************************************************************
v-add-web-domain-stats-user
*******************************************************************

**add password protection to web domain statistics**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `STATS_USER` `STATS_PASSWORD` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-stats-user admin example.com watchdog your_password
   

The call is used for securing the web statistics page.


*******************************************************************
v-add-web-php
*******************************************************************

**add php fpm version**

**Label**:   `hestia` 

**Options**: `VERSION` 

**Examples**:

.. code-block:: bash
   
  v-add-web-php 8.0
   

The function checks and delete a fpm php version if not used by any domain.


*******************************************************************
v-backup-user
*******************************************************************

**backup system user with all its objects**

**Label**:  

**Options**: `USER` `NOTIFY` 

**Examples**:

.. code-block:: bash
   
  v-backup-user admin yes
   

The call is used for backing up user with all its domains and databases.


*******************************************************************
v-backup-users
*******************************************************************

**backup all users**

**Label**:  

**Options**: – 


The function backups all system users.


*******************************************************************
v-change-cron-job
*******************************************************************

**change cron job**

**Label**:  

**Options**: `USER` `JOB` `MIN` `HOUR` `DAY` `MONTH` `WDAY` `COMMAND` 

**Examples**:

.. code-block:: bash
   
  v-change-cron-job admin 7 * * * * * * /usr/bin/uptime
   

The function is used for changing existing job. It fully replace job parameters with new one but with same id.


*******************************************************************
v-change-database-host-password
*******************************************************************

**change database server password**

**Label**:  

**Options**: `TYPE` `HOST` `USER` `PASSWORD` 

**Examples**:

.. code-block:: bash
   
  v-change-database-host-password mysql localhost wp_user pA$$w@rD
   

The function changes database server password.


*******************************************************************
v-change-database-owner
*******************************************************************

**change database owner**

**Label**:  

**Options**: `DATABASE` `USER` 

**Examples**:

.. code-block:: bash
   
  v-change-database-owner mydb alice
   

The function for changing database owner.


*******************************************************************
v-change-database-password
*******************************************************************

**change database password**

**Label**:  

**Options**: `USER` `DATABASE` `DBPASS` 

**Examples**:

.. code-block:: bash
   
  v-change-database-password admin wp_db neW_pAssWorD
   

The function for changing database user password to a database. It uses the full name of database as argument.


*******************************************************************
v-change-database-user
*******************************************************************

**change database username**

**Label**:  

**Options**: `USER` `DATABASE` `DBUSER` `[DBPASS]` 

**Examples**:

.. code-block:: bash
   
  v-change-database-user admin my_db joe_user
   

The function for changing database user. It uses the


*******************************************************************
v-change-dns-domain-exp
*******************************************************************

**change dns domain expiration date**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `EXP` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-domain-exp admin domain.pp.ua 2020-11-20
   

The function of changing the term of expiration domain's registration. The serial number will be refreshed automatically during update.


*******************************************************************
v-change-dns-domain-ip
*******************************************************************

**change dns domain ip address**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `IP` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-domain-ip admin domain.com 123.212.111.222
   

The function for changing the main ip of DNS zone.


*******************************************************************
v-change-dns-domain-soa
*******************************************************************

**change dns domain soa record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `SOA` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-domain-soa admin acme.com d.ns.domain.tld
   

The function for changing SOA record. This type of records can not be modified by v-change-dns-record call.


*******************************************************************
v-change-dns-domain-tpl
*******************************************************************

**change dns domain template**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-domain-tpl admin example.com child-ns yes
   

The function for changing the template of records. By updating old records will be removed and new records will be generated in accordance with parameters of new template.


*******************************************************************
v-change-dns-domain-ttl
*******************************************************************

**change dns domain ttl**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `TTL` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-domain-ttl alice example.com 14400
   

The function for changing the time to live TTL parameter for all records.


*******************************************************************
v-change-dns-record
*******************************************************************

**change dns domain record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` `RECORD` `TYPE` `VALUE` `[PRIORITY]` `[RESTART]` `[TTL]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-record admin domain.ua 42 192.18.22.43
   

The function for changing DNS record.


*******************************************************************
v-change-dns-record-id
*******************************************************************

**change dns domain record id**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` `NEWID` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-dns-record-id admin acme.com 24 42 yes
   

The function for changing internal record id.


*******************************************************************
v-change-domain-owner
*******************************************************************

**change domain owner**

**Label**:  

**Options**: `DOMAIN` `USER` 

**Examples**:

.. code-block:: bash
   
  v-change-domain-owner www.example.com bob
   

The function of changing domain ownership.


*******************************************************************
v-change-firewall-rule
*******************************************************************

**change firewall rule**

**Label**:  

**Options**: `RULE` `ACTION` `IP` `PORT` `[PROTOCOL]` `[COMMENT]` 

**Examples**:

.. code-block:: bash
   
  v-change-firewall-rule 3 ACCEPT 5.188.123.17 443
   

The function is used for changing existing firewall rule. It fully replace rule with new one but keeps same id.


*******************************************************************
v-change-fs-file-permission
*******************************************************************

**change file permission**

**Label**:  

**Options**: `USER` `FILE` `PERMISSIONS` 

**Examples**:

.. code-block:: bash
   
  v-change-fs-file-permission admin readme.txt 0777
   

The function changes file access permissions on the file system


*******************************************************************
v-change-mail-account-password
*******************************************************************

**change mail account password**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `PASSWORD` 

**Examples**:

.. code-block:: bash
   
  v-change-mail-account-password admin mydomain.tld user p4$$vvOrD
   

The function changes email account password.


*******************************************************************
v-change-mail-account-quota
*******************************************************************

**change mail account quota**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `QUOTA` 

**Examples**:

.. code-block:: bash
   
  v-change-mail-account-quota admin mydomain.tld user01 unlimited
   

The function changes email account disk quota.


*******************************************************************
v-change-mail-domain-catchall
*******************************************************************

**change mail domain catchall email**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `EMAIL` 

**Examples**:

.. code-block:: bash
   
  v-change-mail-domain-catchall user01 mydomain.tld master@mydomain.tld
   

The function changes mail domain catchall.


*******************************************************************
v-change-mail-domain-sslcert
*******************************************************************

**change domain ssl certificate**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 


The function changes SSL domain certificate and the key. If ca file present it will be replaced as well.


*******************************************************************
v-change-remote-dns-domain-exp
*******************************************************************

**change remote dns domain expiration date**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 


The function synchronize dns domain with the remote server.


*******************************************************************
v-change-remote-dns-domain-soa
*******************************************************************

**change remote dns domain SOA**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-change-remote-dns-domain-soa admin example.org.uk
   

The function synchronize dns domain with the remote server.


*******************************************************************
v-change-remote-dns-domain-ttl
*******************************************************************

**change remote dns domain TTL**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-change-remote-dns-domain-ttl admin domain.tld
   

The function synchronize dns domain with the remote server.


*******************************************************************
v-change-sys-api
*******************************************************************

**Enable / Disable API access**

**Label**:   `hestia` 

**Options**: `STATUS` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-api enable
 # Enable API
   

.. code-block:: bash
   
  v-change-sys-api disable
 # Disable API
   

Enabled / Disable API


*******************************************************************
v-change-sys-config-value
*******************************************************************

**change sysconfig value**

**Label**:   `panel` 

**Options**: `KEY` `VALUE` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-config-value VERSION 1.0
   

The function is for changing main config settings such as COMPANY_NAME or COMPANY_EMAIL and so on.


*******************************************************************
v-change-sys-db-alias
*******************************************************************

**change phpmyadmin/phppgadmin alias url**

**Label**:   `hestia` 

**Options**: `TYPE` `ALIAS` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-db-alias pma phpmyadmin
 # Sets phpMyAdmin alias to phpmyadmin
   

.. code-block:: bash
   
  v-change-sys-db-alias pga phppgadmin
 # Sets phpPgAdmin alias to phppgadmin
   

This function changes the database editor url in apache2 or nginx configuration.


*******************************************************************
v-change-sys-demo-mode
*******************************************************************

**enable or disable demo mode**

**Label**:   `hestia` 

**Options**: `ACTIVE` 


This function will set the demo mode variable, which will prevent usage of certain v-scripts in the backend and prevent modification of objects in the control panel. It will also disable virtual hosts for Apache and NGINX for domains which have been created.


*******************************************************************
v-change-sys-hestia-ssl
*******************************************************************

**change hestia ssl certificate**

**Label**:   `panel` 

**Options**: `SSL_DIR` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-hestia-ssl /home/new/dir/path yes
   

The function changes hestia SSL certificate and the key.


*******************************************************************
v-change-sys-hostname
*******************************************************************

**change hostname**

**Label**:   `panel` 

**Options**: `HOSTNAME` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-hostname mydomain.tld
   

The function for changing system hostname.


*******************************************************************
v-change-sys-ip-helo
*******************************************************************

**change ip HELO/SMTP Banner**

**Label**:  

**Options**: `IP` `HELO` 


The function for changing HELO/SMTP Banner associated with ip.


*******************************************************************
v-change-sys-ip-name
*******************************************************************

**change ip name**

**Label**:   `panel` 

**Options**: `IP` `NAME` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-ip-name 80.122.52.70 acme.com
   

The function for changing dns domain associated with ip.


*******************************************************************
v-change-sys-ip-nat
*******************************************************************

**change ip nat address**

**Label**:   `panel` 

**Options**: `IP` `NAT_IP` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-ip-nat 185.209.50.140 10.110.104.205
   

The function for changing nat ip associated with ip.


*******************************************************************
v-change-sys-ip-owner
*******************************************************************

**change ip owner**

**Label**:   `panel` 

**Options**: `IP` `USER` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-ip-owner 91.198.136.14 admin
   

The function of changing ip address ownership.


*******************************************************************
v-change-sys-ip-status
*******************************************************************

**change ip status**

**Label**:   `panel` 

**Options**: `IP` `IP_STATUS` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-ip-status 91.198.136.14 yourstatus
   

The function of changing an ip address's status.


*******************************************************************
v-change-sys-language
*******************************************************************

**change sys language**

**Label**:   `panel` 

**Options**: `LANGUAGE` `[UPDATE_USERS]` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-language ru
   

The function for changing system language.


*******************************************************************
v-change-sys-port
*******************************************************************

**change system backend port**

**Label**:   `hestia`  `panel` 

**Options**: `PORT` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-port 5678
   

The function for changing the system backend port in NGINX configuration.


*******************************************************************
v-change-sys-release
*******************************************************************

**update web templates**

**Label**:   `hestia` 

**Options**: `[RESTART]` 


The function for changing the release branch for the Hestia Control Panel. This allows the user to switch between stable and pre-release builds which will automaticlly update based on the appropriate release schedule if auto-update is turned on.


*******************************************************************
v-change-sys-service-config
*******************************************************************

**change service config**

**Label**:   `panel` 

**Options**: `CONFIG` `SERVICE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-service-config /home/admin/dovecot.conf dovecot yes
   

The function for changing service confguration.


*******************************************************************
v-change-sys-timezone
*******************************************************************

**change system timezone**

**Label**:   `panel` 

**Options**: `TIMEZONE` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-timezone Europe/Berlin
   

The function for changing system timezone.


*******************************************************************
v-change-sys-webmail
*******************************************************************

**change webmail alias url**

**Label**:   `hestia`  `panel` 

**Options**: `WEBMAIL` 

**Examples**:

.. code-block:: bash
   
  v-change-sys-webmail YourtrickyURLhere
   

This function changes the webmail url in apache2 or nginx configuration.


*******************************************************************
v-change-user-config-value
*******************************************************************

**changes user configuration value**

**Label**:   `hestia` 

**Options**: `USER` `KEY` `VALUE` 

**Examples**:

.. code-block:: bash
   
  v-change-user-config-value admin ROLE admin
   

Changes key/value for specified user.


*******************************************************************
v-change-user-contact
*******************************************************************

**change user contact email**

**Label**:   `panel` 

**Options**: `USER` `EMAIL` 

**Examples**:

.. code-block:: bash
   
  v-change-user-contact admin admin@yahoo.com
   

The function for changing of e-mail associated with a certain user.


*******************************************************************
v-change-user-language
*******************************************************************

**change user language**

**Label**:   `panel` 

**Options**: `USER` `LANGUAGE` 

**Examples**:

.. code-block:: bash
   
  v-change-user-language admin en
   

The function for changing language.


*******************************************************************
v-change-user-name
*******************************************************************

**change user full name**

**Label**:   `panel` 

**Options**: `USER` `NAME` `[LAST_NAME]` 

**Examples**:

.. code-block:: bash
   
  v-change-user-name admin John Smith
   

The function allow to change user's full name.


*******************************************************************
v-change-user-ns
*******************************************************************

**change user nameservers**

**Label**:   `panel` 

**Options**: `USER` `NS1` `NS2` `[NS3]` `[NS4]` `[NS5]` `[NS6]` `[NS7]` `[NS8]` 

**Examples**:

.. code-block:: bash
   
  v-change-user-ns ns1.domain.tld ns2.domain.tld
   

The function for changing default nameservers for specific user.


*******************************************************************
v-change-user-package
*******************************************************************

**change user package**

**Label**:   `panel` 

**Options**: `USER` `PACKAGE` `[FORCE]` 

**Examples**:

.. code-block:: bash
   
  v-change-user-package admin yourpackage
   

The function changes user's hosting package.


*******************************************************************
v-change-user-password
*******************************************************************

**change user password**

**Label**:   `panel` 

**Options**: `USER` `PASSWORD` 

**Examples**:

.. code-block:: bash
   
  v-change-user-password admin NewPassword123
   

The function changes user's password and updates RKEY value.


*******************************************************************
v-change-user-php-cli
*******************************************************************

**add php  version alias to .bash_aliases**

**Label**:   `hestia` 

**Options**: `USER` `VERSION` 

**Examples**:

.. code-block:: bash
   
  v-change-user-php-cli user 7.4
   

add line to .bash_aliases to set default php command line version when multi-php is enabled.


*******************************************************************
v-change-user-rkey
*******************************************************************

**change user random key**

**Label**:   `hestia` 

**Options**: `USER` `[HASH]` 


The function changes user's RKEY value thats has been used for security value to be used forgot password function only.


*******************************************************************
v-change-user-role
*******************************************************************

**updates user role**

**Label**:   `hestia` 

**Options**: `USER` `ROLE` 

**Examples**:

.. code-block:: bash
   
  v-change-user-role user administrator
   

Give/revoke user administrator rights to manage all accounts as admin


*******************************************************************
v-change-user-shell
*******************************************************************

**change user shell**

**Label**:   `panel` 

**Options**: `USER` `SHELL` 

**Examples**:

.. code-block:: bash
   
  v-change-user-shell admin nologin
   

The function changes system shell of a user. Shell gives ability to use ssh.


*******************************************************************
v-change-user-sort-order
*******************************************************************

**updates user role**

**Label**:   `hestia` 

**Options**: `USER` `SORT_ORDER` 

**Examples**:

.. code-block:: bash
   
  v-change-user-sort-order user date
   

Changes web UI display sort order for specified user.


*******************************************************************
v-change-user-template
*******************************************************************

**change user default template**

**Label**:   `panel` 

**Options**: `USER` `TYPE` `TEMPLATE` 

**Examples**:

.. code-block:: bash
   
  v-change-user-template admin WEB wordpress
   

The function changes default user web template.


*******************************************************************
v-change-user-theme
*******************************************************************

**updates user role**

**Label**:   `hestia` 

**Options**: `USER` `ROLE` 

**Examples**:

.. code-block:: bash
   
  v-change-user-theme user theme
   

Changes web UI display theme for specified user.


*******************************************************************
v-change-web-domain-backend-tpl
*******************************************************************

**change web domain backend template**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-backend-tpl admin acme.com PHP-7_4
   

The function changes backend template


*******************************************************************
v-change-web-domain-dirlist
*******************************************************************

**enable/disable directory listing**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `MODE` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-dirlist user demo.com on
   

The call is used for changing the directory list mode.


*******************************************************************
v-change-web-domain-docroot
*******************************************************************

**Changes the document root for an existing web domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `TARGET_DOMAIN` `[DIRECTORY]` `[PHP]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-docroot admin domain.tld otherdomain.tld
 # add custom docroot
 # points domain.tld to otherdomain.tld's document root.
   

.. code-block:: bash
   
  v-change-web-domain-docroot admin test.local default
 # remove custom docroot
 # returns document root to default value for domain.
   

This call changes the document root of a chosen web domain to another available domain under the user context.


*******************************************************************
v-change-web-domain-ftp-password
*******************************************************************

**change ftp user password.**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PASSWORD` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-ftp-password admin example.com ftp_usr ftp_qwerty
   

The function changes ftp user password.


*******************************************************************
v-change-web-domain-ftp-path
*******************************************************************

**change path for ftp user.**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `FTP_USER` `FTP_PATH` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-ftp-path admin example.com /home/admin/example.com
   

The function changes ftp user path.


*******************************************************************
v-change-web-domain-httpauth
*******************************************************************

**change password for http auth user**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `AUTH_USER` `AUTH_PASSWORD` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-httpauth admin acme.com alice white_rA$$bIt
   

The call is used for changing http auth user password


*******************************************************************
v-change-web-domain-ip
*******************************************************************

**change web domain ip**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-ip admin example.com 167.86.105.230 yes
   

The call is used for changing domain ip


*******************************************************************
v-change-web-domain-name
*******************************************************************

**change web domain name**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `NEW_DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-name alice wonderland.com lookinglass.com yes
   

The call is used for changing the domain name.


*******************************************************************
v-change-web-domain-proxy-tpl
*******************************************************************

**change web domain proxy template**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `TEMPLATE` `[EXTENTIONS]` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-proxy-tpl admin domain.tld hosting
   

The function changes proxy template


*******************************************************************
v-change-web-domain-sslcert
*******************************************************************

**change domain ssl certificate**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-sslcert admin example.com /home/admin/tmp
   

The function changes SSL domain certificate and the key. If ca file present it will be replaced as well.


*******************************************************************
v-change-web-domain-sslhome
*******************************************************************

**changing domain ssl home**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `SSL_HOME` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-sslhome admin acme.com single
 example: v-change-web-domain-sslhome admin acme.com same
   

The function changes SSL home directory. Single will seperate the both public_html / public_shtml. Same will always point to public_shtml


*******************************************************************
v-change-web-domain-stats
*******************************************************************

**change web domain statistics**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `TYPE` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-stats admin example.com awstats
   

The function of deleting site's system of statistics. Its type is automatically chooses from client's configuration file.


*******************************************************************
v-change-web-domain-tpl
*******************************************************************

**change web domain template**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `TEMPLATE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-change-web-domain-tpl admin acme.com opencart
   

The function changes template of the web configuration file. The content of webdomain directories remains untouched.


*******************************************************************
v-check-api-key
*******************************************************************

**check api key**

**Label**:  

**Options**: `KEY` `[IP]` 

**Examples**:

.. code-block:: bash
   
  v-check-api-key random_key 127.0.0.1
   

The function checks a key file in $HESTIA/data/keys/


*******************************************************************
v-check-fs-permission
*******************************************************************

**open file**

**Label**:  

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-check-fs-permission admin readme.txt
   

The function opens/reads files on the file system


*******************************************************************
v-check-user-2fa
*******************************************************************

**check user token**

**Label**:   `hestia`  `panel` 

**Options**: `USER` `TOKEN` 

**Examples**:

.. code-block:: bash
   
  v-check-user-2fa admin 493690
   

The function verifies user 2fa token.


*******************************************************************
v-check-user-hash
*******************************************************************

**check user hash**

**Label**:  

**Options**: `USER` `HASH` `[IP]` 

**Examples**:

.. code-block:: bash
   
  v-check-user-hash admin CN5JY6SMEyNGnyCuvmK5z4r7gtHAC4mRZ...
   

The function verifies user hash


*******************************************************************
v-check-user-password
*******************************************************************

**check user password**

**Label**:  

**Options**: `USER` `PASSWORD` `[IP]` 

**Examples**:

.. code-block:: bash
   
  v-check-user-password admin qwerty1234
   

The function verifies user password from file


*******************************************************************
v-copy-fs-directory
*******************************************************************

**copy directory**

**Label**:  

**Options**: `USER` `SRC_DIRECTORY` `DST_DIRECTORY` 

**Examples**:

.. code-block:: bash
   
  v-copy-fs-directory alice /home/alice/dir1 /home/bob/dir2
   

The function copies directory on the file system


*******************************************************************
v-copy-fs-file
*******************************************************************

**copy file**

**Label**:  

**Options**: `USER` `SRC_FILE` `DST_FILE` 

**Examples**:

.. code-block:: bash
   
  v-copy-fs-file admin readme.txt readme_new.txt
   

The function copies file on the file system


*******************************************************************
v-copy-user-package
*******************************************************************

**duplicate existing package**

**Label**:   `hestia` 

**Options**: `PACKAGE` `NEW_PACKAGE` 

**Examples**:

.. code-block:: bash
   
  v-copy-user-package default new
   

The function allows the user to duplicate an existing package file to facilitate easier configuration.


*******************************************************************
v-delete-backup-host
*******************************************************************

**delete backup ftp server**

**Label**:  

**Options**: `TYPE` `[HOST]` 

**Examples**:

.. code-block:: bash
   
  v-delete-backup-host sftp
   

The function deletes ftp backup host


*******************************************************************
v-delete-cron-hestia-autoupdate
*******************************************************************

**delete hestia autoupdate cron job**

**Label**:   `hestia` 

**Options**: – 


The function deletes hestia autoupdate cron job.


*******************************************************************
v-delete-cron-job
*******************************************************************

**delete cron job**

**Label**:  

**Options**: `USER` `JOB` 

**Examples**:

.. code-block:: bash
   
  v-delete-cron-job admin 9
   

The function deletes cron job.


*******************************************************************
v-delete-cron-reports
*******************************************************************

**delete cron reports**

**Label**:  

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-cron-reports admin
   

The script for disabling reports on cron tasks and administrative notifications.


*******************************************************************
v-delete-cron-restart-job
*******************************************************************

**delete restart job**

**Label**:  

**Options**: – 


The script for disabling restart cron tasks


*******************************************************************
v-delete-database
*******************************************************************

**delete database**

**Label**:  

**Options**: `USER` `DATABASE` 

**Examples**:

.. code-block:: bash
   
  v-delete-database admin wp_db
   

The function for deleting the database. If database user have access to another database, he will not be deleted.


*******************************************************************
v-delete-database-host
*******************************************************************

**delete database server**

**Label**:  

**Options**: `TYPE` `HOST` 

**Examples**:

.. code-block:: bash
   
  v-delete-database-host pgsql localhost
   

The function for deleting the database host from hestia configuration. It will be deleted if there are no databases created on it only.


*******************************************************************
v-delete-database-temp-user
*******************************************************************

**deletes temp database user**

**Label**:   `database`  `hestia` 

**Options**: `USER` `DBUSER` `[TYPE]` `[HOST]` 

**Examples**:

.. code-block:: bash
   
  v-add-database-temp-user wordress hestia_sso_user mysql
   

Revokes "temp user" access to a database and removes the user To be used in combination with v-add-database-temp-user


*******************************************************************
v-delete-databases
*******************************************************************

**delete user databases**

**Label**:  

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-databases admin
   

The function deletes all user databases.


*******************************************************************
v-delete-dns-domain
*******************************************************************

**delete dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-dns-domain alice acme.com
   

The function for deleting DNS domain. By deleting it all records will also be deleted.


*******************************************************************
v-delete-dns-domains
*******************************************************************

**delete dns domains**

**Label**:   `dns` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-dns-domains bob
   

The function for deleting all users DNS domains.


*******************************************************************
v-delete-dns-domains-src
*******************************************************************

**delete dns domains based on SRC field**

**Label**:   `dns` 

**Options**: `USER` `SRC` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-dns-domains-src admin '' yes
   

The function for deleting DNS domains related to a certain host.


*******************************************************************
v-delete-dns-on-web-alias
*******************************************************************

**delete dns domain or dns record based on web domain alias**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ALIAS` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-dns-on-web-alias admin example.com www.example.com
   

The function deletes dns domain or dns record based on web domain alias.


*******************************************************************
v-delete-dns-record
*******************************************************************

**delete dns record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-dns-record bob acme.com 42 yes
   

The function for deleting a certain record of DNS zone.


*******************************************************************
v-delete-domain
*******************************************************************

**delete web/dns/mail domain**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-domain admin domain.tld
   

The function deletes web/dns/mail domain.


*******************************************************************
v-delete-fastcgi-cache
*******************************************************************

**Disable FastCGI cache for nginx**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-fastcgi-cache user domain.tld
   

The function disables FastCGI cache for nginx


*******************************************************************
v-delete-firewall-ban
*******************************************************************

**delete firewall blocking rule**

**Label**:   `panel` 

**Options**: `IP` `CHAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-firewall-ban 198.11.130.250 MAIL
   

The function deletes blocking rule from system firewall


*******************************************************************
v-delete-firewall-chain
*******************************************************************

**delete firewall chain**

**Label**:   `panel` 

**Options**: `CHAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-firewall-chain WEB
   

The function adds new rule to system firewall


*******************************************************************
v-delete-firewall-ipset
*******************************************************************

**delete firewall ipset**

**Label**:   `hestia` 

**Options**: `NAME` 

**Examples**:

.. code-block:: bash
   
  v-delete-firewall-ipset country-nl
   

The function removes ipset from system and from hestia


*******************************************************************
v-delete-firewall-rule
*******************************************************************

**delete firewall rule**

**Label**:   `panel` 

**Options**: `RULE` 

**Examples**:

.. code-block:: bash
   
  v-delete-firewall-rule SSH_BLOCK
   

The function deletes firewall rule.


*******************************************************************
v-delete-fs-directory
*******************************************************************

**delete directory**

**Label**:  

**Options**: `USER` `DIRECTORY` 

**Examples**:

.. code-block:: bash
   
  v-delete-fs-directory admin report1
   

The function deletes directory on the file system


*******************************************************************
v-delete-fs-file
*******************************************************************

**delete file**

**Label**:  

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-delete-fs-file admin readme.txt
   

The function deletes file on the file system


*******************************************************************
v-delete-letsencrypt-domain
*******************************************************************

**deleting letsencrypt ssl cetificate for domain**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` `[RESTART]` `[MAIL]` 

**Examples**:

.. code-block:: bash
   
  v-delete-letsencrypt-domain admin acme.com yes
   

The function turns off letsencrypt SSL support for a domain.


*******************************************************************
v-delete-mail-account
*******************************************************************

**delete mail account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-account admin acme.com alice
   

The function deletes email account.


*******************************************************************
v-delete-mail-account-alias
*******************************************************************

**delete mail account alias aka nickname**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-account-alias admin example.com alice alicia
   

The function deletes email account alias.


*******************************************************************
v-delete-mail-account-autoreply
*******************************************************************

**delete mail account autoreply message**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `ALIAS` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-account-autoreply admin mydomain.tld bob
   

The function delete email account autoreply.


*******************************************************************
v-delete-mail-account-forward
*******************************************************************

**delete mail account forward**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `EMAIL` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-account-forward admin acme.com tony bob@acme.com
   

The function add delete email account forward address.


*******************************************************************
v-delete-mail-account-fwd-only
*******************************************************************

**delete mail account forward-only flag**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-account-fwd-only admin example.com jack
   

The function deletes fwd-only flag


*******************************************************************
v-delete-mail-domain
*******************************************************************

**delete mail domain**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain admin mydomain.tld
   

The function for deleting MAIL domain. By deleting it all accounts will also be deleted.


*******************************************************************
v-delete-mail-domain-antispam
*******************************************************************

**delete mail domain antispam support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-antispam admin mydomain.tld
   

The function disable spamassasin for incoming emails.


*******************************************************************
v-delete-mail-domain-antivirus
*******************************************************************

**delete mail domain antivirus support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-antivirus admin mydomain.tld
   

The function disables clamav scan for incoming emails.


*******************************************************************
v-delete-mail-domain-catchall
*******************************************************************

**delete mail domain catchall email**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-catchall admin mydomain.tld
   

The function disables mail domain cathcall.


*******************************************************************
v-delete-mail-domain-dkim
*******************************************************************

**delete mail domain dkim support**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-dkim admin mydomain.tld
   

The function delete DKIM domain pem.


*******************************************************************
v-delete-mail-domain-smtp-relay
*******************************************************************

**Remove mail domain smtp relay support**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-smtp-relay user domain.tld
   

This function removes mail domain smtp relay support.


*******************************************************************
v-delete-mail-domain-ssl
*******************************************************************

**delete mail domain ssl support**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-ssl user demo.com
   

The function delete ssl certificates.


*******************************************************************
v-delete-mail-domain-webmail
*******************************************************************

**delete webmail support for a domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `[RESTART]` `[QUIET]` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domain-webmail user demo.com
   

this function removes support for webmail from a specified mail domain.


*******************************************************************
v-delete-mail-domains
*******************************************************************

**delete mail domains**

**Label**:   `mail` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-mail-domains admin
   

The function for deleting all users mail domains.


*******************************************************************
v-delete-remote-dns-domain
*******************************************************************

**delete remote dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-remote-dns-domain admin example.tld
   

The function synchronize dns with the remote server.


*******************************************************************
v-delete-remote-dns-domains
*******************************************************************

**delete remote dns domains**

**Label**:   `dns` 

**Options**: `[HOST]` 


The function deletes remote dns domains.


*******************************************************************
v-delete-remote-dns-host
*******************************************************************

**delete remote dns host**

**Label**:   `dns` 

**Options**: `HOST` 

**Examples**:

.. code-block:: bash
   
  v-delete-remote-dns-host example.org
   

The function for deleting the remote dns host from hestia configuration.


*******************************************************************
v-delete-remote-dns-record
*******************************************************************

**delete remote dns domain record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` 

**Examples**:

.. code-block:: bash
   
  v-delete-remote-dns-record user07 acme.com 44
   

The function synchronize dns with the remote server.


*******************************************************************
v-delete-sys-api-ip
*******************************************************************

**delete ip adresss from allowed ip list api**

**Label**:   `hestia` 

**Options**: `IP` 

**Examples**:

.. code-block:: bash
   
  v-delete-sys-api-ip 1.1.1.1
   




*******************************************************************
v-delete-sys-filemanager
*******************************************************************

**remove file manager functionality from Hestia Control Panel**

**Label**:   `hestia` 

**Options**: `[FULL]` 


The function removes the File Manager and its entry points


*******************************************************************
v-delete-sys-firewall
*******************************************************************

**delete system firewall**

**Label**:   `panel` 

**Options**: – 


The script disables firewall support


*******************************************************************
v-delete-sys-ip
*******************************************************************

**delete system ip**

**Label**:   `panel` 

**Options**: `IP` 

**Examples**:

.. code-block:: bash
   
  v-delete-sys-ip 212.42.76.210
   

The function for deleting a system ip. It does not allow to delete first ip on interface and do not allow to delete ip which is used by a web domain.


*******************************************************************
v-delete-sys-mail-queue
*******************************************************************

**delete exim mail queue**

**Label**:   `hestia` 

**Options**: – 


This function checks for messages stuck in the exim mail queue and prompts the user to clear the queue if desired.


*******************************************************************
v-delete-sys-pma-sso
*******************************************************************

**disables support for single sign on PHPMYADMIN**

**Label**:   `hestia` 

**Options**: `[MODE]` 


Disables support for SSO to PHPmyAdmin


*******************************************************************
v-delete-sys-quota
*******************************************************************

**delete system quota**

**Label**:   `panel` 

**Options**: – 


The script disables filesystem quota on /home partition


*******************************************************************
v-delete-sys-sftp-jail
*******************************************************************

**delete system sftp jail**

**Label**:   `panel` 

**Options**: – 


The script disables sftp jailed environment


*******************************************************************
v-delete-sys-smtp-relay
*******************************************************************

**disable system wide smtp relay support**

**Label**:   `hestia` 

**Options**: `` 


this function disables system wide smtp relay support.


*******************************************************************
v-delete-user
*******************************************************************

**delete user**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-user whistler
   

This function deletes a certain user and all his resources such as domains, databases, cron jobs, etc.


*******************************************************************
v-delete-user-2fa
*******************************************************************

**delete 2fa of existing user**

**Label**:   `hestia`  `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-2fa admin
   

The function deletes 2fa token of a user.


*******************************************************************
v-delete-user-auth-log
*******************************************************************

**Delete auth log file for user**

**Label**:  

**Options**: 


The function for deleting a users auth log file


*******************************************************************
v-delete-user-backup
*******************************************************************

**delete user backup**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-backup admin admin.2012-12-21_00-10-00.tar
   

The function deletes user backup.


*******************************************************************
v-delete-user-backup-exclusions
*******************************************************************

**delete backup exclusion**

**Label**:   `panel` 

**Options**: `USER` `[SYSTEM]` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-backup-exclusions admin
   

The function for deleting backup exclusion


*******************************************************************
v-delete-user-ips
*******************************************************************

**delete user ips**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-ips admin
   

The function deletes all user's ip addresses.


*******************************************************************
v-delete-user-log
*******************************************************************

**Delete log file for user**

**Label**:   `hestia` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-log user
   

The function for deleting a users log file


*******************************************************************
v-delete-user-notification
*******************************************************************

**delete user notification**

**Label**:   `panel` 

**Options**: `USER` `NOTIFICATION` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-notification admin 1
   

The function deletes user notification.


*******************************************************************
v-delete-user-package
*******************************************************************

**delete user package**

**Label**:   `panel` 

**Options**: `PACKAGE` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-package admin palegreen
   

The function for deleting user package.


*******************************************************************
v-delete-user-sftp-jail
*******************************************************************

**delete user sftp jail**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-sftp-jail whistler
   

The script disables sftp jailed environment for USER


*******************************************************************
v-delete-user-ssh-key
*******************************************************************

**add ssh key**

**Label**:   `hestia` 

**Options**: `USER` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-ssh-key user unique_id
   

Delete user ssh key from authorized_keys


*******************************************************************
v-delete-user-stats
*******************************************************************

**delete user usage statistics**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-user-stats user
 example: v-delete-user-stats admin overall
   

The function deletes user statistics data.


*******************************************************************
v-delete-web-domain
*******************************************************************

**delete web domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain admin wonderland.com
   

The call of function leads to the removal of domain and all its components (statistics, folders contents, ssl certificates, etc.). This operation is not fully supported by "undo" function, so the data recovery is possible only with a help of reserve copy.


*******************************************************************
v-delete-web-domain-alias
*******************************************************************

**delete web domain alias**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `ALIAS` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-alias admin example.com www.example.com
   

The function of deleting the alias domain (parked domain). By this call default www aliase can be removed as well.


*******************************************************************
v-delete-web-domain-allow-users
*******************************************************************

**disables other users create subdomains**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-allow-users admin admin.com
   

Enable the rule check for Enforce subdomain ownership for a specific domain. Enforce subdomain ownership setting in /edit/server/ set to no will always overwrite this behaviour eg: admin adds admin.com user can create user.admin.com


*******************************************************************
v-delete-web-domain-backend
*******************************************************************

**deleting web domain backend configuration**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-backend admin acme.com
   

The function of deleting the virtualhost backend configuration.


*******************************************************************
v-delete-web-domain-ftp
*******************************************************************

**delete webdomain ftp account**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `FTP_USER` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-ftp admin wonderland.com bob_ftp
   

The function deletes additional ftp account.


*******************************************************************
v-delete-web-domain-httpauth
*******************************************************************

**delete http auth user**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `AUTH_USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-httpauth admin example.com alice
   

The call is used for deleting http auth user


*******************************************************************
v-delete-web-domain-proxy
*******************************************************************

**deleting web domain proxy configuration**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-proxy alice lookinglass.com
   

The function of deleting the virtualhost proxy configuration.


*******************************************************************
v-delete-web-domain-redirect
*******************************************************************

**Delete force redirect to domain**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-add-web-domain-redirect user domain.tld
   

Function delete a forced redirect to a domain


*******************************************************************
v-delete-web-domain-ssl
*******************************************************************

**delete web domain SSL support**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-ssl admin acme.com
   

The function disable https support and deletes SSL certificates.


*******************************************************************
v-delete-web-domain-ssl-force
*******************************************************************

**remove ssl force from domain**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-ssl-force admin domain.tld
   

The function removes force SSL configurations.


*******************************************************************
v-delete-web-domain-ssl-hsts
*******************************************************************

**remove ssl force from domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-ssl-hsts user domain.tld
   

The function removes force SSL configurations.


*******************************************************************
v-delete-web-domain-stats
*******************************************************************

**delete web domain statistics**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-stats user02 h1.example.com
   

The function of deleting site's system of statistics. Its type is automatically chooses from client's configuration file.


*******************************************************************
v-delete-web-domain-stats-user
*******************************************************************

**disable web domain stats authentication support**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domain-stats-user admin acme.com
   

The function removes authentication of statistics system. If the script is called without naming a certain user, all users will be removed. After deleting all of them statistics will be accessible for view without an authentication.


*******************************************************************
v-delete-web-domains
*******************************************************************

**delete web domains**

**Label**:   `web` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-domains admin
   

The function deletes all user's webdomains.


*******************************************************************
v-delete-web-php
*******************************************************************

**delete php fpm version**

**Label**:   `hestia` 

**Options**: `VERSION` 

**Examples**:

.. code-block:: bash
   
  v-delete-web-php 7.3
   

The function checks and delete a fpm php version if not used by any domain.


*******************************************************************
v-download-backup
*******************************************************************

**Download backup**

**Label**:   `hestia` 

**Options**: `USER` `BACKUP` 

**Examples**:

.. code-block:: bash
   
  v-download-backup admin admin.2020-11-05_05-10-21.tar
   

The function download back-up from remote server


*******************************************************************
v-extract-fs-archive
*******************************************************************

**archive to directory**

**Label**:  

**Options**: `USER` `ARCHIVE` `DIRECTORY` `[SELECTED_DIR]` `[STRIP]` `[TEST]` 

**Examples**:

.. code-block:: bash
   
  v-extract-fs-archive admin latest.tar.gz /home/admin
   

The function extracts archive into directory on the file system


*******************************************************************
v-generate-api-key
*******************************************************************

**generate api key**

**Label**:   `panel` 

**Options**: – 


The function creates a key file in $HESTIA/data/keys/


*******************************************************************
v-generate-debug-report
*******************************************************************


**Label**:  

**Options**: 


Includes shellcheck source=/usr/local/hestia/conf/hestia.conf


*******************************************************************
v-generate-password-hash
*******************************************************************

**generate password hash**

**Label**:   `panel` 

**Options**: `HASH_METHOD` `SALT` `PASSWORD` 

**Examples**:

.. code-block:: php
   
  v-generate-password-hash sha-512 rAnDom_string yourPassWord
   

The function generates password hash


*******************************************************************
v-generate-ssl-cert
*******************************************************************

**generate self signed certificate and CSR request**

**Label**:   `panel` 

**Options**: `DOMAIN` `EMAIL` `COUNTRY` `STATE` `CITY` `ORG` `UNIT` `[ALIASES]` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-generate-ssl-cert example.com mail@yahoo.com USA California Monterey ACME.COM IT
   

The function generates self signed SSL certificate and CSR request


*******************************************************************
v-get-dns-domain-value
*******************************************************************

**get dns domain value**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-get-dns-domain-value admin example.com SOA
   

The function for getting a certain DNS domain parameter.


*******************************************************************
v-get-fs-file-type
*******************************************************************

**get file type**

**Label**:  

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-get-fs-file-type admin index.html
   

The function shows file type


*******************************************************************
v-get-mail-account-value
*******************************************************************

**get mail account value**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-get-mail-account-value admin example.tld tester QUOTA
   

The function for getting a certain mail account parameter.


*******************************************************************
v-get-mail-domain-value
*******************************************************************

**get mail domain value**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-get-mail-domain-value admin example.com DKIM
   

The function for getting a certain mail domain parameter.


*******************************************************************
v-get-sys-timezone
*******************************************************************

**get system timezone**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function to get system timezone


*******************************************************************
v-get-sys-timezones
*******************************************************************

**list system timezone**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-get-sys-timezones json
   

The function checks system timezone settings


*******************************************************************
v-get-user-salt
*******************************************************************

**get user salt**

**Label**:   `panel` 

**Options**: `USER` `[IP]` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-get-user-salt admin
   

The function provides users salt


*******************************************************************
v-get-user-value
*******************************************************************

**get user value**

**Label**:   `panel` 

**Options**: `USER` `KEY` 

**Examples**:

.. code-block:: bash
   
  v-get-user-value admin FNAME
   

The function for obtaining certain user's parameters.


*******************************************************************
v-insert-dns-domain
*******************************************************************

**insert dns domain**

**Label**:  

**Options**: `USER` `DATA` `[SRC]` `[FLUSH]` `[RESTART]` 


The function inserts raw record to the dns.conf


*******************************************************************
v-insert-dns-record
*******************************************************************

**insert dns record**

**Label**:  

**Options**: `USER` `DOMAIN` `DATA` `[RESTART]` 


The function inserts raw dns record to the domain conf


*******************************************************************
v-insert-dns-records
*******************************************************************

**inserts dns records**

**Label**:  

**Options**: `USER` `DOMAIN` `DATA_FILE` `[RESTART]` 


The function copy dns record to the domain conf


*******************************************************************
v-list-backup-host
*******************************************************************

**list backup host**

**Label**:   `panel` 

**Options**: `TYPE` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-backup-host local
   

The function for obtaining the list of backup host parameters.


*******************************************************************
v-list-cron-job
*******************************************************************

**list cron job**

**Label**:   `panel` 

**Options**: `USER` `JOB` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-cron-job admin 7
   

The function of obtaining cron job parameters.


*******************************************************************
v-list-cron-jobs
*******************************************************************

**list user cron jobs**

**Label**:   `panel` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-cron-jobs admin
   

The function for obtaining the list of all users cron jobs.


*******************************************************************
v-list-database
*******************************************************************

**list database**

**Label**:   `panel` 

**Options**: `USER` `DATABASE` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-database wp_db
   

The function for obtaining of all database's parameters.


*******************************************************************
v-list-database-host
*******************************************************************

**list database host**

**Label**:   `panel` 

**Options**: `TYPE` `HOST` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-database-host mysql localhost
   

The function for obtaining database host parameters.


*******************************************************************
v-list-database-hosts
*******************************************************************

**list database hosts**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-database-hosts json
   

The function for obtaining the list of all configured database hosts.


*******************************************************************
v-list-database-types
*******************************************************************

**list supported database types**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-database-types json
   

The function for obtaining the list of database types.


*******************************************************************
v-list-databases
*******************************************************************

**listing databases**

**Label**:   `panel` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-databases user json
   

The function for obtaining the list of all user's databases.


*******************************************************************
v-list-dns-domain
*******************************************************************

**list dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-dns-domain alice wonderland.com
   

The function of obtaining the list of dns domain parameters.


*******************************************************************
v-list-dns-domains
*******************************************************************

**list dns domains**

**Label**:   `dns` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-dns-domains admin
   

The function for obtaining all DNS domains of a user.


*******************************************************************
v-list-dns-records
*******************************************************************

**list dns domain records**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-dns-records admin example.com
   

The function for getting all DNS domain records.


*******************************************************************
v-list-dns-template
*******************************************************************

**list dns template**

**Label**:   `dns` 

**Options**: `TEMPLATE` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-dns-template zoho
   

The function for obtaining the DNS template parameters.


*******************************************************************
v-list-dns-templates
*******************************************************************

**list dns templates**

**Label**:   `dns` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-dns-templates json
   

The function for obtaining the list of all DNS templates available.


*******************************************************************
v-list-firewall
*******************************************************************

**list iptables rules**

**Label**:  

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-firewall json
   

The function of obtaining the list of all iptables rules.


*******************************************************************
v-list-firewall-ban
*******************************************************************

**list firewall block list**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-firewall-ban json
   

The function of obtaining the list of currently blocked ips.


*******************************************************************
v-list-firewall-ipset
*******************************************************************

**List firewall ipset**

**Label**:   `hestia` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-firewall-ipset json
   

The function prints defined ipset lists


*******************************************************************
v-list-firewall-rule
*******************************************************************

**list firewall rule**

**Label**:   `panel` 

**Options**: `RULE` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-firewall-rule 2
   

The function of obtaining firewall rule parameters.


*******************************************************************
v-list-fs-directory
*******************************************************************

**list directory**

**Label**:  

**Options**: `USER` `DIRECTORY` 

**Examples**:

.. code-block:: bash
   
  v-list-fs-directory /home/admin/web
   

The function lists directory on the file system


*******************************************************************
v-list-letsencrypt-user
*******************************************************************

**list letsencrypt key**

**Label**:   `panel` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-letsencrypt-user admin
   

The function for obtaining the letsencrypt key thumbprint


*******************************************************************
v-list-mail-account
*******************************************************************

**list mail domain account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-account admin domain.tld tester
   

The function of obtaining the list of account parameters.


*******************************************************************
v-list-mail-account-autoreply
*******************************************************************

**list mail account autoreply**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-account-autoreply admin example.com testing
   

The function of obtaining mail account autoreply message.


*******************************************************************
v-list-mail-accounts
*******************************************************************

**list mail domain accounts**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-accounts admin acme.com
   

The function of obtaining the list of all user domains.


*******************************************************************
v-list-mail-domain
*******************************************************************

**list mail domain**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-domain user01 mydomain.com
   

The function of obtaining the list of domain parameters.


*******************************************************************
v-list-mail-domain-dkim
*******************************************************************

**list mail domain dkim**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-domain-dkim admin maildomain.tld
   

The function of obtaining domain dkim files.


*******************************************************************
v-list-mail-domain-dkim-dns
*******************************************************************

**list mail domain dkim dns records**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-domain-dkim-dns admin example.com
   

The function of obtaining domain dkim dns records for proper setup.


*******************************************************************
v-list-mail-domain-ssl
*******************************************************************

**list mail domain ssl certificate**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-domain-ssl user acme.com json
   

The function of obtaining domain ssl files.


*******************************************************************
v-list-mail-domains
*******************************************************************

**list mail domains**

**Label**:   `mail` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-mail-domains admin
   

The function of obtaining the list of all user domains.


*******************************************************************
v-list-remote-dns-hosts
*******************************************************************

**list remote dns host**

**Label**:  

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-remote-dns-hosts json
   

The function for obtaining the list of remote dns host.


*******************************************************************
v-list-sys-clamd-config
*******************************************************************

**list clamd config parameters**

**Label**:  

**Options**: `[FORMAT]` 


The function for obtaining the list of clamd config parameters.


*******************************************************************
v-list-sys-config
*******************************************************************

**list system configuration**

**Label**:  

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-config json
   

The function for obtaining the list of system parameters.


*******************************************************************
v-list-sys-cpu-status
*******************************************************************

**list system cpu info**

**Label**:  

**Options**: `[FORMAT]` 


The function lists cpu information


*******************************************************************
v-list-sys-db-status
*******************************************************************

**list db status**

**Label**:  

**Options**: `[FORMAT]` 


v-list-sys-db-status


*******************************************************************
v-list-sys-disk-status
*******************************************************************

**list disk information**

**Label**:  

**Options**: `[FORMAT]` 


The function lists disk information


*******************************************************************
v-list-sys-dns-status
*******************************************************************

**list dns status**

**Label**:  

**Options**: `[FORMAT]` 


The function lists dns server status


*******************************************************************
v-list-sys-dovecot-config
*******************************************************************

**list dovecot config parameters**

**Label**:  

**Options**: `[FORMAT]` 


The function for obtaining the list of dovecot config parameters.


*******************************************************************
v-list-sys-hestia-autoupdate
*******************************************************************

**list hestia autoupdate settings**

**Label**:  

**Options**: `[FORMAT]` 


The function for obtaining autoupdate settings.


*******************************************************************
v-list-sys-hestia-ssl
*******************************************************************

**list hestia ssl certificate**

**Label**:  

**Options**: `[FORMAT]` 


The function of obtaining hestia ssl files.


*******************************************************************
v-list-sys-hestia-updates
*******************************************************************

**list system updates**

**Label**:  

**Options**: `[FORMAT]` 


The function checks available updates for hestia packages.


*******************************************************************
v-list-sys-info
*******************************************************************

**list system os**

**Label**:  

**Options**: `[FORMAT]` 


The function checks available updates for hestia packages.


*******************************************************************
v-list-sys-interfaces
*******************************************************************

**list system interfaces**

**Label**:  

**Options**: `[FORMAT]` 


The function for obtaining the list of network interfaces.


*******************************************************************
v-list-sys-ip
*******************************************************************

**list system ip**

**Label**:   `panel` 

**Options**: `IP` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-ip 116.203.78.202
   

The function for getting the list of system ip parameters.


*******************************************************************
v-list-sys-ips
*******************************************************************

**list system ips**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of system ip adresses.


*******************************************************************
v-list-sys-languages
*******************************************************************

**list system languages**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-languages json
   

The function for obtaining the available languages for HestiaCP Output is always in the ISO language code


*******************************************************************
v-list-sys-mail-status
*******************************************************************

**list mail status**

**Label**:   `mail` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-mail-status json
   

The function lists mail server status


*******************************************************************
v-list-sys-memory-status
*******************************************************************

**list virtual memory info**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-memory-status json
   

The function lists virtual memory information


*******************************************************************
v-list-sys-mysql-config
*******************************************************************

**list mysql config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of mysql config parameters.


*******************************************************************
v-list-sys-network-status
*******************************************************************

**list system network status**

**Label**:  

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-network-status json
   

The function lists network status


*******************************************************************
v-list-sys-nginx-config
*******************************************************************

**list nginx config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of nginx config parameters.


*******************************************************************
v-list-sys-pgsql-config
*******************************************************************

**list postgresql config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of postgresql config parameters.


*******************************************************************
v-list-sys-php
*******************************************************************

**listing availble PHP versions installed**

**Label**:   `hestia`  `panel` 

**Options**: `[FORMAT]` 


List /etc/php/`*` version check if folder fpm is available


*******************************************************************
v-list-sys-php-config
*******************************************************************

**list php config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of php config parameters.


*******************************************************************
v-list-sys-proftpd-config
*******************************************************************

**list proftpd config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of proftpd config parameters.


*******************************************************************
v-list-sys-rrd
*******************************************************************

**list system rrd charts**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


List available rrd graphics, its titles and paths.


*******************************************************************
v-list-sys-services
*******************************************************************

**list system services**

**Label**:   `panel` 

**Options**: `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-sys-services json
   

The function for obtaining the list of configured system services.


*******************************************************************
v-list-sys-shells
*******************************************************************

**list system shells**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of system shells.


*******************************************************************
v-list-sys-spamd-config
*******************************************************************

**list spamassassin config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of spamassassin config parameters.


*******************************************************************
v-list-sys-themes
*******************************************************************

**list system themes**

**Label**:   `hestia` 

**Options**: `[FORMAT]` 


The function for obtaining the list of themes in the theme library and displaying them in the backend or user interface.


*******************************************************************
v-list-sys-users
*******************************************************************

**list system users**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of system users without detailed information.


*******************************************************************
v-list-sys-vsftpd-config
*******************************************************************

**list vsftpd config parameters**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function for obtaining the list of vsftpd config parameters.


*******************************************************************
v-list-sys-web-status
*******************************************************************

**list web status**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function lists web server status


*******************************************************************
v-list-sys-webmail
*******************************************************************

**listing available webmail clients**

**Label**:   `hestia`  `mail` 

**Options**: `[FORMAT]` 


List available webmail clients


*******************************************************************
v-list-user
*******************************************************************

**list user parameters**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user admin
   

The function to obtain user parameters.


*******************************************************************
v-list-user-auth-log
*******************************************************************

**list user log**

**Label**:  

**Options**: `USER` `[FORMAT]` 


The function of obtaining the list of 10 last users commands.


*******************************************************************
v-list-user-backup
*******************************************************************

**list user backup**

**Label**:  

**Options**: `USER` `BACKUP` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-backups admin admin.2019-05-19_03-31-30.tar
   

The function of obtaining the list of backup parameters. This call, just as all v_list_`*` calls, supports 3 formats - json, shell and plain.


*******************************************************************
v-list-user-backup-exclusions
*******************************************************************

**list backup exclusions**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-backup-exclusions admin
   

The function for obtaining the backup exclusion list


*******************************************************************
v-list-user-backups
*******************************************************************

**list user backups**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-backups admin
   

The function for obtaining the list of available user backups.


*******************************************************************
v-list-user-ips
*******************************************************************

**list user ips**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-ips admin
   

The function for obtaining the list of available ip addresses.


*******************************************************************
v-list-user-log
*******************************************************************

**list user log**

**Label**:  

**Options**: `USER` `[FORMAT]` 


The function of obtaining the list of 100 last users commands.


*******************************************************************
v-list-user-notifications
*******************************************************************

**list user notifications**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-notifications admin
   

The function for getting the list notifications


*******************************************************************
v-list-user-ns
*******************************************************************

**list user nameservers**

**Label**:  

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-ns admin
   

Function for obtaining the list of user's DNS servers.


*******************************************************************
v-list-user-package
*******************************************************************

**list user package**

**Label**:  

**Options**: `PACKAGE` `[FORMAT]` 


The function for getting the list of system ip parameters.


*******************************************************************
v-list-user-packages
*******************************************************************

**list user packages**

**Label**:  

**Options**: `[FORMAT]` 


The function for obtaining the list of available hosting packages.


*******************************************************************
v-list-user-ssh-key
*******************************************************************

**add ssh key**

**Label**:   `hestia` 

**Options**: `USER` `[FORMAT]` 


Lists $user/.ssh/authorized_keys


*******************************************************************
v-list-user-stats
*******************************************************************

**list user stats**

**Label**:   `panel` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-user-stats admin
   

The function for listing user statistics


*******************************************************************
v-list-users
*******************************************************************

**list users**

**Label**:   `panel` 

**Options**: `[FORMAT]` 


The function to obtain the list of all system users.


*******************************************************************
v-list-users-stats
*******************************************************************

**list overall user stats**

**Label**:  

**Options**: `[FORMAT]` 


The function for listing overall user statistics


*******************************************************************
v-list-web-domain
*******************************************************************

**list web domain parameters**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-web-domain admin example.com
   

The function to obtain web domain parameters.


*******************************************************************
v-list-web-domain-accesslog
*******************************************************************

**list web domain access log**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[LINES]` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-web-domain-accesslog admin example.com
   

The function of obtaining raw access web domain logs.


*******************************************************************
v-list-web-domain-errorlog
*******************************************************************

**list web domain error log**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[LINES]` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-web-domain-errorlog admin acme.com
   

The function of obtaining raw error web domain logs.


*******************************************************************
v-list-web-domain-ssl
*******************************************************************

**list web domain ssl certificate**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-web-domain-ssl admin wonderland.com
   

The function of obtaining domain ssl files.


*******************************************************************
v-list-web-domains
*******************************************************************

**list web domains**

**Label**:   `web` 

**Options**: `USER` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-list-web-domains alice
   

The function to obtain the list of all user web domains.


*******************************************************************
v-list-web-stats
*******************************************************************

**list web statistics**

**Label**:   `panel`  `web` 

**Options**: `[FORMAT]` 


The function for obtaining the list of web statistics analyzer.


*******************************************************************
v-list-web-templates
*******************************************************************

**list web templates**

**Label**:   `web` 

**Options**: `[FORMAT]` 


The function for obtaining the list of web templates available to a user.


*******************************************************************
v-list-web-templates-backend
*******************************************************************

**listing backend templates**

**Label**:   `web` 

**Options**: `[FORMAT]` 


The function for obtaining the list of available backend templates.


*******************************************************************
v-list-web-templates-proxy
*******************************************************************

**listing proxy templates**

**Label**:   `web` 

**Options**: `[FORMAT]` 


The function for obtaining the list of proxy templates available to a user.


*******************************************************************
v-log-action
*******************************************************************

**adds action event to user or system log**

**Label**:  

**Options**: `LOG_TYPE` `USER` 


Event Levels: info, warning, error


*******************************************************************
v-log-user-login
*******************************************************************

**add user login**

**Label**:  

**Options**: `USER` `IP` `STATUS` `[FINGERPRINT]` 


Argument definition


*******************************************************************
v-log-user-logout
*******************************************************************

**Log User logout event**

**Label**:  

**Options**: `USER` `FINGERPRINT` 


Argument definition


*******************************************************************
v-move-fs-directory
*******************************************************************

**move file**

**Label**:  

**Options**: `USER` `SRC_DIRECTORY` `DST_DIRECTORY` 

**Examples**:

.. code-block:: bash
   
  v-move-fs-directory admin /home/admin/web /home/user02/
   

The function moved file or directory on the file system. This function can also be used to rename files just like normal mv command.


*******************************************************************
v-move-fs-file
*******************************************************************

**move file**

**Label**:  

**Options**: `USER` `SRC_FILE` `DST_FILE` 

**Examples**:

.. code-block:: bash
   
  v-move-fs-file admin readme.txt new_readme.txt
   

The function moved file or directory on the file system. This function can also be used to rename files just like normal mv command.


*******************************************************************
v-open-fs-config
*******************************************************************

**open config**

**Label**:  

**Options**: `CONFIG` 

**Examples**:

.. code-block:: bash
   
  v-open-fs-config /etc/mysql/my.cnf
   

The function opens/reads config files on the file system


*******************************************************************
v-open-fs-file
*******************************************************************

**open file**

**Label**:  

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-open-fs-file admin README.md
   

The function opens/reads files on the file system


*******************************************************************
v-purge-nginx-cache
*******************************************************************

**Purge nginx cache**

**Label**:   `hestia`  `web` 

**Options**: `USER` `DOMAINÅ` 

**Examples**:

.. code-block:: bash
   
  v-purge-nginx-cache user domain.tld
   

The function purges nginx cache.


*******************************************************************
v-rebuild-all
*******************************************************************

**rebuild all assets for a specified user**

**Label**:   `hestia` 

**Options**: `USER` `[RESTART]` 


The function rebuilds all assets for a user account: - Web domains - DNS zones - Mail domains - Databases - Cron Jobs - User account configuration


*******************************************************************
v-rebuild-cron-jobs
*******************************************************************

**rebuild cron jobs**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-cron-jobs admin yes
   

The function rebuilds system cron config file for specified user.


*******************************************************************
v-rebuild-database
*******************************************************************

**rebuild databases**

**Label**:   `hestia` 

**Options**: `USER` `DATABASE` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-database user user_wordpress
   

The function for rebuilding a single database for a user


*******************************************************************
v-rebuild-databases
*******************************************************************

**rebuild databases**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-databases admin
   

The function for rebuilding of all databases of a single user.


*******************************************************************
v-rebuild-dns-domain
*******************************************************************

**rebuild dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `[RESTART]` `[UPDATE_SERIAL]` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-dns-domain alice wonderland.com
   

The function rebuilds DNS configuration files.


*******************************************************************
v-rebuild-dns-domains
*******************************************************************

**rebuild dns domains**

**Label**:   `dns` 

**Options**: `USER` `[RESTART]` `[UPDATE_SERIAL]` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-dns-domains alice
   

The function rebuilds DNS configuration files.


*******************************************************************
v-rebuild-mail-domain
*******************************************************************

**rebuild mail domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-mail-domain user domain.tld
   

The function rebuilds configuration files for a single domain.


*******************************************************************
v-rebuild-mail-domains
*******************************************************************

**rebuild mail domains**

**Label**:   `mail` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-mail-domains admin
   

The function rebuilds EXIM configuration files for all mail domains.


*******************************************************************
v-rebuild-user
*******************************************************************

**rebuild system user**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-user admin yes
   

The function rebuilds system user account.


*******************************************************************
v-rebuild-users
*******************************************************************

**rebuild system users**

**Label**:   `hestia` 

**Options**: `[RESTART]` 


The function rebuilds user configuration for all users.


*******************************************************************
v-rebuild-web-domain
*******************************************************************

**rebuild web domain**

**Label**:   `hestia` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-rebuild-web-domain user domain.tld
   

The function rebuilds web configuration files.


*******************************************************************
v-rebuild-web-domains
*******************************************************************

**rebuild web domains**

**Label**:  

**Options**: `USER` `[RESTART]` 


The function rebuilds web configuration files.


*******************************************************************
v-refresh-sys-theme
*******************************************************************

**change active system theme**

**Label**:   `hestia` 

**Options**: – 


The function for changing the currently active system theme.


*******************************************************************
v-rename-user-package
*******************************************************************

**change package name**

**Label**:   `hestia` 

**Options**: `OLD_NAME` `NEW_NAME` `[MODE]` 

**Examples**:

.. code-block:: bash
   
  v-rename-package package package2
   

The function changes the name of an existing package.


*******************************************************************
v-repair-sys-config
*******************************************************************

**Restore system configuration**

**Label**:  

**Options**: `[SYSTEM]` 


The function repairs or restores the system configuration file.


*******************************************************************
v-restart-cron
*******************************************************************

**restart cron service**

**Label**:   `panel` 

**Options**: – 


The function tells crond service to reread its configuration files.


*******************************************************************
v-restart-dns
*******************************************************************

**restart dns service**

**Label**:   `dns` 

**Options**: – 


The function tells BIND service to reload dns zone files.


*******************************************************************
v-restart-ftp
*******************************************************************

**restart ftp service**

**Label**:   `panel` 

**Options**: – 


The function tells ftp server to reread its configuration.


*******************************************************************
v-restart-mail
*******************************************************************

**restart mail service**

**Label**:   `mail` 

**Options**: – 


The function tells exim or dovecot services to reload configuration files.


*******************************************************************
v-restart-proxy
*******************************************************************

**restart proxy server**

**Label**:   `panel` 

**Options**: – 


The function reloads proxy server configuration.


*******************************************************************
v-restart-service
*******************************************************************

**restart service**

**Label**:   `panel` 

**Options**: `SERVICE` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-restart-service apache2
   

The function restarts system service.


*******************************************************************
v-restart-system
*******************************************************************

**restart operating system**

**Label**:   `panel` 

**Options**: `RESTART` `[DELAY]` 

**Examples**:

.. code-block:: bash
   
  v-restart-system yes
   

The function restarts operating system.


*******************************************************************
v-restart-web
*******************************************************************

**restart web server**

**Label**:   `web` 

**Options**: – 


The function reloads web server configuration.


*******************************************************************
v-restart-web-backend
*******************************************************************

**restart backend server**

**Label**:   `web` 

**Options**: – 


The function reloads backend server configuration.


*******************************************************************
v-restore-cron-job
*******************************************************************

**restore single cron job**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `DOMAIN` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-cron-job USER BACKUP CRON [NOTIFY]
   

The function allows the user to restore a single cron job from a backup archive.


*******************************************************************
v-restore-database
*******************************************************************

**restore single database**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `DOMAIN` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-web-domain USER BACKUP DATABASE [NOTIFY]
   

The function allows the user to restore a single database from a backup archive.


*******************************************************************
v-restore-dns-domain
*******************************************************************

**restore single dns domain**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `DOMAIN` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-web-domain USER BACKUP DOMAIN [NOTIFY]
   

The function allows the user to restore a single DNS domain from a backup archive.


*******************************************************************
v-restore-mail-domain
*******************************************************************

**restore single mail domain**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `DOMAIN` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-web-domain USER BACKUP DOMAIN [NOTIFY]
   

The function allows the user to restore a single mail domain from a backup archive.


*******************************************************************
v-restore-user
*******************************************************************

**restore user**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `[WEB]` `[DNS]` `[MAIL]` `[DB]` `[CRON]` `[UDIR]` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-user admin 2019-04-22_01-00-00.tar
   

The function for restoring user from backup. To be able to restore the backup, the archive needs to be placed in /backup.


*******************************************************************
v-restore-web-domain
*******************************************************************

**restore single web domain**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `DOMAIN` `[NOTIFY]` 

**Examples**:

.. code-block:: bash
   
  v-restore-web-domain USER BACKUP DOMAIN [NOTIFY]
   

The function allows the user to restore a single web domain from a backup archive.


*******************************************************************
v-revoke-api-key
*******************************************************************

**revokes api key**

**Label**:   `panel` 

**Options**: `[HASH]` 

**Examples**:

.. code-block:: bash
   
  v-revoke-api-key mykey
   

The function removes a key from in $HESTIA/data/keys/


*******************************************************************
v-run-cli-cmd
*******************************************************************

**run cli command**

**Label**:   `hestia` 

**Options**: `USER` `CMD` `[ARG...]` 

**Examples**:

.. code-block:: bash
   
  v-run-cli-cmd user composer require package
   

The function runs a limited list of cli commands with dropped privileges as the specific hestia user


*******************************************************************
v-schedule-letsencrypt-domain
*******************************************************************

**adding cronjob for letsencrypt cetificate installation**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` `[ALIASES]` 

**Examples**:

.. code-block:: bash
   
  v-schedule-letsencrypt-domain admin example.com www.example.com
   

The function adds cronjob for letsencrypt ssl certificate installation


*******************************************************************
v-schedule-user-backup
*******************************************************************

**schedule user backup creation**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-schedule-user-backup admin
   

The function for scheduling user backup creation.


*******************************************************************
v-schedule-user-backup-download
*******************************************************************

**Schedule a backup**

**Label**:   `hestia` 

**Options**: `USER` `BACKUP` 

**Examples**:

.. code-block:: bash
   
  v-schedule-user-backup-download admin 2019-04-22_01-00-00.tar
   

The function for scheduling user backup creation.


*******************************************************************
v-schedule-user-restore
*******************************************************************

**schedule user backup restoration**

**Label**:   `panel` 

**Options**: `USER` `BACKUP` `[WEB]` `[DNS]` `[MAIL]` `[DB]` `[CRON]` `[UDIR]` 

**Examples**:

.. code-block:: bash
   
  v-schedule-user-restore 2019-04-22_01-00-00.tar
   

The function for scheduling user backup restoration.


*******************************************************************
v-search-command
*******************************************************************

**search for available commands**

**Label**:   `hestia` 

**Options**: `ARG1` `[ARG...]` 

**Examples**:

.. code-block:: bash
   
  v-search-command web
   

This function searches for available Hestia Control Panel commands and returns results based on the specified criteria. Originally developed for VestaCP by Federico Krum https://github.com/FastDigitalOceanDroplets/VestaCP/blob/master/files/v-search-command


*******************************************************************
v-search-domain-owner
*******************************************************************

**search domain owner**

**Label**:   `panel` 

**Options**: `DOMAIN` `[TYPE]` 

**Examples**:

.. code-block:: bash
   
  v-search-domain-owner acme.com
   

The function that allows to find user objects.


*******************************************************************
v-search-fs-object
*******************************************************************

**search file or directory**

**Label**:  

**Options**: `USER` `OBJECT` `[PATH]` 

**Examples**:

.. code-block:: bash
   
  v-search-fs-object admin hello.txt
   

The function search files and directories on the file system


*******************************************************************
v-search-object
*******************************************************************

**search objects**

**Label**:   `panel` 

**Options**: `OBJECT` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-search-object example.com json
   

The function that allows to find system objects.


*******************************************************************
v-search-user-object
*******************************************************************

**search objects**

**Label**:   `panel` 

**Options**: `USER` `OBJECT` `[FORMAT]` 

**Examples**:

.. code-block:: bash
   
  v-search-user-object admin example.com json
   

The function that allows to find user objects.


*******************************************************************
v-start-service
*******************************************************************

**start service**

**Label**:   `panel` 

**Options**: `SERVICE` 

**Examples**:

.. code-block:: bash
   
  v-start-service mysql
   

The function starts system service.


*******************************************************************
v-stop-firewall
*******************************************************************

**stop system firewall**

**Label**:   `panel` 

**Options**: – 


The function stops iptables


*******************************************************************
v-stop-service
*******************************************************************

**stop service**

**Label**:   `panel` 

**Options**: `SERVICE` 

**Examples**:

.. code-block:: bash
   
  v-stop-service apache2
   

The function stops system service.


*******************************************************************
v-suspend-cron-job
*******************************************************************

**suspend cron job**

**Label**:   `panel` 

**Options**: `USER` `JOB` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-cron-job admin 5 yes
   

The function suspends a certain job of the cron scheduler.


*******************************************************************
v-suspend-cron-jobs
*******************************************************************

**Suspending sys cron jobs**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-cron-jobs admin
   

The function suspends all user cron jobs.


*******************************************************************
v-suspend-database
*******************************************************************

**suspend database**

**Label**:   `panel` 

**Options**: `USER` `DATABASE` 

**Examples**:

.. code-block:: bash
   
  v-suspend-database admin admin_wordpress_db
   

The function for suspending a certain user database.


*******************************************************************
v-suspend-database-host
*******************************************************************

**suspend database server**

**Label**:   `panel` 

**Options**: `TYPE` `HOST` 

**Examples**:

.. code-block:: bash
   
  v-suspend-database-host mysql localhost
   

The function for suspending a database server.


*******************************************************************
v-suspend-databases
*******************************************************************

**suspend databases**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-suspend-databases admin
   

The function for suspending of all databases of a single user.


*******************************************************************
v-suspend-dns-domain
*******************************************************************

**suspend dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-dns-domain alice acme.com
   

The function suspends a certain user's domain.


*******************************************************************
v-suspend-dns-domains
*******************************************************************

**suspend dns domains**

**Label**:   `dns` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-dns-domains admin yes
   

The function suspends all user's DNS domains.


*******************************************************************
v-suspend-dns-record
*******************************************************************

**suspend dns domain record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-dns-record alice wonderland.com 42 yes
   

The function suspends a certain domain record.


*******************************************************************
v-suspend-domain
*******************************************************************

**suspend web/dns/mail domain**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-suspend-domain admin example.com
   

The function suspends web/dns/mail domain.


*******************************************************************
v-suspend-firewall-rule
*******************************************************************

**suspend firewall rule**

**Label**:   `panel` 

**Options**: `RULE` 

**Examples**:

.. code-block:: bash
   
  v-suspend-firewall-rule 7
   

The function suspends a certain firewall rule.


*******************************************************************
v-suspend-mail-account
*******************************************************************

**suspend mail account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:

.. code-block:: bash
   
  v-suspend-mail-account admin acme.com bob
   

The function suspends mail account.


*******************************************************************
v-suspend-mail-accounts
*******************************************************************

**suspend all mail domain accounts**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-suspend-mail-accounts admin example.com
   

The function suspends all mail domain accounts.


*******************************************************************
v-suspend-mail-domain
*******************************************************************

**suspend mail domain**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-suspend-mail-domain admin domain.com
   

The function suspends mail domain.


*******************************************************************
v-suspend-mail-domains
*******************************************************************

**suspend mail domains**

**Label**:   `mail` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-suspend-mail-domains admin
   

The function suspends all user's MAIL domains.


*******************************************************************
v-suspend-remote-dns-host
*******************************************************************

**suspend remote dns server**

**Label**:   `dns` 

**Options**: `HOST` 

**Examples**:

.. code-block:: bash
   
  v-suspend-remote-dns-host hostname.tld
   

The function for suspending remote dns server.


*******************************************************************
v-suspend-user
*******************************************************************

**suspend user**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-user alice yes
   

The function suspends a certain user and all his objects.


*******************************************************************
v-suspend-web-domain
*******************************************************************

**suspend web domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-web-domain admin example.com yes
   

The function for suspending the site's operation. After blocking it all visitors will be redirected to a web page explaining the reason of suspend. By blocking the site the content of all its directories remains untouched.


*******************************************************************
v-suspend-web-domains
*******************************************************************

**suspend web domains**

**Label**:   `web` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-suspend-web-domains bob
   

The function of suspending all user's sites.


*******************************************************************
v-sync-dns-cluster
*******************************************************************

**synchronize dns domains**

**Label**:   `dns` 

**Options**: `HOST` 


The function synchronize all dns domains.


*******************************************************************
v-unsuspend-cron-job
*******************************************************************

**unsuspend cron job**

**Label**:   `panel` 

**Options**: `USER` `JOB` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-cron-job admin 7 yes
   

The function unsuspend certain cron job.


*******************************************************************
v-unsuspend-cron-jobs
*******************************************************************

**unsuspend sys cron**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-cron-jobs admin no
   

The function unsuspends all suspended cron jobs.


*******************************************************************
v-unsuspend-database
*******************************************************************

**unsuspend database**

**Label**:   `panel` 

**Options**: `USER` `DATABASE` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-database admin mydb
   

The function for unsuspending database.


*******************************************************************
v-unsuspend-database-host
*******************************************************************

**unsuspend database server**

**Label**:   `panel` 

**Options**: `TYPE` `HOST` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-database-host mysql localhost
   

The function for unsuspending a database server.


*******************************************************************
v-unsuspend-databases
*******************************************************************

**unsuspend databases**

**Label**:   `panel` 

**Options**: `USER` 


The function for unsuspending all user's databases.


*******************************************************************
v-unsuspend-dns-domain
*******************************************************************

**unsuspend dns domain**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-dns-domain alice wonderland.com
   

The function unsuspends a certain user's domain.


*******************************************************************
v-unsuspend-dns-domains
*******************************************************************

**unsuspend dns domains**

**Label**:   `dns` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-dns-domains alice
   

The function unsuspends all user's DNS domains.


*******************************************************************
v-unsuspend-dns-record
*******************************************************************

**unsuspend dns domain record**

**Label**:   `dns` 

**Options**: `USER` `DOMAIN` `ID` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-dns-record admin example.com 33
   

The function unsuspends a certain domain record.


*******************************************************************
v-unsuspend-domain
*******************************************************************

**unsuspend web/dns/mail domain**

**Label**:   `panel` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-domain admin acme.com
   

The function unsuspends web/dns/mail domain.


*******************************************************************
v-unsuspend-firewall-rule
*******************************************************************

**unsuspend firewall rule**

**Label**:   `panel` 

**Options**: `RULE` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-firewall-rule 7
   

The function unsuspends a certain firewall rule.


*******************************************************************
v-unsuspend-mail-account
*******************************************************************

**unsuspend mail account**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` `ACCOUNT` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-mail-account admin acme.com tester
   

The function unsuspends mail account.


*******************************************************************
v-unsuspend-mail-accounts
*******************************************************************

**unsuspend all mail domain accounts**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-mail-accounts admin acme.com
   

The function unsuspends all mail domain accounts.


*******************************************************************
v-unsuspend-mail-domain
*******************************************************************

**unsuspend mail domain**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-mail-domain user02 acme.com
   

The function unsuspends mail domain.


*******************************************************************
v-unsuspend-mail-domains
*******************************************************************

**unsuspend mail domains**

**Label**:   `mail` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-mail-domains admin
   

The function unsuspends all user's MAIL domains.


*******************************************************************
v-unsuspend-remote-dns-host
*******************************************************************

**unsuspend remote dns server**

**Label**:   `dns` 

**Options**: `HOST` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-remote-dns-host hosname.com
   

The function for unsuspending remote dns server.


*******************************************************************
v-unsuspend-user
*******************************************************************

**unsuspend user**

**Label**:   `panel` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-user bob
   

The function unsuspends user and all his objects.


*******************************************************************
v-unsuspend-web-domain
*******************************************************************

**unsuspend web domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-web-domain admin acme.com
   

The function of unsuspending the domain.


*******************************************************************
v-unsuspend-web-domains
*******************************************************************

**unsuspend web domains**

**Label**:   `web` 

**Options**: `USER` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-unsuspend-web-domains admin
   

The function of unsuspending all user's sites.


*******************************************************************
v-update-database-disk
*******************************************************************

**update database disk usage**

**Label**:   `panel` 

**Options**: `USER` `DATABASE` 

**Examples**:

.. code-block:: bash
   
  v-update-database-disk admin wp_db
   

The function recalculates disk usage for specific database.


*******************************************************************
v-update-databases-disk
*******************************************************************

**update databases disk usage**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-databases-disk admin
   

The function recalculates disk usage for all user databases.


*******************************************************************
v-update-dns-templates
*******************************************************************

**update dns templates**

**Label**:   `dns` 

**Options**: `[RESTART]` 


The function for obtaining updated dns templates from Hestia package.


*******************************************************************
v-update-firewall
*******************************************************************

**update system firewall rules**

**Label**:   `panel` 

**Options**: – 


The function updates iptables rules


*******************************************************************
v-update-firewall-ipset
*******************************************************************

**update firewall ipset**

**Label**:   `hestia` 

**Options**: `[REFRESH]` 


The function creates ipset lists and updates the lists if they are expired or ondemand


*******************************************************************
v-update-host-certificate
*******************************************************************

**update host certificate for hestia**

**Label**:   `panel` 

**Options**: `USER` `HOSTNAME` 

**Examples**:

.. code-block:: bash
   
  v-update-host-certificate admin example.com
   

Function updates certificates for hestia


*******************************************************************
v-update-letsencrypt-ssl
*******************************************************************

**update letsencrypt ssl certificates**

**Label**:   `panel` 

**Options**: – 


The function for renew letsencrypt expired ssl certificate for all users


*******************************************************************
v-update-mail-domain-disk
*******************************************************************

**update mail domain disk usage**

**Label**:   `mail` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-update-mail-domain-disk admin example.com
   

The function updates domain disk usage.


*******************************************************************
v-update-mail-domains-disk
*******************************************************************

**calculate disk usage for all mail domains**

**Label**:   `mail` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-mail-domains-disk admin
   

The function calculates disk usage for all mail domains.


*******************************************************************
v-update-mail-templates
*******************************************************************

**update mail templates**

**Label**:   `hestia` 

**Options**: `[RESTART]` `[SKIP]` 


The function for obtaining updated webmail templates from Hestia package.


*******************************************************************
v-update-sys-defaults
*******************************************************************

**update default key database**

**Label**:  

**Options**: `[SYSTEM]` 

**Examples**:

.. code-block:: bash
   
  v-update-sys-defaults
 example: v-update-sys-defaults user
   

The function updates the known key/value pair database


*******************************************************************
v-update-sys-hestia
*******************************************************************

**update hestia package/configs**

**Label**:   `panel` 

**Options**: `PACKAGE` 

**Examples**:

.. code-block:: bash
   
  v-update-sys-hestia hestia-php
   

The function runs as apt update trigger. It pulls shell script from hestia server and runs it. (hestia, hestia-nginx and hestia-php are valid options)


*******************************************************************
v-update-sys-hestia-all
*******************************************************************

**update all hestia packages**

**Label**:   `panel` 

**Options**: – 


The function of updating all hestia packages


*******************************************************************
v-update-sys-hestia-git
*******************************************************************

**Delete log file for user**

**Label**:   `hestia` 

**Options**: `REPOSITORY` `BRANCH` `INSTALL` `[PACKAGES]` 

**Examples**:

.. code-block:: bash
   
  v-update-sys-hestia-git hestiacp staging/beta install all
 # Will download from the hestiacp repository
 # Pulls code from staging/beta branch
 # install: installs package immediately
 # install-auto: installs package and schedules automatic updates from Git
 # 'all': (optional) - compiles nginx and php alongside panel.
 #                     this option takes a long time, only use when needed
   

Downloads and compiles/installs packages from GitHub repositories


*******************************************************************
v-update-sys-ip
*******************************************************************

**update system ip**

**Label**:   `panel` 

**Options**: – 

**Examples**:

.. code-block:: bash
   
  v-update-sys-ip
 # Intended for internal usage
   

The function scans configured ip in the system and register them with hestia internal database. This call is intended for use on vps servers, where ip is set by hypervizor.


*******************************************************************
v-update-sys-ip-counters
*******************************************************************

**update IP usage counters**

**Label**:   `panel` 

**Options**: `IP` 


Function updates usage U_WEB_ADOMAINS and U_SYS_USERS counters.


*******************************************************************
v-update-sys-queue
*******************************************************************

**update system queue**

**Label**:   `panel` 

**Options**: `PIPE` 


This function is responsible queue processing. Restarts of services, scheduled backups, web log parsing and other heavy resource consuming operations are handled by this script. It helps to optimize system behaviour. In a nutshell Apache will be restarted only once even if 10 domains are added or deleted.


*******************************************************************
v-update-sys-rrd
*******************************************************************

**update system rrd charts**

**Label**:   `panel` 

**Options**: – 


The script is wrapper for all rrd functions. It updates all v-update-sys-rrd_`*` at once.


*******************************************************************
v-update-sys-rrd-apache2
*******************************************************************

**update apache2 rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating apache rrd database and graphic.


*******************************************************************
v-update-sys-rrd-ftp
*******************************************************************

**update ftp rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating ftpd rrd database and graphic.


*******************************************************************
v-update-sys-rrd-httpd
*******************************************************************

**update httpd rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating apache rrd database and graphic.


*******************************************************************
v-update-sys-rrd-la
*******************************************************************

**update load average rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating load average rrd database and graphic.


*******************************************************************
v-update-sys-rrd-mail
*******************************************************************

**update mail rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating mail rrd database and graphic.


*******************************************************************
v-update-sys-rrd-mem
*******************************************************************

**update memory rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating memory rrd database and graphic.


*******************************************************************
v-update-sys-rrd-mysql
*******************************************************************

**update MySQL rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating mysql rrd database and graphic.


*******************************************************************
v-update-sys-rrd-net
*******************************************************************

**update network rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating network usage rrd database and graphic.


*******************************************************************
v-update-sys-rrd-nginx
*******************************************************************

**update nginx rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating nginx rrd database and graphic.


*******************************************************************
v-update-sys-rrd-pgsql
*******************************************************************

**update PostgreSQL rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating postgresql rrd database and graphic.


*******************************************************************
v-update-sys-rrd-ssh
*******************************************************************

**update ssh rrd**

**Label**:   `panel` 

**Options**: `PERIOD` 


The function is for updating ssh rrd database and graphic.


*******************************************************************
v-update-user-backup-exclusions
*******************************************************************

**update backup exclusion list**

**Label**:   `panel` 

**Options**: `USER` `FILE` 

**Examples**:

.. code-block:: bash
   
  v-update-user-backup-exclusions admin .bash_history
   

The function for updating backup exclusion list


*******************************************************************
v-update-user-counters
*******************************************************************

**update user usage counters**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-user-counters admin
   

Function updates usage counters like U_WEB_DOMAINS, U_MAIL_ACCOUNTS, etc.


*******************************************************************
v-update-user-disk
*******************************************************************

**update user disk usage**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-user-disk admin
   

The functions recalculates disk usage and updates database.


*******************************************************************
v-update-user-package
*******************************************************************

**update user package**

**Label**:   `panel` 

**Options**: `PACKAGE` 

**Examples**:

.. code-block:: bash
   
  v-update-user-package default
   

The function propagates package to connected users.


*******************************************************************
v-update-user-quota
*******************************************************************

**update user disk quota**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-user-quota alice
   

The functions upates disk quota for specific user


*******************************************************************
v-update-user-stats
*******************************************************************

**update user statistics**

**Label**:   `panel` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-user-stats admin
   

Function logs user parameters into statistics database.


*******************************************************************
v-update-web-domain-disk
*******************************************************************

**update disk usage for domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domain-disk alice wonderland.com
   

The function recalculates disk usage for specific webdomain.


*******************************************************************
v-update-web-domain-ssl
*******************************************************************

**updating ssl certificate for domain**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` `SSL_DIR` `[RESTART]` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domain-ssl admin domain.com /home/admin/tmp
   

The function updates the SSL certificate for a domain. Parameter ssl_dir is a path to directory where 2 or 3 ssl files can be found. Certificate file domain.tld.crt and its key domain.tld.key are mandatory. Certificate authority domain.tld.ca file is optional.


*******************************************************************
v-update-web-domain-stat
*******************************************************************

**update domain statistics**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domain-stat alice acme.com
   

The function runs log analyzer for specific webdomain.


*******************************************************************
v-update-web-domain-traff
*******************************************************************

**update domain bandwidth usage**

**Label**:   `web` 

**Options**: `USER` `DOMAIN` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domain-traff admin example.com
   

The function recalculates bandwidth usage for specific domain.


*******************************************************************
v-update-web-domains-disk
*******************************************************************

**update domains disk usage**

**Label**:   `web` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domains-disk alice
   

The function recalculates disk usage for all user webdomains.


*******************************************************************
v-update-web-domains-stat
*******************************************************************

**update domains statistics**

**Label**:   `web` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domains-stat admin
   

The function runs log analyzer usage for all user webdomains.


*******************************************************************
v-update-web-domains-traff
*******************************************************************

**update domains bandwidth usage**

**Label**:   `web` 

**Options**: `USER` 

**Examples**:

.. code-block:: bash
   
  v-update-web-domains-traff bob
   

The function recalculates bandwidth usage for all user webdomains.


*******************************************************************
v-update-web-templates
*******************************************************************

**update web templates**

**Label**:   `web` 

**Options**: `[RESTART]` `[SKIP]` 


The function for obtaining updated web (Nginx/Apache2/PHP) templates from Hestia package.


