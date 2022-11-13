# Web Templates and FastCGI/Proxy Cache

## How do web templates work?

::: warning
Modifying templates could cause errors on the server and services that
are not able to reload or start.
:::

Everytime you rebuild the user or domain the config files of the domain
are overwritten by the new templates. 

This happens when: 
- HestiaCP is updated 
- the admin initiates it 
- the user modifies settings

The templates can be found in the `/usr/local/hestia/data/templates/web/`
directory in the install folder. 

| Service                 | Location                                              |
|-------------------------|-------------------------------------------------------|
| Nginx (Proxy)           | /usr/local/hestia/data/templates/web/nginx/           |
| Nginx - PHP FPM         | /usr/local/hestia/data/templates/web/nginx/php-fpm/   |
| Apache2 (Legacy/modphp) | /usr/local/hestia/data/templates/web/apache2/         |
| Apache2 - PHP FPM       | /usr/local/hestia/data/templates/web/apache2/php-fpm/ |
| PHP-FPM                 | /usr/local/hestia/data/templates/web/php-fpm/         |

When editing it is the best practice to copy the template before
editing, as the default templates will reset after update of HestiaCP:

```bash
cp original.tpl new.tpl
cp original.stpl new.stpl
cp original.sh new.sh
```

::: info
Avoid modifying default templates as they are overwritten by updates.
:::

When you are done modifying, enable the template with the selected
domain from the control panel.

After modifying an existing template you need to rebuild the user
configuration. This can be done using the [v-rebuild-user]{.title-ref}
command or bulk operation in the web interface (drop down list on a
"User" page).

### Available variables

| Name | Example | Description |
|------|---------|-------------|
|%ip% | 123.123.123.123 | IP Address of Server |
| %proxy_port% | 80 | Port of Proxy |
| %proxy_port_ssl% | 443 | Port of Proxy (SSL) |
| %web_port% | 80 or 8080 | Port of Webserver | 
| %web_ssl_port% | 443 or 8443 | Port of Webserver (SSL) |
| %domain% | domain.tld | Domain |
| %domain_idn% | domain.tld | Domain (Internationalised) |
| %alias_idn% | alias.domain.tld  | Alias Domain (Internationalised) |
| %docroot% | /home/username/web/public_html/ | Document root of domain |
| %sdocroot% | /home/username/web/public_shtml/ | Private root of domain |
| %ssl_pem% | /usr/local/hestia/data/user/username/ssl Location of SSL Certificate |
| %ssl_key% | /usr/local/hestia/data/user/username/ssl Location of SSL Key |
| %web_system% | Nginx / Apache | Software used as Webserver |
| %home% | /home | Default home directory |
| %user% | username | Username of user |
| %backend_lsnr% | `proxy:fcgi://127.0.0.1:9000` | Your default FPM Server |
| %proxy_extentions% | List of extensions | Extensions that should be handled by the proxy server |


::: tip
%sdocroot% can also be set to %docroot% with settings
:::

## How can I change settings for a specific domain

With the switch to PHP-FPM there are currently 2 different ways.

1.  Using .user.ini in the home directory `/home/user/web/domain.com/public_html`
2.  Via PHP-FPM pool config

Config templates for the PHP pool can be found in


| Service                 | Location                                              |
|-------------------------|-------------------------------------------------------|
| PHP-FPM            | /usr/local/hestia/data/templates/web/php-fpm/          |

:::warning
Due to the fact we use multi PHP we need to recognise the PHP version to
be used. Therefore we follow the following naming:
:::

```bash
YOURNAME-PHP-X_Y.tpl
```

Where X_Y is your PHP version.

## Installing PHP modules

```sh
apt install php-package-name
```

For example, the following command will install `php-memcached` and `php-redis`, including the required
additional packages for PHP.

```sh
apt install php-memcached php-redis
```

## Nginx FastCGI Cache

::: tip
FastCGI only applies for Nginx + PHP-FPM servers. If you use Nginx + Apache2 + PHP-FPM this will not apply to you!
:::

FastCGI Cache is an option with in Nginx allowing to cache the out put off FastCGI (in this case php). There will be for a short moment a file created on your server with the contents of the output. If an other user requests the same page Nginx will check if the "age" of the cached file is still valid and if it is true it will send the cached file to to the user.

FastCGI cache works best for sites get a lot of request and the pages doesn’t change that often. (For example a news site). For a more dynamic sites there might be changes required to the configuration or even disabling is required.

### Why does software package x and y not work with FastCGI cache

As we have over 20 different templates and we don’t use them al we have decided it to release the future and hope in the future the community helps improving the templates with a pull request.

If you want to add support to a certain template you need to add the following lines to the template file(s)

Check the examples below.

### How do I enable FastCGI cache for my custom template

Within the block where you call php / fastcgi pass

```bash
location ~ [^/]\.php(/|$) {
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    try_files $uri =404;
    fastcgi_pass    %backend_lsnr%;
    fastcgi_index   index.php;
    include         /etc/nginx/fastcgi_params;
}
```

And add the following lines under the

`include /etc/nginx/fastcgi_params;`

```bash
include %home%/%user%/conf/web/%domain%/nginx.fastcgi_cache.conf*;

if ($request_uri ~* "/path/with/exceptions/regex/whatever") {
    set $no_cache 1;
}
```

### How can I clear the cache?

When FastCGI cache is enabled an button is added to "Edit" Web where you can clear the cache or use the command:

```bash
v-purge-nginx-cache user domain.tld
```

### Why do I don’t have the option to use FastCGI cache

FastCGI cache is an option for Nginx mode only. If you are using Nginx + Apache2 you can enable proxy caching template and proxy cache will enable. Functions almost the same. Proxy cache will also work in case you use a docker image or nodejs.

To write custom caching templates name the template:

`caching-yourname.tpl`, `caching-yourname.stpl` and `caching-yourname.sh`
