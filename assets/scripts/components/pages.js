class Pages {
    
  util  = new GlobalUtil();
  alert = new Alert();

  buildHtml() {
    let selectHtml = "";
        
    $.each( this.util.getPages(), ( pageType, pages ) => {
        selectHtml += "<optgroup label='" + pageType + "'>";

        $.each( pages, ( index, page ) => {
            selectHtml += "<option value='" + page.value + "' data-redirect='" + page.redirect + "'>" +  page.name + "</option>";
        } );

        selectHtml += "</optgroup>";
    } );

    return selectHtml;
  }

  pageChange( value ) {
    if ( $.inArray( value, global.util.optionForIdSearch ) !== -1  ) {
      $( global.util.idSearchWrap ).removeClass( global.util.hiddenClass );
    } else {
        $( global.util.idSearchWrap ).val("").addClass( global.util.hiddenClass );
    }
  }

  openPage() {
    $( global.util.buttonElement ).on( global.util.clickEvent, () => {
      const idToSearchElement = $( global.util.idSearchWrap );
      const clientUrl         = $( global.util.clientsSelect ).val();
      let   pageUrl           = $( global.util.pagesSelect ).find( global.util.optionSelected ).data( global.util.redirectData );

      if ( idToSearchElement.is( global.util.visibleSelector ) ) {
          if ( $( global.util.idSearchInput ).val() !== "" ) {
            pageUrl = this.replaceRedirectId( pageUrl, $( global.util.idSearchInput ).val() );
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
    window.open( link, global.util.newTabEvent );
  }
}