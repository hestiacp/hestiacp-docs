# Main Features

## Users

- Support for SFTP chroot jails
- 2 Factor authentication authentication for the Admin Panel
- SSH keys for login via SFTP and SSH

## Web domains

- Nginx FastCGI cache support for Nginx + PHP-FPM
- Nginx Proxy cache support for Nginx + Apache2
- Per domain TLS certificates for web domains
- MultiIP support for web/mail/dns
- MultiPHP support for
  - php5.6 ([EOL](https://www.php.net/supported-versions.php))
  - php7.0 ([EOL](https://www.php.net/supported-versions.php))
  - php7.1 ([EOL](https://www.php.net/supported-versions.php))
  - php7.2 ([EOL](https://www.php.net/supported-versions.php))
  - php7.3 ([EOL](https://www.php.net/supported-versions.php))
  - php7.4
  - php8.0
  - php8.1
- 1 Click Install Apps
  - WordPress
  - Dokuwiki
  - Drupal
  - Grav
  - Laravel
  - MediaWiki
  - NextCloud
  - Opencart
  - Prestashop
  - Symphony

## Mail

- Per-domain TLS certificates for inbound and outbound mail services
  (exim4, dovecot, webmail)
- SMTP relay setup for Exim in case port 25 is blocked by the provider
- Rate limit adjustable per user or email account
- Per-domain TLS certificates for web domains
- Let’s Encrypt support for mail domains
- Latest version of Roundcube

## Database

- Support for MariaDB 10.2 -\> 10.8 with 10.6 as default
- Support for Postgresql
- Lastest version of PHPmyAdmin

## Server admin

- Automated backups to SFTP, FTP or Backblaze B2
