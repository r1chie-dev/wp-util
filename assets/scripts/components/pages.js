class Pages {
    
  util = new GlobalUtil();

  //#region html
  buildTypesHtml() {        
    $.each( this.util.getPagesType(), ( index, type ) => {
        $( this.util.pagesTypeSelect ).append("<option value='" + type.value + "'>" +  type.name + "</option>");
    } );
  }

  buildHtml( type ) {
    const pagesSelect = $( this.util.pagesSelect );

    pagesSelect.empty();

    $.each( this.getPageObject( type ), ( index, page ) => {
      pagesSelect.append( "<option value='" + page.value + "' data-redirect='" + page.redirect + "'>" +  page.name + "</option>" );
    } );
  }
  //#endregion

  //#region events
  typeChange() {
    $( this.util.pagesTypeSelect ).on( this.util.changeEvent, ( event ) => {
        // append pages options
        this.buildHtml( $(event.currentTarget).val() );

        // add event change
        $( this.util.pagesSelect ).on( this.util.changeEvent, ( event ) => {
          this.pageChange( $( event.currentTarget ).val() );
        } );
    } );
  }

  pageChange( value ) {
    if ( $.inArray( value, this.util.optionForIdSearch ) !== -1  ) {
      $( this.util.idSearchWrap ).removeClass( this.util.hiddenClass );
    } else {
        $( this.util.idSearchWrap ).val("").addClass( this.util.hiddenClass );
    }
  }
  //#endregion
  
  //#region util
  getPageObject( type ) {
    let pages;
    let allPages = this.util.getPages();

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