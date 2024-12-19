class Global {

    util    = new GlobalUtil();
    pages   = new Pages();
    clients = new Clients();
    alert   = new Alert();

    constructor() {
        $(document).ready( () => {
            this.initDarkMode();
            this.initClientsType();
            this.initPagesType();

            this.openPageEvent();
        });
    }

    //#region init components
    initDarkMode() {
        $( this.util.bulbModeIcon ).on( this.util.clickEvent, ( event ) => {
            if ( $( event.currentTarget ).hasClass( this.util.lightOnClass ) ) {
                $( event.currentTarget ).removeClass( this.util.lightOnClass );
                $( this.util.htmlElement + ", " +  this.util.bodyElement ).removeClass( this.util.darkModeClass );
            } else {
                $( event.currentTarget ).addClass( this.util.lightOnClass );
                $( this.util.htmlElement + ", " +  this.util.bodyElement ).addClass( this.util.darkModeClass );
            }
        });
    }

    initClientsType() {
        // append options
        this.clients.buildTypesHtml();

        // add event change
        this.clients.typeChange();

        // trigger change
        $( this.util.clientsTypeSelect ).change();
    }

    initPagesType() {
        // append options
        this.pages.buildTypesHtml();

        // add event change
        this.pages.typeChange();

        // trigger change
        $( this.util.pagesTypeSelect ).change();
    }
    //#endregion

    //#region events
    openPageEvent() {
        $( this.util.buttonElement ).on( this.util.clickEvent, () => {
            const idToSearchElement = $( this.util.idSearchWrap );
            const clientUrl         = $( this.util.clientsSelect ).val();
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