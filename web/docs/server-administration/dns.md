# DNS Cluster and DNSSEC

With the release of Version 1.7.0 we have implemented support for DNSSEC. DNSSEC requires an Master -> Slave setup and the existing implementation is an Master <-> Master setup. 

## DNS Cluster setup (Both)

If you are looking for the options to minimise DNS-related downtime or the way to manage dns across all server you have, you might consider to set up dns cluster.

- White list your master server ip is white listed in  _Configure Server_ -> _Security_ -> _Allowed IP addresses for API_, otherwise you will get an error when adding the slave server to the cluster.
- Enable "Enable API access" for admin (or user)
- Create an API key under the admin user with at least "sync-dns-cluster". 

::: info
  With the release of 1.6.0 we have implemented the new api authentication system. We strongly suggest using this method instead of the old system. As it is more secure due to the length  of the access key and secret key! 
:::

If you still want to use the "Legacy api to authenticate with admin username and the password" make sure Enable legacy API access is set to "yes"


## DNS Cluster Hestia API ( Master <-> Master)

::: caution
  This method does not support DNSSEC!
:::

1. Create a new user on the Hestia server that will act as a "Slave"
2. Run the following command to enable the DNS server

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'accesskey:secretkey' '' 'api' 'dns-user'
```

Or if you still want to use admin and password authentication

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'admin' 'strongpassword' 'api' 'dns-user'
```

This way you can set up master-\>slave or master-master-master cluster.

There is no limitation on how to chain dns servers.

## DNS Cluster Hestia API ( Master -> Slave)

1. Create a new user on the Hestia server that will act as a "Slave"
2. Make the following changes to `/usr/local/hestia/conf/hestia.conf`
`DNS_CLUSTER_SYSTEM='hestia'` to `DNS_CLUSTER_SYSTEM='zone'`
3. Open on the master server /etc/bind/named.options and change 
```
allow-transfer {"none";};
```
to 
```
allow-transfer {slaveip;};
```
To add multiple slaves

```
allow-transfer { 12.34.56.89; 12.34.56.90;};
```
Then add:
```
also-notify {slaveip; };
```
And restart bind9

```bash
systemctl restart bind9
```

4. Open on the slave server  /etc/bind/named.options and change the following:
```
allow-recursion { 127.0.0.1; ::1;};
```
And change it 
```
allow-recursion { 127.0.0.1; ::1; masterip;};
```
And add:
```
allow-notify{ masterip; };
```
And restart bind9

```bash
systemctl restart bind9
```
5. Run the following command to enable the DNS server

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'accesskey:secretkey' '' 'api' 'dns-user'
```

Or if you still want to use admin and password authentication

```bash
v-add-remote-dns-host slave.yourhost.com 8083 'admin' 'strongpassword' 'api' 'dns-user'
```
## Converting an existing DNS cluster to master slave

1. Make the following changes to `/usr/local/hestia/conf/hestia.conf`
`DNS_CLUSTER_SYSTEM='hestia'` to `DNS_CLUSTER_SYSTEM='zone'`
2. Open on the master server /etc/bind/named.options and change 
```
allow-transfer {"none";};
```
to 
```
allow-transfer {slaveip;};
```
To add multiple slaves

```
allow-transfer { 12.34.56.89; 12.34.56.90;};
```
Then add:
```
also-notify {slaveip; };
```
And restart bind9

```bash
systemctl restart bind9
```

3. Open on the slave server  /etc/bind/named.options and change the following:
```
allow-recursion { 127.0.0.1; ::1;};
```
And change it 
```
allow-recursion { 127.0.0.1; ::1; masterip;};
```
And add:
```
allow-notify{ masterip; };
```
And restart bind9

```bash
systemctl restart bind9
```
4. Update DNS with `v-sync-dns-cluster`

## Enable DNSSEC

::: warning
  DNSSEC can't be used when Hestia Cluster is active as Master <-> Master
:::

To enable DNSSEC check the checkbox in-front of DNSSEC and save.

To view the public key. Got to the list DNS domains and click on the ** <i class="fas fas-key"></i> ** icon. 

Depending on your register you can create a new record based on the DNSKEY or DS key. This might be diffierent for each provider. 

After DNSSEC public has been added to the register. DNSSEC is enabled and live. 

::: warning
  Any removal or disabling of the private key at Hestia will make the domain in accessble. 
:::
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
