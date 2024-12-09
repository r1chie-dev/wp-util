class Clients {

  options = {
    Staging: [
      { name: "Demo",                     value: "https://store-demo-staging.sunpics.online/" },
      { name: "Demo Partner 2",           value: "https://store-demo-staging-2.sunpics.online/" },
      { name: "Profox",                   value: "https://staging.profoxprofissional.com.br/" },
      { name: "FotoGM",                   value: "https://store-fotogm-v1-staging.sunpics.online/" },
      { name: "Albume ( Beeriprint )",    value: "https://store-beeriprint-v1-staging.sunpics.online/" }
    ],
    Production: [
      { name: "Demo",                     value: "https://store-demo.sunpics.online/" },
      { name: "My Album ( Beeriprint )",  value: "https://store-beeri-myalbum-v1.sunpics.online/" },
      { name: "Profox",                   value: "https://profoxprofissional.com.br/" },
      { name: "FotoGM",                   value: "https://foto-gm.si/" },
      { name: "Ceu-Azul",                 value: "https://ceu-azul.pt/" },
      { name: "Albume ( Beeriprint )",    value: "https://new-store.albume.co.il/" }
    ]
  }

  buildHtml() {
    let selectHtml = "";
        
    $.each( this.options, ( clientType, clients ) => {
        selectHtml += "<optgroup label='" + clientType + "'>";

        $.each( clients, ( index, client ) => {
            selectHtml += "<option value='" + client.value + "'>" +  client.name + "</option>";
        } );

        selectHtml += "</optgroup>";
    } );

    return selectHtml;
  }

}