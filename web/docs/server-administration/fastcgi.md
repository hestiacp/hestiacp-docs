# Nginx FastCGI Cache

**TODO: Rewrite content**

..note

> FastCGI only applies for Nginx + PHP-FPM servers. If you use Nginx +
> Apache2 + PHP-FPM this will not apply to you!

FastCGI Cache is an option with in Nginx allowing to cache the out put
off FastCGI (in this case php). There will be for a short moment a file
created on your server with the contents of the output. If an other user
requests the same page Nginx will check if the "age" of the cached
file is still valid and if it is true it will send the cached file to to
the user.

FastCGI cache works best for sites get a lot of request and the pages
doesn’t change that often. (For example a news site). For a more
dynamic sites there might be changes required to the configuration or
even disabling is required.

## Why does software package x and y not work with FastCGI cache

As we have over 20 different templates and we don’t use them al we have
decided it to release the future and hope in the future the community
helps improving the templates with a pull request.

If you want to add support to a certain template you need to add the
following lines to the template file(s)

Check the examples below.

## How do I enable FastCGI cache for my custom template

Within the block where you call php / fastcgi pass

```bash
location ~ [^/]\.php(/|$) {
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    try_files $uri =404;
    fastcgi_pass    %backend_lsnr%;
    fastcgi_index   index.php;
    include         /etc/nginx/fastcgi_params;
}
```

And add the following lines under the
`include /etc/nginx/fastcgi_params;`

```bash
include %home%/%user%/conf/web/%domain%/nginx.fastcgi_cache.conf*;

if ($request_uri ~* "/path/with/exceptions/regex/whatever") {
    set $no_cache 1;
}
```

## How can I see if FastCGI Cache is working

```bash
v-add-fastcgi-cache user domain.tld 5m yes yes
```

It will add an X-STATUS header to the return data where it can be a
miss, hit or bypass.

- Hit Requested file came out the cache
- Miss Requested file was missing in the cache or was to old
- Bypass Cache was bypassed (no_cache) variable was set

## How can I clear the cache?

When FastCGI cache is enabled an button is added to "Edit" Web where
you can clear the cache or use the command:

```bash
v-purge-nginx-cache user domain.tld
```

## Why do I don’t have the option to use FastCGI cache

FastCGI cache is an option for Nginx mode only. If you are using Nginx +
Apache2 you can enable proxy caching template and proxy cache will
enable. Functions almost the same. Proxy cache will also work in case
you use a docker image or nodejs.
