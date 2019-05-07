####################################
DNS subsystem management commands
####################################

****************************************
v-add-dns-domain
****************************************

**Parameters**: User Domain Ip [NS1] [NS2] [NS3] [..] [NS8] [RESTART]

**Example usage**:

****************************************
v-add-dns-on-web-alias
****************************************

**Parameters**: User Alias Ip [RESTART]

**Example usage**:

****************************************
v-add-dns-record
****************************************

**Parameters**: User Domain Record Type Value [PRIORITY] [ID] [RESTART]

**Example usage**:

**Parameters**: User Domain [DKIM_SIZE]

****************************************
v-add-remote-dns-domain
****************************************

**Parameters**: User Domain [FLUSH]

**Example usage**:

****************************************
v-add-remote-dns-host
****************************************

**Parameters**: Host Port User Password [TYPE] [DNS_USER]

**Example usage**:

****************************************
v-add-remote-dns-record
****************************************

**Parameters**: User Domain Id

**Example usage**:

****************************************
v-add-remote-dns-domain
****************************************

**Parameters**: User Domain [FLUSH]

**Example usage**:

****************************************
v-add-remote-dns-host
****************************************

**Parameters**: Host Port User Password [TYPE] [DNS_USER]

**Example usage**:

****************************************
v-add-remote-dns-record
****************************************

**Parameters**: User Domain Id

**Example usage**:

****************************************
v-change-dns-domain-exp
****************************************

**Parameters**: User Domain Exp

**Example usage**:

****************************************
v-change-dns-domain-ip
****************************************

**Parameters**: User Domain Ip

**Example usage**:

****************************************
v-change-dns-domain-soa
****************************************

**Parameters**: User Domain Soa

**Example usage**:

****************************************
v-change-dns-domain-tpl
****************************************

**Parameters**: User Domain Template [RESTART]

**Example usage**:

****************************************
v-change-dns-domain-ttl
****************************************

**Parameters**: User Domain Ttl

**Example usage**:

****************************************
v-change-dns-record
****************************************

**Parameters**: User Domain Id Value [PRIORITY] [RESTART]

**Example usage**:

****************************************
v-change-dns-record-id
****************************************

**Parameters**: User Domain Id Newid [RESTART]

**Example usage**:

****************************************
v-change-remote-dns-domain-exp
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-change-remote-dns-domain-soa
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-change-remote-dns-domain-ttl
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-delete-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-delete-dns-domains
****************************************

**Parameters**: User

**Example usage**:


****************************************
v-delete-dns-domains-src
****************************************


**Parameters**: User Src [RESTART]

**Example usage**:


****************************************
v-delete-dns-on-web-alias
****************************************

**Parameters**: User Domain Alias

**Example usage**:


****************************************
v-delete-dns-record
****************************************


**Parameters**: User Domain Id [RESTART]


**Example usage**:

****************************************
v-delete-remote-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-delete-remote-dns-domains
****************************************

**Example usage**:


****************************************
v-delete-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**:

****************************************
v-delete-remote-dns-record
****************************************

**Parameters**: User Domain Id


**Example usage**:

****************************************
v-get-dns-domain-value
****************************************

**Parameters**: User Domain Key

**Example usage**:

****************************************
v-list-dns-domains
****************************************

**Parameters**: User [FORMAT]

**Example usage**:


****************************************
v-list-dns-records
****************************************

**Example usage**:

**Parameters**: User Domain [FORMAT]

****************************************
v-list-dns-template
****************************************

**Parameters**: Template [FORMAT]

**Example usage**:

****************************************
v-list-dns-templates
****************************************

**Example usage**:

****************************************
v-restart-dns
****************************************

**Example usage**:

**Parameters**: None

****************************************
v-rebuild-dns-domain
****************************************

**Parameters**: User Domain [RESTART] [UPDATE_SERIAL]

**Example usage**:

****************************************
v-rebuild-dns-domains
****************************************


**Parameters**: User [RESTART] [UPDATE_SERIAL]

**Example usage**:

****************************************
v-suspend-dns-domain
****************************************

**Parameters**: User Domain [RESTART]

**Example usage**:

****************************************
v-suspend-dns-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**:


****************************************
v-suspend-dns-record
****************************************

****************************************
v-suspend-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**:

****************************************
v-sync-dns-cluster
****************************************

**Example usage**:

**Parameters**:None

****************************************
v-unsuspend-dns-domain
****************************************

**Parameters**: User Domain

**Example usage**:

****************************************
v-unsuspend-dns-domains
****************************************

**Parameters**: User [RESTART]

**Example usage**:

****************************************
v-unsuspend-dns-record
****************************************

**Parameters**: User Domain Id [RESTART]

**Example usage**:

****************************************
v-unsuspend-remote-dns-host
****************************************

**Parameters**: Host

**Example usage**:

****************************************
v-update-dns-templates
****************************************

**Parameters**:None

**Example usage**:
