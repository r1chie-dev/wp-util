class Global {

    util    = new GlobalUtil();
    pages   = new Pages();
    clients = new Clients();

    constructor() {
        $(document).ready( () => {
            this.toggleDarkMode();

            this.buildClientsComponent();
            this.buildPagesComponent();

            this.openPageEvent();
        });
    }

    toggleDarkMode() {
        $( global.util.bulbModeIcon ).on( global.util.clickEvent, ( event ) => {
            if ( $( event.currentTarget ).hasClass( global.util.lightOnClass ) ) {
                $( event.currentTarget ).removeClass( global.util.lightOnClass );
                $( global.util.htmlElement + ", " +  global.util.bodyElement ).removeClass( global.util.darkModeClass );
            } else {
                $( event.currentTarget ).addClass( global.util.lightOnClass );
                $( global.util.htmlElement + ", " +  global.util.bodyElement ).addClass( global.util.darkModeClass );
            }
        });
    }

    buildClientsComponent() {
        const clients = new Clients();

        $( global.util.clientsSelect ).append( clients.buildHtml() );
    }

    buildPagesComponent() {
        $( global.util.pagesSelect )
            .append( global.pages.buildHtml() )
            .on( global.util.changeEvent, ( event ) => {
                global.pages.pageChange( $( event.currentTarget ).val() );
            } );
    }

    openPageEvent() {
        global.pages.openPage();
    }
}

const global = new Global();