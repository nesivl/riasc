"use strict";(self.webpackChunkriasc=self.webpackChunkriasc||[]).push([[7710],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,h=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"config",title:"Configuration File",sidebar_label:"Configuration",sidebar_positon:1,slug:"/setup/config"},l=void 0,c={unversionedId:"setup/agent/config",id:"setup/agent/config",title:"Configuration File",description:"Each RIasC agent node can be configured by a YAML configuration file.",source:"@site/docs/setup/agent/config.md",sourceDirName:"setup/agent",slug:"/setup/config",permalink:"/docs/setup/config",editUrl:"https://github.com/ERIGrid2/riasc/edit/master/docs/setup/agent/config.md",tags:[],version:"current",frontMatter:{id:"config",title:"Configuration File",sidebar_label:"Configuration",sidebar_positon:1,slug:"/setup/config"},sidebar:"docs",previous:{title:"Cloud-init",permalink:"/docs/setup/agent/cloud-init"},next:{title:"Manually via Script",permalink:"/docs/setup/agent/manual"}},p={},u=[{value:"Location",id:"location",level:2},{value:"Example",id:"example",level:2}],f={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Each RIasC agent node can be configured by a ",(0,o.kt)("a",{parentName:"p",href:"https://yaml.org/"},"YAML")," configuration file.\nThis configuration file is used by the agent node to register itself in the RIasC cloud."),(0,o.kt)("h2",{id:"location"},"Location"),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent/rpi"},"Raspberry Pi-based installations")," the configuration file must be placed at ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot/riasc.yaml")," or the ",(0,o.kt)("inlineCode",{parentName:"p"},"boot")," drive when the SD card is mounted in Windows."),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent/manual"},"manual installations")," via the script expect the configuration file named ",(0,o.kt)("inlineCode",{parentName:"p"},"riasc.yaml")," in the current working directory."),(0,o.kt)("p",null,"For ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/agent/cloud-init"},"cloud-init installations")," the contents of configuration file must be provided as ",(0,o.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/topics/instancedata.html"},"instance metadata"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The latest example configuration can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ERIGrid2/riasc-provisioning/blob/master/riasc.yaml"},"in the provisioning repo"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"---\n# RIasC configuration file\n# See also: https://erigrid2.github.io/riasc/docs/setup/config\n\n# A unique hostname to identify the node\nhostname: riasc-agent # changeme!\n\nansible:\n  # List of PGP keys which are used to verify the commits in the Ansible repo\n  keys:\n  - 09BE3BAE8D55D4CD8579285A9675EAC34897E6E2 # Steffen Vogel (RWTH)\n\n  keyserver: keys.openpgp.org\n\n  # A repository containing ansible playbooks which will be fetched via ansible-pull\n  url: https://github.com/erigrid2/riasc-ansible.git\n\n  verify_commit: true\n\n  # The playbook which should be provision the node\n  playbook: site.yml\n\n  # A path to the Ansible inventory within the repo from above\n  inventory: inventory/erigrid/hosts.yml\n\n  # extra_args:\n  # - --only-if-changed\n\n  # Additional variables which are passed to the Ansible playbook for provisioning\n  variables:\n    # A list of SSH keys which will be added to the 'pi' user\n    additional_ssh_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC9kuBu/eYcN1hNNIWEVfswO/rOoE1JVQPK+92Y6r856xrdaCpGOtHv5MBmO70fmGEFZ86e2QC0Ij5zqlwqTTNwWAHxT6H9d3CytThx54UronOCeQxQBYcJpLDSdY5MuseZjm0RlW+7aSNvnUttDByGBoCl+VWaaNF+dN2MWzrGIw0rvKJ24OVhPmm91VwOIoCJkKJ9AL1OEIpCH7n7jcaJYVBP2j+RVYfq47W4e9SfE/QlL+QVk360w+kFSeTybaMnsWALZNwk/kywzPq1dpw+4ToD6qBF6leY7ivD/ZsFppbndyzjW93PO3IWlTXmFd/UK/3xzihuZE9KWl0D1O5hny3o0DXkWK96xSFA4hhMqkVw0bNS9+jVq3fuaGNAtOUEg0rfCPPf0fwnPYq9pOyDUViGHDhMY/yWBSqlN+L3Rt9b8hwh0bhsAQiWF5ujIo3mivFD6BQQAyK52Qz778VRPK39k0gpYxqltcJEfjJ832arvNO9XseUKUQAi50gVyXfxD3yQK++0U1E9isF+VyLd1m5MgrtPlP20Ab2PJD6UUaMpr1rEldP9jVsGpVowntC/Hp4/ljCeppize4CRgZjWDHE+Yj+TWmVeuUTObniVWpE/eiQoDIe+FBWPeStq3UMPW5viUafzf2sCUxMyc/ZTUqy8wzDZEyfJ7OGaoxPrQ== svogel2@eonerc.rwth-aachen.de\n\n    # Set this to true if you want to login via SSH keys only.\n    # If you dont have an SSH key, set this to false.\n    # Important: Dont forget to change the default password after your first login!\n    disable_password_login: false\n\n    # The URL of a K3S master provided by your RIasC provider\n    server: https://k3s.riasc.eu/\n\n    # Replace this token with the token provided by your RIasC provider\n    token: XXXXX # changeme!\n")))}d.isMDXComponent=!0}}]);