# Mail Domains

To manage your mail domains, you will need to navigate to the **Mail <i class="fas fa-fw fa-mail-bulk"></i>** tab.

## Adding a mail domain

Click on the **<i class="fas fa-fw fa-plus-circle"></i> Add Mail domain ** Button

1. Enter your domain name
2. Select the options you want to use.
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

## Editing a mail domain

1. Hover the domain  and click on the **<i class="fas fa-pencil-alt"></i>** icon to go to ** Edit mail domain **

The following options are availble

### Webmail client

Currently we have support for Roundcube, Roundcube (Optional install) or "Disabled"

### Catch All Email

Add an email address to send all email from this domain to this email adress.

### Rate limit 

:::tip 
  This option is only availble for the admin user
:::

Set the rate limit for the amount an email account can send / hour time. 

### Spam filter

:::tip 
  This option is not always availble
:::

Enable Spamassign for this domain 

### Antivirus

:::tip 
  This option is not always availble
:::

Enable ClamAV for this domain

### DKIM

Enable DKIM for this domain

### SSL

1. Check the checkbox infront of "Enable SSL for this domain"
2. Enable "Use Lets Encrypt to obtain SSL certificate" to enable Lets encrypt and save
3. Depending on your requirements you can enable "Enable automatic HTTPS redirection" or "Enable HTTP Strict Transport Security (HSTS)"

If you want to use your own SSL certificate you can enter the ssl certificate in the text area below.

Issues with enabling Lets encrypt? Please check [ssl certicates](../server-administration/ssl-certificates.md)

### SMTP relay

Check the checkbox in front of the "SMTP Relay" and a form will showup. Enter the requested data from an smtp relay provider. This option allows the user to use an different smtp relay than currently is defined at global level or even the default exim route.

### Get DNS records

When you don't host DNS on the same server but use a 3rd party provider but still want to use email service from Hestia click on the ** <i class="fas fa-atlas"></i> ** icon to see the DNS records you need to add to Cloudflare

### Webmail

Webmail is by default avaible on `https://webmail.domain.com` or `https://mail.domain.com` when ssl is enabled (Otherwise use http instead)

## Suspending a web domain

Check on the **<i class="fas fa-pause"></i>** icon to suspend it. To unsuspend it click on the **<i class="fas fa-play"></i>** icon

## Deleting a web domain

To delete a mail domain click on the **<i class="fas fa-trash"></i>** icon

Both the mail domain and the linked mail accounts will get deleted!

## Adding a mail account to a domain

1. Click on the domainname to go to the "List mail accounts" and then click **<i class="fas fa-fw fa-plus-circle"></i> Add Mail account ** Button
2. Enter the required account name with out the `@domain.com` part (Only localpart)
3. Password 
4. And when required supply an email adress where you want to send the login data to. (Optional)

If required you can also modify the advanced settings but they are explained below.

On the right side you can see the methods to access your mail account via smpt / imap and pop3

## Editing a mail account

1. Click on the mail account or **<i class="fas fa-pencil-alt"></i>** icon
2. Make the required changes and click on the save button

### Quota

Max size the account can become in megabyte

### Aliases

Add an alias to redirect mail to the main account use the localpart only for example `alice`

### Discard all mail

All email send to this email adress will not get forwarded but always deleted!

### Do not store forwarded mail

If this option is selected all forwared mail will get deleted. ()

### Auto-Reply

Setup an autoreply 

### Foward mail

Forward all incomming mail to the new selected email adress. 

:::warning
  A lot of spam filters may flag this email as spam by default!
:::

### Rate limit

Set the rate limit for the amount an email account can send / hour time.

## Suspending a mail account

Check on the **<i class="fas fa-pause"></i>** icon to suspend it. To unsuspend it click on the **<i class="fas fa-play"></i>** icon

## Deleting a mail account

To delete a mail account click on the **<i class="fas fa-trash"></i>** icon when you hove the domain name.
