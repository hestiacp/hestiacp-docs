################################
Web domains management commands
################################

*********************************
v-change-web-domain-backend-tpl
*********************************

**Parameters**: User Domain Template [RESTART]

**Example usage**: `v-change-web-domain-backend-tpl admin acme.com socket`


*********************************
v-change-web-domain-ftp-password
*********************************

**Parameters**: User Domain Ftp_user Ftp_password

**Example usage**: `v-change-web-domain-ftp-password admin example.com ftp_usr ftp_qwerty`


****************************
v-change-web-domain-ftp-path
****************************

**Parameters**: User Domain Ftp_user Ftp_path

**Example usage**: `v-change-web-domain-ftp-path admin example.com /home/admin/example.com`


****************************
v-change-web-domain-httpauth
****************************

**Parameters**: User Domain Auth_user Auth_password [RESTART]

**Example usage**: `v-change-web-domain-httpauth admin acme.com alice white_rA$$bIt`


**********************
v-change-web-domain-ip
**********************
**Parameters**: User Domain Ip [RESTART]

**Example usage**: `v-change-web-domain-ip admin example.com 167.86.105.230 yes`

****************************************
v-add-letsencrypt-domain
****************************************

**Parameters**: User Domain [ALIASES]

**Example usage**: `v-add-letsencrypt-domain admin wonderland.com www.wonderland.com`

****************************************
v-add-letsencrypt-user
****************************************

**Parameters**: User

**Example usage**: `v-add-letsencrypt-user bob`

****************************************
v-add-web-domain
****************************************

**Parameters**: User Domain [IP] [RESTART] [ALIASES] [PROXY_EXTENSIONS]

**Example usage**: `v-add-web-domain admin wonderland.com 192.18.22.43 yes www.wonderland.com`

****************************************
v-add-web-domain-alias
****************************************

**Parameters**: User Domain Aliases [RESTART]

**Example usage**: `v-add-web-domain-alias admin acme.com www.acme.com yes`

****************************************
v-add-web-domain-backend
****************************************

**Parameters**: User Domain [TEMPLATE] [RESTART]

**Example usage**: `v-add-web-domain-backend admin exmaple.com default yes`

****************************************
v-add-web-domain-ftp
****************************************

**Parameters**: User Domain Ftp_user Ftp_password [FTP_PATH]

**Example usage**: `v-add-web-domain-ftp alice wonderland.com alice_ftp p4$$vvOrD`

****************************************
v-add-web-domain-httpauth
****************************************

**Parameters**: User Domain Auth_user Auth_password [RESTART]

**Example usage**: `v-add-web-domain-httpauth admin acme.com user02 super_pass`

****************************************
v-add-web-domain-proxy
****************************************

**Parameters**: User Domain [TEMPLATE] [EXTENTIONS] [RESTART]

**Example usage**: `v-add-web-domain-proxy admin example.com`

****************************************
v-add-web-domain-ssl
****************************************

**Parameters**: User Domain Ssl_dir [SSL_HOME] [RESTART]

**Example usage**: `v-add-web-domain-ssl admin example.com /home/admin/conf/example.com/web`

****************************************
v-add-web-domain-ssl-force
****************************************

**Parameters**: User Domain

**Example usage**: `v-add-web-domain-ssl-force admin acme.com`

****************************************
v-add-web-domain-stats
****************************************

**Parameters**: User Domain Type

**Example usage**: `v-add-web-domain-stats admin example.com awstats`

****************************************
v-add-web-domain-stats-user
****************************************

**Parameters**: User Domain Stats_user Stats_pass [RESTART]

**Example usage**: `v-add-web-domain-stats-user admin example.com watchdog your_password`

****************************************
v-change-web-domain-name
****************************************

**Parameters**: User Domain New_domain [RESTART]

**Example usage**: `v-change-web-domain-name alice wonderland.com lookinglass.com yes`

****************************************
v-change-web-domain-proxy-tpl
****************************************

**Parameters**: User Domain Template [EXTENTIONS] [RESTART]

**Example usage**: `v-change-web-domain-proxy-tpl admin domain.tld hosting`

****************************************
v-change-web-domain-sslcert
****************************************

**Parameters**: User Domain Ssl_dir [RESTART]

**Example usage**: `v-change-web-domain-sslcert admin example.com /home/admin/tmp`


****************************************
v-change-web-domain-sslhome
****************************************

**Parameters**: User Domain Ssl_home [RESTART]

**Example usage**: `v-change-web-domain-sslhome admin acme.com /home/admin/acme.com/public_shtml`


****************************************
v-change-web-domain-stats
****************************************


**Parameters**: User Domain Type

**Example usage**: `v-change-web-domain-stats admin example.com awstats`


****************************************
v-change-web-domain-tpl
****************************************

**Parameters**: User Domain Template [RESTART]

**Example usage**: `v-change-web-domain-tpl admin acme.com opencart`

****************************************
v-delete-web-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain admin wonderland.com`


****************************************
v-delete-web-domain-alias
****************************************


**Parameters**: User Domain Dom_alias [RESTART]

**Example usage**: `v-delete-web-domain-alias admin example.com www.example.com`

****************************************
v-delete-web-domain-backend
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain-backend admin acme.com`

****************************************
v-delete-web-domain-ftp
****************************************

**Parameters**: User Domain Ftp_user

**Example usage**: `v-delete-web-domain-ftp admin wonderland.com bob_ftp`


****************************************
v-delete-web-domain-httpauth
****************************************


**Parameters**: User Domain Auth_user [RESTART]

**Example usage**: `v-delete-web-domain-httpauth admin example.com alice`


****************************************
v-delete-web-domain-proxy
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain-proxy alice lookinglass.com`

****************************************
v-delete-web-domain-ssl
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain-ssl admin acme.com`


****************************************
v-delete-web-domain-ssl-force
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain-ssl-force admin domain.tld`

****************************************
v-delete-web-domain-stats
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-web-domain-stats user02 h1.example.com`

****************************************
v-delete-web-domain-stats-user
****************************************

**Parameters**: User Domain [RESTART]

**Example usage**: `v-delete-web-domain-stats-user admin acme.com`


****************************************
v-delete-web-domains
****************************************

**Parameters**: User [RESTART]

**Example Usage**: `v-delete-web-domains admin`

****************************************
v-list-web-domain
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-web-domain admin example.com`

****************************************
v-list-web-domain-accesslog
****************************************

**Parameters**: User Domain [LINES] [FORMAT]

**Example usage**: `v-list-web-domain-accesslog admin example.com`

****************************************
v-list-web-domain-errorlog
****************************************

**Parameters**: User Domain [LINES] [FORMAT]

**Example usage**: `v-list-web-domain-errorlog admin acme.com`

****************************************
v-list-web-domain-ssl
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-web-domain-ssl admin wonderland.com`

****************************************
v-list-web-domains
****************************************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-web-domains alice`

****************************************
v-list-web-stats
****************************************

**Parameters**: None

**Example usage**: `v-list-web-stats`

****************************************
v-list-web-templates
****************************************

**Parameters**: None

**Example usage**: `v-list-web-templates`

****************************************
v-list-web-templates-backend
****************************************

**Parameters**: None

**Example usage**: `v-list-web-templates-backend`

****************************************
v-list-web-templates-proxy
****************************************

**Parameters**: None

**Example usage**: `v-list-web-templates-proxy`

****************************************
v-restart-web
****************************************

**Parameters**: None

**Example usage**: `v-restart-web`

****************************************
v-restart-web-backend
****************************************

**Parameters**: None

**Example usage**: `v-restart-web-backend`

****************************************
v-suspend-web-domain
****************************************

**Parameters**: User Domain [RESTART]

**Example usage**: `v-suspend-web-domain admin example.com yes`

****************************************
v-suspend-web-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**: `v-suspend-web-domains bob`

****************************************
v-unsuspend-web-domain
****************************************


**Parameters**: User Domain [RESTART]

**Example usage**: `v-unsuspend-web-domain admin acme.com`

****************************************
v-unsuspend-web-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**: `v-unsuspend-web-domains admin`

****************************************
v-update-web-domain-disk
****************************************

**Parameters**: User Domain

**Example usage**: `v-update-web-domain-disk alice wonderland.com`

****************************************
v-update-web-domain-ssl
****************************************

**Parameters**: User Domain Ssl_dir [RESTART]

**Example usage**: `v-update-web-domain-ssl admin domain.com /home/admin/tmp`

****************************************
v-update-web-domain-stat
****************************************

**Parameters**: User Domain

**Example usage**: `v-update-web-domain-stat alice acme.com`

****************************************
v-update-web-domain-traff
****************************************

**Parameters**: User Domain

**Example usage**: `v-update-web-domain-traff admin example.com`

****************************************
v-update-web-domains-disk
****************************************

**Parameters**: User

**Example usage**: `v-update-web-domains-disk alice`

****************************************
v-update-web-domains-stat
****************************************

**Parameters**: User

**Example usage**: `v-update-web-domains-stat admin`



****************************************
v-update-web-domains-traff
****************************************

**Parameters**: User

**Example usage**: `v-update-web-domains-traff bob`

****************************************
v-update-web-templates
****************************************

**Parameters**: None

**Example usage**: `v-update-web-templates`

****************************************
v-change-web-domain-hsts 
****************************************

**Parameters**:  User Domain On/Off

**Example usage**: `v-change-web-domain-hsts admin example.com on`
