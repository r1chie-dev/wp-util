class Cookies {
    util = new GlobalUtil();

    //#region init
    initCookies() {
        if ( localStorage.getItem( this.util.cookieUserConfig ) === null ) {
            this.setCookie( this.util.getCookieDefault() );
        }
    }
    //#endregion

    //#region gets
    getCookie() {
        return JSON.parse( localStorage.getItem( this.util.cookieUserConfig ) ) || this.util.getCookieDefault();
    }

    getCookiePropertie( propertie ) {
        let currentCookie = this.getCookie();

        return currentCookie[propertie];
    }
    //#endregion

    //#region sets
    setCookie( object ) {
        localStorage.setItem( this.util.cookieUserConfig, JSON.stringify( object ) );
    }

    setCookiePropertie( propertie, value ) {
        let currentCookie = this.getCookie();

        currentCookie[propertie] = value;
        
        this.setCookie( currentCookie );
    }
    //#endregion
}