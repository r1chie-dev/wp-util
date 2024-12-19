class Clients {

  util = new GlobalUtil();

  //#region html
  buildTypesHtml() {        
    $.each( this.util.getClientsType(), ( index, type ) => {
        $( this.util.clientsTypeSelect ).append("<option value='" + type.value + "'>" +  type.name + "</option>");
    } );
  }

  buildHtml( type ) {
    const clientsSelect = $( this.util.clientsSelect );

    clientsSelect.empty();

    $.each( this.getClientObject( type ), ( index, client ) => {
      clientsSelect.append( "<option value='" + client.value + "' data-redirect='" + client.redirect + "'>" +  client.name + "</option>" );
    } );
  }
  //#endregion

  //#region events
  typeChange() {
    $( this.util.clientsTypeSelect ).on( this.util.changeEvent, ( event ) => {
        this.buildHtml( $(event.currentTarget).val() );
    } );
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