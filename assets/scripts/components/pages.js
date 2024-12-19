class Pages {
    
  util    = new GlobalUtil();
  cookies = new Cookies();

  //#region html
  buildTypesHtml() {        
    $.each( this.util.getPagesType(), ( index, type ) => {
      const selected = this.cookies.getCookiePropertie( this.util.cookiePageTypePropertie ) === type.value ? this.util.selectedAttribute : '';

      $( this.util.pagesTypeSelect ).append("<option value='" + type.value + "' " + selected + ">" +  type.name + "</option>");
    } );
  }

  buildHtml( type ) {
    const pagesSelect = $( this.util.pagesSelect );

    pagesSelect.empty();

    $.each( this.getPageObject( type ), ( index, page ) => {
      const selected = this.cookies.getCookiePropertie( this.util.cookiePagePropertie ) === page.value ? this.util.selectedAttribute : '';

      pagesSelect.append( "<option value='" + page.value + "' data-redirect='" + page.redirect + "' " + selected + ">" +  page.name + "</option>" );
    } );
  }
  //#endregion

  //#region events
  pageTypeChange() {
    $( this.util.pagesTypeSelect ).on( this.util.changeEvent, ( event ) => {
      const pageTypeSelected = $(event.currentTarget).val();

      this.buildHtml( pageTypeSelected );

      this.cookies.setCookiePropertie( this.util.cookiePageTypePropertie, pageTypeSelected );

      $( this.util.pagesSelect ).on( this.util.changeEvent, ( event ) => {
        this.pageChange( $( event.currentTarget ).val() );
      } ).change();
    } );
  }

  pageChange( value ) {
    this.cookies.setCookiePropertie( this.util.cookiePagePropertie, value );
    
    this.toggleIdSearchField( value );
  }

  toggleIdSearchField( value ) {
    if ( $.inArray( value, this.util.optionForIdSearch ) !== -1  ) {
      $( this.util.idSearchWrap ).removeClass( this.util.hiddenClass );
      $( this.util.idSearchInput ).val( this.cookies.getCookiePropertie( this.util.cookieIdSearchPropertie ) );
    } else {
      $( this.util.idSearchWrap ).addClass( this.util.hiddenClass );
        $( this.util.idSearchInput ).val("");
        this.cookies.setCookiePropertie( this.util.cookieIdSearchPropertie, "" );
    }

    this.idSearchChange();
  }

  idSearchChange() {
    $( this.util.idSearchInput ).off( this.util.keyupEvent ).on( this.util.keyupEvent, ( event ) => {
      this.cookies.setCookiePropertie( this.util.cookieIdSearchPropertie, $( event.currentTarget ).val() );
    } );
  }
  //#endregion
  
  //#region util
  getPageObject( type ) {
    let pages;
    let allPages = this.util.getAllPages();

    switch ( type ) {
      case this.util.pagesTypeAdmin: {
        pages = allPages["Admin"];
        break;
      }

      case this.util.pagesTypeFrontend: {
        pages = allPages["Frontend"];
        break;
      }

      case this.util.pagesTypeSunpicsAttributes: {
        pages = allPages["Sunpics Attributes"];
        break;
      }

      case this.util.pagesTypeSunpicsConfigurations: {
        pages = allPages["Sunpics Configurations"];
        break;
      }

      case this.util.pagesTypeSunpicsGalleries: {
        pages = allPages["Sunpics Galleries"];
        break;
      }

      case this.util.pagesTypeExtraPages: {
        pages = allPages["Extra Pages"];
        break;
      }
    }

    return pages;
  }
  //#endregion
}