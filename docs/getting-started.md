# Getting Started

This section will help you get Hestia installed on your server. If you already have Hestia installed and are just looking for options, you can skip this page.

::: warning
The installer needs to be run as `root`, either directly from the terminal or remotely, using SSH. If you do not do this, the installer will not proceed.
:::

## Requirements

::: warning
Hestia must be installed on top of a fresh operating system installation to ensure proper functionality.
:::

|                  | Minimum                                           | Recommended                          |
| ---------------- | ------------------------------------------------- | ------------------------------------ |
| CPU              | 1 core, 64-bit                                    | 4 cores                              |
| Memory           | 1 GB (no SpamAssassin and ClamAV)                 | 4 GB                                 |
| Disk             | 10 GB HDD                                         | 40 GB SSD                            |
| Operating System | Debian 10, 11 <br> Ubuntu 18.04, 20.04, 22.04 LTS | Latest Debian <br> Latest Ubuntu LTS |

## Regular installation

Interactive installer that will install the default Hestia software configuration.

```sh
$ curl -sSL https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh | bash
```

## Custom installation

If you want to customize which software gets installed, or want to run an unattended installation, you will need to run a custom installation.

```sh
$ curl -sSL https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh -o hst-install.sh
$ bash hst-install.sh --interactive no --email email@domain.tld --password p4ssw0rd --hostname hostname.domain.tld
```

## List of installation options

::: tip
An easier way to choose your installation options is by using the [Install string generator](https://gabizz.github.io/hestiacp-scriptline-generator/) by [gabizz](https://github.com/gabizz).
:::

To choose what software gets installed, you can provide flags to the installation script. To get a full list of options, run `bash hst-install.sh --help`.

```sh
$ bash hst-install.sh --help
-a, --apache          Install Apache        [yes|no]  default: yes
-w, --phpfpm          Install PHP-FPM       [yes|no]  default: yes
-o, --multiphp        Install Multi-PHP     [yes|no]  default: no
-v, --vsftpd          Install Vsftpd        [yes|no]  default: yes
-j, --proftpd         Install ProFTPD       [yes|no]  default: no
-k, --named           Install Bind          [yes|no]  default: yes
-m, --mysql           Install MariaDB       [yes|no]  default: yes
-g, --postgresql      Install PostgreSQL    [yes|no]  default: no
-x, --exim            Install Exim          [yes|no]  default: yes
-z, --dovecot         Install Dovecot       [yes|no]  default: yes
-Z, --sieve           Install Sieve         [yes|no]  default: no
-c, --clamav          Install ClamAV        [yes|no]  default: yes
-t, --spamassassin    Install SpamAssassin  [yes|no]  default: yes
-i, --iptables        Install Iptables      [yes|no]  default: yes
-b, --fail2ban        Install Fail2ban      [yes|no]  default: yes
-q, --quota           Filesystem Quota      [yes|no]  default: no
-d, --api             Activate API          [yes|no]  default: yes
-r, --port            Change Backend Port             default: 8083
-l, --lang            Default language                default: en
-y, --interactive     Interactive install   [yes|no]  default: yes
-s, --hostname        Set hostname
-e, --email           Set admin email
-p, --password        Set admin password
-f, --force           Force installation
-h, --help            Print this help
```

### Example

```sh
$ bash hst-install.sh \
--interactive no \
--hostname host.example.com \
--email email@example.com \
--password p4ssw0rd \
--lang fr \
--apache no \
--named no \
--clamav no \
--spamassassin no
```

This command will install Hestia in French with the following software:

- nginx Web Server
- PHP-FPM Application Server
- MariaDB Database Server
- IPtables Firewall + Fail2Ban Intrusion prevention software
- vsftpd FTP Server
- Exim Mail Server
- Dovecot POP3/IMAP Server

## What’s next?

By now, you should have a Hestia installation on your server. You are be ready to add new users, so that you (or they) can add new websites on your server.

To access your control panel, navigate to https://host.example.com:8083 or http://your.public.ip.address:8083
