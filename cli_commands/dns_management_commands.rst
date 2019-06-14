####################################
DNS subsystem management commands
####################################

****************************************
v-add-dns-domain
****************************************

**Parameters**: User Domain Ip [NS1] [NS2] [NS3] [..] [NS8] [RESTART]

**Example usage**: `v-add-dns-domain admin example.com ns1.example.com ns2.example.com yes`

****************************************
v-add-dns-on-web-alias
****************************************

**Parameters**: User Alias Ip [RESTART]

**Example usage**: `v-add-dns-on-web-alias admin www.example.com 8.8.8.8`

****************************************
v-add-dns-record
****************************************

**Parameters**: User Domain Record Type Value [PRIORITY] [ID] [RESTART]

**Example usage**: `v-add-dns-record admin acme.com www A 162.227.73.112`

****************************************
v-add-remote-dns-domain
****************************************

**Parameters**: User Domain [FLUSH]

**Example usage**: `v-add-remote-dns-domain admin mydomain.tld yes`

****************************************
v-add-remote-dns-host
****************************************

**Parameters**: Host Port User Password [TYPE] [DNS_USER]

**Example usage**: `v-add-remote-dns-host slave.your_host.com 8083 admin your_passw0rd`

****************************************
v-add-remote-dns-record
****************************************

**Parameters**: User Domain Id

**Example usage**: `v-add-remote-dns-record admin example.com 42`

****************************************
v-add-remote-dns-domain
****************************************

**Parameters**: User Domain [FLUSH]

**Example usage**: `v-add-remote-dns-domain admin mydomain.tld yes`


****************************************
v-add-remote-dns-record
****************************************

**Parameters**: User Domain Id

**Example usage**: `v-add-remote-dns-record bob acme.com 23`

****************************************
v-change-dns-domain-exp
****************************************

**Parameters**: User Domain Exp

**Example usage**: `v-change-dns-domain-exp admin domain.pp.ua 2020-11-20`

****************************************
v-change-dns-domain-ip
****************************************

**Parameters**: User Domain Ip

**Example usage**: `v-change-dns-domain-ip  admin domain.com 123.212.111.222`

****************************************
v-change-dns-domain-soa
****************************************

**Parameters**: User Domain Soa

**Example usage**: `v-change-dns-domain-soa admin acme.com d.ns.domain.tld`

****************************************
v-change-dns-domain-tpl
****************************************

**Parameters**: User Domain Template [RESTART]

**Example usage**: `v-change-dns-domain-tpl admin example.com child-ns yes`

****************************************
v-change-dns-domain-ttl
****************************************

**Parameters**: User Domain Ttl

**Example usage**: `v-change-dns-domain-ttl alice example.com 14400`

****************************************
v-change-dns-record
****************************************

**Parameters**: User Domain Id Value [PRIORITY] [RESTART]

**Example usage**: `v-change-dns-record admin domain.ua 42 192.18.22.43`

****************************************
v-change-dns-record-id
****************************************

**Parameters**: User Domain Id Newid [RESTART]

**Example usage**: `v-change-dns-record-id admin acme.com 24 42 yes`

****************************************
v-change-remote-dns-domain-exp
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-change-remote-dns-domain-soa
****************************************

**Parameters**: User Domain

**Example usage**: `v-change-remote-dns-domain-soa admin example.org.uk`

****************************************
v-change-remote-dns-domain-ttl
****************************************

**Parameters**: User Domain

**Example usage**: `v-change-remote-dns-domain-ttl admin domain.tld`

****************************************
v-delete-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-dns-domain alice acme.com`

****************************************
v-delete-dns-domains
****************************************

**Parameters**: User

**Example usage**: `v-delete-dns-domains bob`


****************************************
v-delete-dns-domains-src
****************************************


**Parameters**: User Src [RESTART]

**Example usage**: `v-delete-dns-domain-src admin '' yes`


****************************************
v-delete-dns-on-web-alias
****************************************

**Parameters**: User Domain Alias

**Example usage**: `v-delete-dns-on-web-alias admin example.com www.example.com`


****************************************
v-delete-dns-record
****************************************


**Parameters**: User Domain Id [RESTART]


**Example usage**: `v-delete-dns-record bob acme.com 42 yes`

****************************************
v-delete-remote-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-delete-remote-dns-domain admin example.tld`

****************************************
v-delete-remote-dns-domains
****************************************

**Parameters**: None

**Example usage**: `v-delete-remote-dns-domains`


****************************************
v-delete-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**: `v-delete-remote-dns-host example.org`

****************************************
v-delete-remote-dns-record
****************************************

**Parameters**: User Domain Id


**Example usage**: `v-delete-remote-dns-record user07 acme.com 44`

****************************************
v-get-dns-domain-value
****************************************

**Parameters**: User Domain Key

**Example usage**: `v-get-dns-domain-value admin example.com SOA`

****************************************
v-list-dns-domains
****************************************

**Parameters**: User [FORMAT]

**Example usage**: `v-list-dns-domains admin`


****************************************
v-list-dns-records
****************************************

**Parameters**: User Domain [FORMAT]


**Example usage**: `v-list-dns-records admin example.com`


****************************************
v-list-dns-template
****************************************

**Parameters**: Template [FORMAT]

**Example usage**: `v-list-dns-template zoho`

****************************************
v-list-dns-templates
****************************************

**Parameters**: None

**Example usage**: `v-list-dns-templates`

****************************************
v-restart-dns
****************************************

**Parameters**: None

**Example usage**: `v-restart-dns`

****************************************
v-rebuild-dns-domain
****************************************

**Parameters**: User Domain [RESTART] [UPDATE_SERIAL]

**Example usage**: `v-rebuild-dns-domain alice wonderland.com`

****************************************
v-rebuild-dns-domains
****************************************


**Parameters**: User [RESTART] [UPDATE_SERIAL]

**Example usage**: `v-rebuild-dns-domains alice`

****************************************
v-suspend-dns-domain
****************************************

**Parameters**: User Domain [RESTART]

**Example usage**: `v-suspend-dns-domain alice acme.com`

****************************************
v-suspend-dns-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**: `v-suspend-dns-domain admin yes`


****************************************
v-suspend-dns-record
****************************************

**Parameters**: User Domain Id [RESTART]


**Example usage** `v-suspend-dns-record alice wonderland.com 42 yes`


****************************************
v-suspend-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**: `v-suspend-remote-dns-host hostname.tld`

****************************************
v-sync-dns-cluster
****************************************

**Parameters**:None

**Example usage**: `v-sync-dns-cluster`



****************************************
v-unsuspend-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**: `v-unsuspend-dns-domain alice wonderland.com`

****************************************
v-unsuspend-dns-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**: `v-unsuspend-dns-domains alice`

****************************************
v-unsuspend-dns-record
****************************************

**Parameters**: User Domain Id [RESTART]

**Example usage**: `v-unsuspend-dns-record admin example.com 33`

****************************************
v-unsuspend-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**: `v-unsuspend-remote-dns-host hosname.com`

****************************************
v-update-dns-templates
****************************************

**Parameters**:None

**Example usage**: `v-update-dns-templates`

****************************************
v-list-dns-domain
****************************************

**Parameters**: User Domain [FORMAT]

**Example usage**: `v-list-dns-domain alice wonderland.com`
