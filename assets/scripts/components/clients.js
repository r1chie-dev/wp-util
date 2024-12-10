class Clients {

  util = new GlobalUtil();

  buildHtml() {
    let selectHtml = "";
        
    $.each( this.util.getClients(), ( clientType, clients ) => {
        selectHtml += "<optgroup label='" + clientType + "'>";

        $.each( clients, ( index, client ) => {
            selectHtml += "<option value='" + client.value + "'>" +  client.name + "</option>";
        } );

        selectHtml += "</optgroup>";
    } );

    return selectHtml;
  }

}