# Database

::: {.toctree maxdepth="2" glob=""}
database/phpmyadmin-sso.rst
:::

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

## Why I can’t use `http://ip/phpmyadmin/`{.interpreted-text role="samp"}

For security reasons we have decided to disable this option.

Please use `https://host.domain.tld/phpmyadmin/`

## How can I enable access to `http://ip/phpmyadmin/`{.interpreted-text role="samp"}

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
