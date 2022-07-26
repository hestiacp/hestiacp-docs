# Getting Started

This section will help you install Hestia on your server.

::: warning
Hestia only supports the following operating systems (amd64 or arm64):

- Debian 10
- Debian 11
- Ubuntu 18.04 LTS
- Ubuntu 20.04 LTS
- Ubuntu 22.04 LTS

:::

## Download and run the installer

You'll need to connect to your server as `root`, either directly from the console or remotely, using SSH.

```sh
wget https://raw.githubusercontent.com/hestiacp/hestiacp/release/install/hst-install.sh
```

### Regular, interactive install

```sh
bash hst-install.sh
```

### Unattended install

```sh
bash hst-install.sh --interactive no --email email@domain.tld --password p4ssw0rd --hostname hostname.domain.tld
```

:::details Want to modify which features get installed?
You can modify which feature gets installed by adding flags to your command. For example, this command will install Hestia without Apache2, ClamAV and SpamAssassin and it will install PostgreSQL as additional feature.

```sh
bash hst-install.sh --apache no --postgresql yes --clamav no --spamassassin no
```

All the options can be found in the [Documentation]. You can also use the [Install string generator](https://gabizz.github.io/hestiacp-scriptline-generator/) by [gabizz](https://github.com/gabizz).

:::

## What's next?

By now, you should have a Hestia installation on your server.

[...] Add more info here
