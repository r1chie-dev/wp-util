class Clients {

  util    = new GlobalUtil();
  cookies = new Cookies();

  //#region html
  buildTypesHtml() {        
    $.each( this.util.getClientsType(), ( index, type ) => {
        const selected = this.cookies.getCookiePropertie( this.util.cookieClientTypePropertie ) === type.value ? this.util.selectedAttribute : '';

        $( this.util.clientsTypeSelect ).append("<option value='" + type.value + "' " + selected + ">" +  type.name + "</option>");
    } );
  }

  buildHtml( type ) {
    const clientsSelect = $( this.util.clientsSelect );

    clientsSelect.empty();

    $.each( this.getClientObject( type ), ( index, client ) => {
      const selected = this.cookies.getCookiePropertie( this.util.cookieClientPropertie ) === client.value ? this.util.selectedAttribute : '';

      clientsSelect.append( "<option value='" + client.value + "' data-redirect='" + client.redirect + "' " + selected + ">" +  client.name + "</option>" );
    } );

    clientsSelect.change();
  }
  //#endregion

  //#region events
  clientTypeChange() {
    $( this.util.clientsTypeSelect ).on( this.util.changeEvent, ( event ) => {
        const clientTypeSelected = $(event.currentTarget).val();

        this.buildHtml( clientTypeSelected );

        this.cookies.setCookiePropertie( this.util.cookieClientTypePropertie, clientTypeSelected );

        // add event change
        $( this.util.clientsSelect ).on( this.util.changeEvent, ( event ) => {
          this.clientChange( $( event.currentTarget ).val() );
        } );
    } );
  }

  clientChange( value ) {
    this.cookies.setCookiePropertie( this.util.cookieClientPropertie, value );
  }
  //#endregion

  //#region util
  getClientObject( type ) {
    let clients;
    let allClients = this.util.getAllClients();

    switch ( type ) {
      case this.util.clientsTypeProd: {
        clients = allClients["Production"];
        break;
      }

      case this.util.clientsTypeStg: {
        clients = allClients["Staging"];
        break;
      }
    }

    return clients;
  }
  //#endregion
}