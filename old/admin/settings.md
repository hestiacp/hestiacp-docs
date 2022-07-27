# Server setting / Config

::: {.toctree maxdepth="2" glob=""}
settings/filemanager.rst settings/firewall.rst
:::

## I am not able to login

For installing dependencies we use Composer. As are currently not able
to run it under hestia-php version. We install it via /usr/bin/php. Make
sure proc_open is allowed in the main php version. In the future we look
in methods to allow install via composer via hestia-php.

## Where can I find more information about the config files

A good starting point for every software check the creator

- For Nginx [NGINX Docs](https://nginx.org/en/docs/)
- For Apache2 [Apache Docs](http://httpd.apache.org/docs/2.4/)
- For PHP FPM [PHP
  Docs](https://www.php.net/manual/en/install.fpm.configuration.php)

You could also try [our Forum](https://forum.hestiacp.com)

## Can I use HestiaCP behind Cloudflare CDN?

By default [Cloudflare
Proxy](https://support.cloudflare.com/hc/en-us/articles/200169156-Identifying-network-ports-compatible-with-Cloudflare-s-proxy)
supports only a limited number of ports. This means Cloudflare will not
forward port 8083, which is the default port which HestiaCP listens on.

To change the port to one that Cloudflare will forward, you can run this
command

```bash
v-change-sys-port 2083
```

Or you can disable the proxy feature of Cloudflare

## How to remove unused ethernet ports from RRD

```bash
nano /usr/local/hestia/conf/hestia.conf
```

Add the following line:

```bash
RRD_IFACE_EXCLUDE='lo'
```

Add a other network port as comma separated list

```bash
rm /usr/local/hestia/web/rrd/net/*
systemctl restart hestia
```

## What does the policy "Enforce subdomain ownership" mean

In Hestia 1.3.5 and Vesta it was possible for "User Bob" to create an
subdomain (bob.alice.com) of alice.com even the User Alice is a
different user. This could cause "Security" issues and therefor we
have decided to add a policy to disable / enable this behaviour. By
default the policy is enabled.

To turn the the policy off for only one domain. For example that has
been used for "testing"

```bash
# to enable
v-add-web-domain-allow-users user domain.com
# to disable
v-delete-web-domain-allow-users user domain.com
```

## Can I restrict access to the "Admin" account

In 1.3 we have added the function in Hestia to give an other user
Administrator access for 1.4 we have decided to give system
administrators the options to limit access to the main "system
administrator" account to improve security.

## My server ip has changed what do I need to do

When a server ip has changed run the de following command

```bash
# Update system ip
v-update-sys-ip
```

It will rebuild all config files\...

## Unable to bind adress

In rare cases the network service might be slower than Apache2 and or
Nginx. In that case Nginx or Apache2 will refuse to start up
successfully start.

```bash
systemctl status nginx
```

Will create the error an error

```bash
nginx: [emerg] bind to x.x.x.x:80 failed (99: cannot assign requested address)
```

or in case of Aapche2

```bash
(99)Cannot assign requested address: AH00072: make_sock: could not bind to address x.x.x.x:8443
```

The following command should allow services to assign to non existing ip
addresses

```bash
sysctl -w net.ipv4.ip_nonlocal_bind=1
```

## I am unable to monitor proccess with Zabbix

For security reasons users are not allowed to monitor processes from
other users by default.

To solve the issue in case you use monitoring via Zabbix

Edit /etc/fstab and modify to the following

```bash
proc   /proc   proc   defaults,hidepid=2,gid=zabbix   0   0
```

Reboot the server or remount /proc

## Error: 24: Too many open files

```bash
2022/02/21 15:04:38 [emerg] 51772#51772: open() "/var/log/apache2/domains/<redactedforprivacy>.error.log" failed (24: Too many open files)
```

or

```bash
2022/02/21 15:04:38 [emerg] 2724394#2724394: open() "/var/log/nginx/domains/xxx.error.log" failed (24: Too many open files)
```

This error means that there are to many open files with Nginx. To
resolve this issue:

/etc/systemd/system/nginx.service.d/override.conf

```bash
[Service]
LimitNOFILE=65536
```

Then run:

```bash
systemctl daemon-reload
```

Add this to the Nginx config file (Needs to be smaller or equal to
LimitNOFILE!)

```bash
worker_rlimit_nofile 16384;
```

And then restart nginx with systemctl restart nginx

To verifiy run:

```bash
cat /proc/<nginx-pid>/limits.
```
