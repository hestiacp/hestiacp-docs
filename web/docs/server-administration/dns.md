# DNS Management / DNS server

**TODO: Check if content can be moved**

## How to setup a DNS Cluster

If you are looking for the options to minimise DNS-related downtime or
the way to manage dns across all server you have, you might consider to
set up dns cluster.

::: info
Ensure that your master server’s IP is whitelisted in _Configure
Server_ -\> _Security_ -\> _Allowed IP addresses for API_, otherwise you
will get an error when adding the slave server to the cluster.
:::

1.  Create user **dns-cluster** on a server which will be used as dns
    slave
2.  Run following command on a master

```bash
v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd
```

Password and host name should be replaced with relevant data of course.

Alternatively you can run on the slave server the following command

```bash
v-generate-api-key
```

This will generate an API key. Replace the username "admin" with the
generated key. This will keep the ability to change the admin password
without issues in the future.

```bash
v-add-remote-dns-host slave.yourhost.com 8083 api_key
```

This way you can set up master-\>slave or master-master-master cluster.
There is no limitation on how to chain dns servers.

With the new API system you can also replace api_key with
access_key:secret_key

## Can I separate DNS accounts by users

Yes you can just supply the user variable behind the command.

```bash
v-add-remote-dns-host slave.yourhost.com 8083 admin p4sw0rd '' useraccount
```

Or

```bash
v-add-remote-dns-host slave.yourhost.com 8083 api_key '' '' useraccount
```

With the new API system you can also replace api_key with
access_key:secret_key

Please note that currently only the user dns-user is exempted from
syncing to other servers. If you have a DNS cluster with multiple master
slaves you might run in issues.

## I am not able to add a server as DNS host

When trying to add a DNS server for a cluster I get the following error

```bash
/usr/local/hestia/func/remote.sh: line 43: return: Error:: numeric argument required
Error: api connection to slave.domain.com failed
```

By default API access to has been disabled for not local ip adresses.
Please add you ip adress to the "Allowed ip adresses for API" in the
settings
