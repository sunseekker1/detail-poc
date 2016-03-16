
var showForm = function (countryID, event) {
    var msg = "";

    hideDatasourceSelector();

    for (var i = 0; i < viewModel.countries.length; i++){
        if (viewModel.countries[i].countryID === countryID){
            viewModel.country = {"countryID": viewModel.countries[i].countryID, "countryName": viewModel.countries[i].countryName, "countryCode": viewModel.countries[i].countryCode};
            break;
        }
    }

    $("#view-template").load("/templates/countryForm.html", function (response, status, xhr) {
        if (status == "error") {
            msg = "Fehler: Die Datei 'countryForm.html' konnte nicht geladen werden.";

            showMessage(msg, "error");
        }
        $.getScript( "/js/countryForm.js").done( function (response, status, xhr) {

            renderForm();

        }).fail(function( jqxhr, settings, exception ) {

            msg = "Fehler: Die Datei 'countryForm.js' konnte nicht geladen werden.";

            showMessage(msg, "error");

        });
    });
};

var showList = function (msg){

    showDatasourceSelector();

    var msg = "";

    $("#view-template").load("/templates/countryList.html", function (response, status, xhr) {
        if (status == "error") {
            msg = "Fehler: Die Datei 'countryList.html' konnte nicht geladen werden.";

            showMessage(msg, "error");
        }
        $.getScript( "/js/countryList.js", function( data, textStatus, jqxhr ) {
            renderList();
        });
    });

    if (typeof msg !== 'undefined' && msg !== null && msg.length){
        showMessage(msg, "info");
    }


};


var showDetail = function (countryID, event){
    var msg = "";

    hideDatasourceSelector();

    for (var i = 0; i < viewModel.countries.length; i++){
        if (viewModel.countries[i].countryID === countryID){
            viewModel.country = {"countryID": viewModel.countries[i].countryID, "countryName": viewModel.countries[i].countryName, "countryCode": viewModel.countries[i].countryCode};
            break;
        }
    }


    $("#view-template").load( "/templates/countryDetail.html", function (response, status, xhr) {
        if (status == "error") {
            msg = "Fehler: Die Datei 'countryDetail.html' konnte nicht geladen werden.";

            showMessage(msg, "error");
        }
        $.getScript( "/js/countryDetail.js", function( data, textStatus, jqxhr ) {
            renderDetail();
        });
    });
};

var showDatasourceSelector = function (){

    $("#view-template-top").load("/templates/datasourceSelector.html", function (response, status, xhr) {
        if (status == "error") {
            msg = "Fehler: Die Datei 'datasourceSelector.html' konnte nicht geladen werden.";

            showMessage(msg, "error");
        }
    });

    if (typeof msg !== 'undefined' && msg !== null && msg.length){
        showMessage(msg, "info");
    }

};

var hideDatasourceSelector = function (){
    $("#view-template-top").empty();
}

var showMessage = function (msg, type){
    var msgTypeClass = "alert-info";

    if (type === "error"){
        msgTypeClass = "alert-danger";
    }

    $("#message").removeClass("alert-info alert-danger").addClass(msgTypeClass);
    $("#message").text(msg);
    $("#message").show().delay(3000).fadeOut(1000);
};

/*var getCountries = function (datasource){
    var countries = [];

    if (datasource === "webserver"){
        $.getJSON( "/data/countries.json", function(json) {
            countries = json["countries"];
        });
    }
    else if (datasource === "localstorage"){
        countries = JSON.parse(localStorage.getItem("countries"));
    }
    return countries;
};*/

var setCountries = function (datasource, datatarget) {

    var countries = [];

    if (datasource === "webserver"){
        $.getJSON( "/data/countries.json", function(json) {
            
                countries = json["countries"];

            viewModel.countries = mapData(countries, "viewModel", "webserver");

        });
    }
    else if (datasource === "localstorage"){
        if (localStorage.getItem("countries") !== null){
            countries = JSON.parse(localStorage.getItem("countries"));
        }
            viewModel.countries = mapData(countries, "viewModel", "localstorage");
    }
};

var saveData = function () {

    if (viewModel.datasource === "localstorage"){

        localStorage.setItem("countries", JSON.stringify(mapData(viewModel.countries, viewModel.datatarget, "viewModel")));
    }
    else {
        // to be implemented
    }
};

var mapData = function (countries, datatarget, datasource) {

    var mapedCountries = [];

    if ((datatarget === "localstorage" || datatarget === "webserver") && datasource === "viewModel"){
        // Map sourcecountries to requiered format
        for (var i = 0; i < countries.length; i++) {
            mapedCountries.push({
                "id": countries[i]["ID"],
                "country_name": countries[i]["countryName"],
                "country_code": countries[i]["countryCode"]});
        }
    }
    else if (datatarget === "viewModel" && (datasource === "localstorage" || datasource === "webserver")){
        // Map sourcecountries to requiered format
        for (var i = 0; i < countries.length; i++) {
            mapedCountries.push({
                "countryID": countries[i]["id"],
                "countryName": countries[i]["country_name"],
                "countryCode": countries[i]["country_code"]});
        }
    }

    return mapedCountries;
};

var setLabels = function (lang){

    $.getJSON( "/data/textLabels.json", function(json) {
        viewModel.labels = json[lang];
    });

};




