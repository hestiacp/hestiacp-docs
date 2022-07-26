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

By now, you should have a basic but functional VitePress documentation site. But currently, the user has no way to navigate around the site because it's missing for example sidebar menu we have on this site.

To enable those navigations, we must add some configurations to the site. Head to [configuration guide](./configuration) to learn how to configure VitePress.

If you would like to know more about what you can do within the page, for example, writing markdown contents, or using Vue Component, check out the "Writing" section of the docs. [Markdown guide](./markdown) would be a greate starting point.

If you want to know how to customize how the site looks (Theme), and find out the features VitePress's default theme provides, visit [Theme: Introduction](./theme-introduction).

When your documentation site starts to take shape, be sure to read the [deployment guide](./deploying).
