# DNS

To manage your DNS zones and records, you will need to navigate to the **DNS <i class="fas fa-fw fa-atlas"></i>** tab.

## Adding a DNS zone

1. Click the **<i class="fas fa-fw fa-plus-circle"></i> Add DNS Zone** button.
2. Enter the domain name in the **Domain** field.
   - Choose the appropriate template for the zone.
   - If the domain requires different name servers, change them in the **Advanced Options** section.
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

## Editing a DNS zone

1. Click on the  **<i class="fas fa-pencil-alt"></i>** when you hover the domain
2. Make the required changes
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

### IP Adress 
Ip address that should be used for the root domain.

### Template

Select the template you want to use:
- Default Standard DNS template suitable for the most situations
- Default-nomail Standard DNS template suitable for the most situations when you don't want to host mail
- Gmail: When your email provider is Google for Buisness. 
- Office365: When your email provider is Office365
- Zoho: When you use Zoho as mail provider 
- Child-ns: When you are going to use the domain as a Nameserver

### Experation date

This date is not used by Hestia but can beused as a reminder...

### Soa 
A start of authority (SOA) record includes administrative information about your zone, as defined by the domain name system (DNS). 

### TTL
Adjust the default Time to live. Shorter means faster changes but more request to the server. If you are going to change the ip it might be helpfull the decrease it to 300 seconds (5min)

### DNSSEC
Enable DNSSEC to improve security. How ever this setting requires some changes to the register before it is active. For more information see [Dns cluster](../server-administration/dns-cluster.md)

## View DNSSEK public keys

Click on the **<i class="fas fa-key"></i>** icon when you hover the domain. 

## Suspending a DNS zone

Check on the **<i class="fas fa-pause"></i>** icon to suspend it. To unsuspend it click on the **<i class="fas fa-play"></i>** icon

## Deleting a DNS zone

To delete DNS zone click on the **<i class="fas fa-trash"></i>** icon

## Adding a DNS record to a zone

1. Click the **<i class="fas fa-fw fa-plus-circle"></i> Add Record** button.
2. Enter the record name
3. Enter the Type 
4. Enter the value
5. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

## Editing a DNS record

1. Click the record or when you hover on the  **<i class="fas fa-pencil-alt"></i>** when you hover the record
2. Make the required changes
3. Click the **<i class="fas fa-fw fa-save"></i> Save** button in the top right.

### Record
The record. `record`.domain.com
If you want to the root of the domain for example create use @

### Type

Following types are supported

- A
- AAAA 
- CAA
- CNAME
- DNSKEY
- IPSECKEY
- KEY
- MX
- NS
- PTR
- SPF
- SRV
- TLSA
- TXT

### Ip or value

Ip or value of the record you want to use

### Priority

Priority of the mail server only used for MX records

### TTL

Adjust the default Time to live. Shorter means faster changes but more request to the server. If you are going to change the ip it might be helpfull the decrease it to 300 seconds (5min)

## Suspending a DNS record

Check on the **<i class="fas fa-pause"></i>** icon to suspend it. To unsuspend it click on the **<i class="fas fa-play"></i>** icon

## Deleting a DNS record

To delete DNS zone click on the **<i class="fas fa-trash"></i>** icon
