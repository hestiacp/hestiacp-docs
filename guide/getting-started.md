---
title: Getting Started
---

# {{ $frontmatter.title }}

This section will help you get Hestia installed on your server. If you already have Hestia installed and are just looking for options, you can skip this page.

## Download and run the installer

::: info
Hestia only supports the following **64-bit** (ARM or x86) operating systems:

- Debian: 10 and 11
- Ubuntu: 18.04 LTS, 20.04 LTS and 22.04 LTS

:::

You’ll need to connect to your server as **root**, either directly from the terminal or remotely, using SSH. First you’ll need to download the installer:

```sh
$ wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
```

### Regular, interactive install

```sh
$ bash hst-install.sh
```

### Unattended install

```sh
$ bash hst-install.sh --interactive no --email email@domain.tld --password p4ssw0rd --hostname hostname.domain.tld
```

:::details Want to modify which features get installed?
You can modify which feature gets installed by adding flags to your command. For example, this command will install Hestia without Apache2, ClamAV and SpamAssassin and it will install PostgreSQL as additional feature.

```sh
$ bash hst-install.sh --apache no --postgresql yes --clamav no --spamassassin no
```

All the options can be found in the [Documentation]. You can also use the [Install string generator](https://gabizz.github.io/hestiacp-scriptline-generator/) by [gabizz](https://github.com/gabizz).

:::

## What’s next?

By now, you should have a Hestia installation on your server. You should be ready to add new users, so that you (or they) can add new websites on your server.
