# Database & phpMyAdmin SSO

**TODO: Rewrite content**

## How to setup a remote database server

1.  It is assumed you already have your second server up and running
2.  On your Hestia Server run the following command

```bash
v-add-database-host mysql new-server.com root password
```

MySQL may be replaced by the PostgreSQL

1.  To make sure database has been added run following command

```bash
v-list-database-hosts
```

## Why I can’t use `http://ip/phpmyadmin/`

For security reasons we have decided to disable this option.

Please use `https://host.domain.tld/phpmyadmin/`

## How can I enable access to `http://ip/phpmyadmin/`

For Apache2

```bash
nano /etc/apache2/conf.d/ip.conf

# And add the code before both </VirtualHost>
IncludeOptional /etc/apache2/conf.d/*.inc

# Restart apache2
systemctl restart apache2

# Or add in /etc/apache2.conf
IncludeOptional /etc/apache2/conf.d/*.inc
```

For Nginx

```bash
nano /etc/nginx/conf.d/ip.conf

# replace
location /phpmyadmin/ {
      alias /var/www/document_errors/;
      return 404;
  }
location /phppgadmin/ {
      alias /var/www/document_errors/;
      return 404;
  }

# with
include     /etc/nginx/conf.d/phpmyadmin.inc*;
include     /etc/nginx/conf.d/phppgadmin.inc*;
```

## How can I connect from a remote location to the database

By default connections are disabled open port 3306 in the firewall. Open
port 3306 in the firewall

![Add Firewall rule](/images/ipset/ipset-3.png)

Then edit /etc/mysql/mariadb.conf.d/50-server.cnf

```bash
nano /etc/mysql/mariadb.conf.d/50-server.cnf
```

And set bind-address = 0.0.0.0 or bind-address =
"your.server.ip.address"

## PhpMyAdmin Single Sign On

### Unable to activate PhpMyAdmin Single Sign on

Make sure api is enabled and working properly. Hestia PhpMyAdmin Single
Sign On function connects over the HestiaCP Api.

### When clicking on "phpMyAdmin" button i am forwarded to the login page of PhpMyAdmin

Automated is casuing sometimes issues. First login into SSH and open
/var/log/{webserver}/domains/{hostname.domain.com.error.log and check
for the following error messages.

#### Unable to connect over API please check api connection

1.  Check if the api has been enabled
2.  Add your public ip of your server to the allowed ip in the "Server
    settings"

#### Access denied: There is a security token mismatch

1.  Enable and then Disable the API. This will refresh both keys.
2.  If you are behind a firewall, proxy you may want to disable it. And
    then try again.

#### Link has been expired

Refresh list DB page and try again.
