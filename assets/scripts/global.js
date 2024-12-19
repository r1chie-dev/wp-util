class Global {

    util    = new GlobalUtil();
    pages   = new Pages();
    clients = new Clients();
    alert   = new Alert();
    cookies = new Cookies();

    constructor() {
        $(document).ready( () => {
            this.initCookies();
            this.initDarkMode();
            this.initClientsType();
            this.initPagesType();
            this.openPageEvent();
        });
    }

    //#region init components
    initCookies() {
        this.cookies.initCookies();
    }

    initDarkMode() {
        if ( this.cookies.getCookiePropertie( this.util.cookieDarkModePropertie ) ) {
            $( this.util.bulbModeIcon ).addClass( this.util.lightOnClass );
            $( this.util.htmlElement + ", " +  this.util.bodyElement ).addClass( this.util.darkModeClass );
            $( this.util.siteRelIcon ).attr( this.util.hrefAttr, this.util.darkIcon );
        } else {
            $( this.util.siteRelIcon ).attr( this.util.hrefAttr, this.util.lighIcon );
        }
        
        $( this.util.bulbModeIcon ).on( this.util.clickEvent, ( event ) => {
            if ( $( event.currentTarget ).hasClass( this.util.lightOnClass ) ) {
                $( event.currentTarget ).removeClass( this.util.lightOnClass );
                $( this.util.htmlElement + ", " +  this.util.bodyElement ).removeClass( this.util.darkModeClass );
                $( this.util.siteRelIcon ).attr( this.util.hrefAttr, this.util.lighIcon );
            } else {
                $( event.currentTarget ).addClass( this.util.lightOnClass );
                $( this.util.htmlElement + ", " +  this.util.bodyElement ).addClass( this.util.darkModeClass );
                $( this.util.siteRelIcon ).attr( this.util.hrefAttr, this.util.darkIcon );
            }

            this.cookies.setCookiePropertie( this.util.cookieDarkModePropertie, $( event.currentTarget ).hasClass( this.util.lightOnClass ) );
        });
    }

    initClientsType() {
        this.clients.buildTypesHtml();

        this.clients.clientTypeChange();

        $( this.util.clientsTypeSelect ).change();
    }

    initPagesType() {
        this.pages.buildTypesHtml();

        this.pages.pageTypeChange();

        $( this.util.pagesTypeSelect ).change();
    }
    //#endregion

    //#region events
    openPageEvent() {
        $( this.util.buttonElement ).on( this.util.clickEvent, () => {
            const idToSearchElement = $( this.util.idSearchWrap );
            const clientUrl         = $( this.util.clientsSelect ).find( this.util.optionSelected ).data( this.util.redirectData );
            let   pageUrl           = $( this.util.pagesSelect ).find( this.util.optionSelected ).data( this.util.redirectData );
      
            if ( idToSearchElement.is( this.util.visibleSelector ) ) {
                if ( $( this.util.idSearchInput ).val() !== "" ) {
                  pageUrl = this.replaceRedirectId( pageUrl, $( this.util.idSearchInput ).val() );
                } else {
                  this.alert.defaultAlert( "noID", "error" );
                  return false;
                }
            }
      
            this.alert.autoClose( "openLink", () => this.openLink( clientUrl + pageUrl ) );
          } );
    }

    replaceRedirectId( url, id ) {
        return url.replace( "{0}", id );
    }

    openLink( link ) {
        window.open( link, this.util.newTabEvent );
    }
    //#endregion
}

const global = new Global();