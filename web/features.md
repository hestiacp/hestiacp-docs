---
layout: page
title: Features
---

# Main Features

TODO: Make this a [custom page](https://vitepress.vuejs.org/config/frontmatter-configs.html#layout).

## Users

- Support for SFTP chroot jails
- Two-Factor Authentication support for the Admin Panel
- SSH keys for login via SFTP and SSH

## Web domains

- Nginx FastCGI cache support for Nginx + PHP-FPM
- Nginx Proxy cache support for Nginx + Apache2
- Per-domain TLS certificates for web domains
- MultiIP support for Web/Mail/DNS
- MultiPHP support for
  - PHP 5.6 ([EOL](https://www.php.net/supported-versions.php))
  - PHP 7.0 ([EOL](https://www.php.net/supported-versions.php))
  - PHP 7.1 ([EOL](https://www.php.net/supported-versions.php))
  - PHP 7.2 ([EOL](https://www.php.net/supported-versions.php))
  - PHP 7.3 ([EOL](https://www.php.net/supported-versions.php))
  - PHP 7.4
  - PHP 8.0
  - PHP 8.1
- One-Click Install Apps
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

- Per-domain TLS certificates for inbound and outbound mail services (Exim 4, Dovecot, Webmail)
- SMTP relay setup for Exim in case port 25 is blocked by the provider
- Rate limit adjustable per user or email account
- Let’s Encrypt support for mail domains
- Latest version of Roundcube
- Optional Rainloop installation

## Database

- Support for MariaDB 10.2 -> 10.8 with 10.6 as default
- Support for PostgreSQL
- Lastest version of PHPmyAdmin

## Server admin

- Automated backups to SFTP, FTP or Backblaze B2
