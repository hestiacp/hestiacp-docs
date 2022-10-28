# Testing of Beta / Release candidates

::: tip
If there is any beta / release candidates "program" active. We will publish it via our Discord channel or [Forum](https://forum.hestiacp.com)
:::

In the last few releases we have seen a growing number of "issues" with the release of of a minor or major update. To prevent this happening we have decide to setup an beta apt server so we can push more regular updates that are unstable but test at a larger "user" group then only 4 or 5 users

## Activating beta-apt.hestiacp.com on a existing install

::: danger
Beta / Release candidates might still contain bugs and prossible break your server. We can not garentuee it will be fixed directly! Please becarefull with servers in production or containing important data! 
:::

Run the following commands as root
```bash
# Collecting data
ARCH=$(arch)
codename="$(lsb_release -s -c)"
apt="/etc/apt/sources.list.d"

# Add repo to hestia.list
sed -i 's/^/#/' $apt/hestia.list
echo "deb [arch=$ARCH signed-by=/usr/share/keyrings/hestia-beta-keyring.gpg] https://beta-apt.hestiacp.com/ $codename main" >> $apt/hestia.list
curl -s "https://beta-apt.hestiacp.com/pubkey.gpg" | gpg --dearmor | tee /usr/share/keyrings/hestia-beta-keyring.gpg  >/dev/null 2>&1
```

After that run `apt update && apt upgrade`

## Disable beta-apt.hestiacp.com 

Returning to standard repo open  `/etc/apt/sources.list.d/hestia.list` and remove the # infront of the apt.hestiacp.com and add an # infront of beta-apt.hestiacp.com line

After that run `apt update && apt upgrade`

## Encountering bugs

If you encounter a bug please report them via [Github](https://github.com/hestiacp/hestiacp/issues/new/choose) or submit a [Pull request](https://github.com/hestiacp/hestiacp/pulls) or report them on our forum / discord server
