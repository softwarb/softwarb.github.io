const t=window.App.h;class e{render(){return t("svg",{class:`icon icon-${this.name}`,width:"96",height:"23"},t("use",{xlinkHref:`#icon-${this.name}`}))}static get is(){return"app-icon"}static get properties(){return{name:{type:String,attr:"name"}}}static get style(){return"app-icon .icon-logo{width:96px;height:23px}app-icon .icon-checkmark{fill:var(--color-dodger-blue);width:15px;height:11px}app-icon .icon-targetblank{fill:var(--color-cadet-blue);width:9px;height:9px}app-icon .icon-slack,app-icon .icon-twitter{fill:var(--color-woodsmoke);width:16px;height:16px}app-icon .icon-menu{fill:var(--color-dodger-blue);width:17px;height:15px}app-icon .icon-close{fill:var(--color-dodger-blue);width:14px;height:14px}app-icon .icon-more{fill:var(--color-dodger-blue);width:4px;height:18px}app-icon .icon-docs{fill:var(--color-dodger-blue);width:13px;height:11px}app-icon .icon-github{fill:var(--color-dodger-blue);width:16px;height:16px}app-icon .icon-circle,app-icon .icon-link{fill:var(--color-woodsmoke);height:12px;width:12px}"}}export{e as AppIcon};