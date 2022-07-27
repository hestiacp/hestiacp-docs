# Users

## Why should I never host a website under admin account

By default the admin user has elevated permissions. If you run for
example Wordpress under your admin account. And a vulnerability is found
in Wordpress or a plugin. Users might be able to run a limited number of
commands as root.

To stop this "issue" do not run websites / mail domains under the
admin user!

## Reset password via command line

To change the password of any user via ssh run as root

```bash
# Reset user password
v-change-user-password "username" "password"
```

## Reset password via command line

To change the password of any user via ssh run as root

```bash
# Reset user password
v-change-user-password "username" "password"
```

## How can I disable "Use IP address allow list for login attempts" via Command line

With the introduction 1.4 we have added certain security features
including the possibility to limit login from a certain ip address. When
the ip address changes you will not able to login any more. To disable
this feature via command line:

```bash
# Set value LOGIN_USE_IPLIST to "no"
v-change-user-config-value admin LOGIN_USE_IPLIST 'no'
# Remove listed ip addresses
v-change-user-config-value admin LOGIN_ALLOW_IPS ''
```

Now login as you are used to be.
