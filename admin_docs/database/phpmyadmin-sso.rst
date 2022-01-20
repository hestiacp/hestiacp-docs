###############################
PhpMyAdmin Single Sign On
###############################

************************************************
Unable to activate PhpMyAdmin Single Sign on 
************************************************

Make sure api is enabled and working properly. Hestia PhpMyAdmin Single Sign On function connects over the HestiaCP Api. 

************************************************************************************************
When clicking on "phpMyAdmin" button  i am forwarded to the login page of PhpMyAdmin
************************************************************************************************

Automated is casuing sometimes issues. First login into SSH and open /var/log/{webserver}/domains/{hostname.domain.com.error.log and check for the following error messages.

=================================================================
Unable to connect over API please check api connection
=================================================================

1. Check if the api has been enabled
2. Add your public ip of your server to the allowed ips in the "Server settings"

=================================================================
Access denied: There is a security token mismatch
=================================================================

1. Enable and then Disable the API. This will refresh both keys.
2. If you are behind a firewall, proxy you may want to disable it. And then try again. 

=================================================================
Link has been expired
=================================================================

Refresh list DB page and try again. 