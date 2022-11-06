# Account

To access your account settings, click the <i class="fas fa-lg fa-fw fa-user-circle"><span class="visually-hidden">user</span></i> button in the top right.

## Security

### Password

Minimum requirements for a password should contain at least 8 characters of which at 1 is a number, capital and lowercase letter. At least 14 characters are advised.

### Two-factor authentication (2FA)

1. In your account settings, check the box labeled **Enable two-factor authentication**.
2. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.
3. Scan the QR code using an authentication app.
4. Save your **Account Recovery Code** somewhere safe, in case you lose access to your authenticator.

::: details Need a 2FA app?
If you do not have an authenticator app, here are a couple of recommendations.

- iCloud Keychain – [Windows](https://9to5mac.com/2022/07/25/icloud-passwords-windows-2fa-code/), [macOS](https://9to5mac.com/2021/11/16/use-safari-password-manager-and-2fa-autofill/), [iOS](https://9to5mac.com/2022/03/07/use-ios-15-2fa-code-generator-plus-autofill-iphone/)
- [Tofu Authenticator](https://www.tofuauth.com/) – Open-source, iOS only
- [Aegis Authenticator](https://getaegis.app/) – Open-source, Android only
- [Raivo OTP](https://github.com/raivo-otp/) – Open-source, iOS and macOS only
- [Google Authenticator](https://googleauthenticator.net/)
- [Microsoft Authenticator](https://www.microsoft.com/en-ca/security/mobile-authenticator-app)
- [Authy](https://authy.com/) – Free, has a cloud sync feature
- [1Password](https://1password.com/) – Paid password manager
- [Bitwarden](https://bitwarden.com/) – Password manager. 2FA in premium plan only

:::

### Login restrictions

With Hestia we have added the following options to secure you account

1. Disable login into the account
2. White list your ip adress to login into your account

### Security logs

Click on the ** <i class="fas fa-history"></i> Logs ** to see the security logs.

### Login history

On the security log page click on on **<i class="fas fa-binoculars"></i>Login history ** to see the login history.

## SSH keys

Click ** <i class="fas fa-key status-icon orange"></i>Manage SSH keys ** button to see the availble keys. 

To add one click on the ** <i class="fas fa-plus-circle"></i>Add SSH key ** Then copy your public key in the text area and click on the save button. 

- For windows: [Putty](https://www.ssh.com/academy/ssh/putty/windows/puttygen#running-puttygen)
- For OSX / Linux use `ssh-keygen`

## API Access keys

:::tip
  This option is disabled by default for standaard users. An administrator needs to enable it in the server settings.
:::

Click on the ** <i class="fas fa-key status-icon purple"></i>Access Keys ** to open the access keys. Access keys are used for the api to autenticate instead to use the username and password. 

To create a new Access key click on the ** <i class="fas fa-fw fa-plus-circle"></i> Add Access key **

Then click on permission sets you want to enable and click on the save button. Copy both access key and secret key as they can't be viewed any more afther clossing the page.

Use the **<i class="fas fa-trash"></i>** icon to delete the Access key.
 
