# Web Domains

To manage your web domains, you will need to navigate to the **Web <i class="fas fa-fw fa-globe-americas"></i>** tab.

## Adding a web domain

1. Click the **<i class="fas fa-fw fa-plus-circle"></i> Add Web Domain** button.
2. Enter the domain name in the **Domain** field.
   - If you wish to manage this domain’s DNS in Hestia, check the box labeled **Create DNS zone**
   - If you wish to enable mail for this domain, check the box labeled **Enable mail for this domain**.
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

## Installing an app

1. Click on the domain name or the **<i class="fas fa-pencil-alt"></i>** icon to go to ** Edit webdomain ** 
2. Click on the the ** <i class="fas fa-magic"></i> Quick install App ** Button
3. Select your application you want to install and click on "Setup"
4. Enter the form fields
5. Select if you want to create a database  or use an exsitng database (Not all apps do require this option)
6. Check on the <i class="fas fa-fw fa-save"></i> Button 

Depending on the the application you choose this can take 30 seconds or longer. Do not reload / close the browser!

## Editing a web domain

1. Click on the domain name or the **<i class="fas fa-pencil-alt"></i>** icon to go to ** Edit webdomain ** 
2. Make your changes see below for the options you have
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

### Enabling statistics

1. Click on the select box below "Web statics" and change the option from none to 'awstats'
2. Enter your desired username and password (Not required)

After saving you are able to go to:

`https://domain.com/vstats/` to view the stats.. 

### Managing redirections

1. Check the checkbox infront of "Enable domain redirection"
2. Select the option you want
  - Redirect visitors to www.domain.com 
  - Redirect visitors to domain.com
  - Redirect visitors to a custom domain or web adress 

When using the "Redirect visitors to a custom domain or web adress" you have to option to select the http code (301 by default)
  
:::tip
When your domain is an international domain containing special changes even if you select www.domain.com or domain.com it will convert the doamin to punycode and enable the "redirect visitors to a custom domain or web adress"  option. 
::: 


### Enabling SSL

1. Check the checkbox infront of "Enable SSL for this domain"
2. Enable "Use Lets Encrypt to obtain SSL certificate" to enable Lets encrypt and save
3. Depending on your requirements you can enable "Enable automatic HTTPS redirection" or "Enable HTTP Strict Transport Security (HSTS)"

If you want to use your own SSL certificate you can enter the ssl certificate in the text area below.

Issues with enabling Lets encrypt? Please check [ssl certicates]("/server-administration/ssl-certificates.md")

### Changing PHP version
:::tip
  This option is not always availble it maybe disable in the server settings
:::

1. Change the php version in the select button

### Using a different root directory

1. Check the checkbox infront of "Custom document root" 
2. Select the domain name where you want this domain to point to (Must be owned by the same user)
3. Select the path for example `/src/` will link to `/home/user/web/domain.com/public_html/src/`

### Additional FTP accounts

1. Check the checkbox infront of "Additional FTP account(s)"
2. Enter user name a prefix user_ is always added
3. Select your password or generate one
4. Select the path
5. If wanted you can send a email to the supplied email adress

To add an extra ftp account click on the ** ADD FTP ACCOUNT ** Button

To delete an extra ftp account click the "Delete" link

To change password update the password can click "Save"

### Proxy templates 
Depending on the setup this option is not availble. 

Select the template you want to use for your website

- default: All purpose template suiteable for most cases
- caching: Template with proxy cache enabled suitable for mostly static content for example blogs or news websites
- hosting: Simalar to default

And any custom templates

:::tip
Any custom templates starting with caching-custom-value will allow the use of "Clear proxy cache button". Make sure a .sh file exsits for caching-custom-value with at least the [content](https://github.com/hestiacp/hestiacp/blob/main/install/deb/templates/web/nginx/caching.sh)
::: 

### Web templates
Select the template you want to use for your website

Select the template that help your needs. For server running Apache2 (Proxy templates as selectable) the default template will work fine

For Nginx template pick the template matching the app name you are going to use.

### Managing Nginx caching

When support for nginx caching is enabed (Fast CGI Cache or caching template enabled) it is possible to "purge" the cache via ** <i class="fas fa-trash"></i> Purge Nginx Cache ** button. 

For Nginx (Standalone) it is possible to enable fast cgi cache via the "Enable Fast CGI Cache" option. When enabled an option is show determine how long the cache keep valid.

## Viewing access and error logs

Hover the domain and click on the ** <i class="fas fa-binoculars status-icon purple"></i> ** icon.  At the top of the page you have the possiblity to download the logs or select the error logs.

## Suspending a web domain

Check on the **<i class="fas fa-pause"></i>** icon to suspend it. To unsuspend it click on the **<i class="fas fa-play"></i>** icon

## Deleting a web domain


To delete a web domain click on the **<i class="fas fa-trash"></i>** icon

Both the web domain and the linked ftp accounts will get deleted!
