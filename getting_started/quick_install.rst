**********************************
Getting Hestia installation script
**********************************

Log in to your server as root, either directly or via SSH:

*ssh root@your.server*

Download the installation script:

*wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh*

*************
Quick Install
*************

To perform a quick unattended installation, run the install script with the following flags:

**-f**: force

**-y no**: disable interactive mode

**-e email@domain.tld**: admin email address

**-p p4ssw0rd**: admin password

**-s hostname.domain.tld**: system hostname
