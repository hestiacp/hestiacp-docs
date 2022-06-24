Getting Started
==================

.. toctree::
  :maxdepth: 3
  :glob:

**********************************
Getting Hestia installation script
**********************************

Log in to your server as *root*, either directly or via SSH to install HestiaCP with 3 easy steps:

.. code-block:: bash

    ssh root@your.server
    wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
    bash hst-install.sh

.. note::
  If your not *root*, the whole process can fail!

***************************************
Requirements
***************************************

- CPU Architecture: AMD64 (x86_64 Intel or AMD) or ARM64 (Aarch64)
- Debian 11 or 10
- Ubuntu 20.04 LTS or 18.04 LTS

.. note::
  32 bit operating systems are not supported!

.. note::
  Hestia Control Panel must be installed on top of a fresh operating system installation to ensure proper functionality.

*****************************************
All available options of install script
*****************************************
To get all installation options run the following command
**bash hst-install.sh -h**

You will see the entire list of options available

.. code-block:: bash

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

**Example of usage:** *bash hst-install.sh -w yes -t no -c no -x yes -z yes -b yes -i yes -m yes -l de  \\                -s hostname.youdomain.tld -e yourmail@mail.com -p yourpasswordhere -a no -k no -o no*

.. note::
  Here is a small tool to create a setup string for you:
  https://gabizz.github.io/hestiacp-scriptline-generator/

Then Hestia will install following software
on your system:
   
- Nginx Web Server
- PHP-FPM Application Server
- Exim Mail Server
- Dovecot POP3/IMAP Server
- MariaDB Database Server
- Vsftpd FTP Server
- IPtables Firewall + Fail2Ban Intrusion prevention software
