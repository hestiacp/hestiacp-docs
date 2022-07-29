---
outline: "deep"
---

# Contributing to Hestia’s development

[View the current guidelines](https://github.com/hestiacp/hestiacp/blob/main/CONTRIBUTING.md).

::: tip
If you are following any tutorial regarding ARM + Hestia please use the normal install method. Since 1.5.0, we have added ARM packages to our _apt_ server! For current active installs To enable updates please remove the `#` in `/etc/apt/sources.list/hestia` and then run `apt update && apt upgrade`
:::

::: tip
We recommend having an existing previous Hestia installation. This will ensure that everything is already installed correctly.
:::

## Compiling

::: info
For building `hestia-nginx` or `hestia-php`, at least 2 GB of memory is required!
:::

Go into the `src` folder and run one of these commands:

### Compile only

```sh
./hst_autocompile.sh \--hestia \--noinstall \--keepbuild '\~localsrc'

# Hestia + hestia-nginx and hestia-php
./hst_autocompile.sh \--all \--noinstall \--keepbuild '\~localsrc'
```

### Compile and install

```sh
./hst_autocompile.sh \--hestia \--install '\~localsrc'

# Hestia + hestia-nginx and hestia-php
./hst_autocompile.sh \--all \--install '\~localsrc'
```

## Install Hestia from packages

```bash
# Replace with https://github.com/username/hestiacp.git if you want to test a branch that you created yourself
git clone https://github.com/hestiacp/hestiacp.git
cd ./hestiacp/

# Replace main with the branch you want to test
git checkout main

cd ./src/

# Compile packages
./hst_autocompile.sh --all --noinstall --keepbuild '~localsrc'

cd ../install

bash hst-install-{os}.sh --with-debs /tmp/hestiacp-src/deb/
```

Any option can be appended to the installer command. [See the complete list](../introduction/getting-started#list-of-installation-options).

## Update Hestia from GitHub

```bash
v-update-sys-hestia-git [USERNAME] [BRANCH]
```

Sometimes dependencies will get added or removed as the packages are installed with `dpkg` it is not possible to "preload" the dependencies.

In that case you will see an error like:

```bash
dpkg: error processing package hestia (–install):
dependency problems - leaving unconfigured
```

To solve this issue, run:

```bash
apt install -f
```

After that run `v-update-sys-hestia-git [USERNAME] [BRANCH]` again.

## Automated testing

For automated testing, we currently use [Bats](https://github.com/bats-core/bats-core).

### Install

```bash
# Clone Hestia repo with testing submodules
git clone --recurse-submodules https://github.com/hestiacp/hestiacp
# Or, using an existing local repo with an up-to-date main branch
git submodule update --init --recursive

# Install Bats
test/test_helper/bats-core/install.sh /usr/local
```

### Run

::: danger
Do not run any testing script on a live server. It might cause issues or downtime!
:::

```bash
# Run Hestia tests
test/test.bats
```
