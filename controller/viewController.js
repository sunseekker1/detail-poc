
var showForm = function (countryID, event) {

    for (var i = 0; i < viewModel.countries.length; i++){
        if (viewModel.countries[i].countryID === countryID){
            viewModel.country = {"countryID": viewModel.countries[i].countryID, "countryName": viewModel.countries[i].countryName, "countryCode": viewModel.countries[i].countryCode};
            break;
        }
    }

    event.preventDefault();

    $("#view-country-list").empty();
    $("#view-country-detail").empty();

    $("#view-country-form").load("/templates/countryForm.html", function () {
        $.getScript( "/js/countryForm.js", function( data, textStatus, jqxhr ) {
            renderForm();
        });
    });
};

var showList = function (){

    //event.preventDefault();

    $("#view-country-form").empty();
    $("#view-country-detail").empty();

    $("#view-country-list").load("/templates/countryList.html", function () {
        $.getScript( "/js/countryList.js", function( data, textStatus, jqxhr ) {
            renderList();
        });
    });

};


var showDetail = function (countryID, event){

    for (var i = 0; i < viewModel.countries.length; i++){
        if (viewModel.countries[i].countryID === countryID){
            viewModel.country = {"countryID": viewModel.countries[i].countryID, "countryName": viewModel.countries[i].countryName, "countryCode": viewModel.countries[i].countryCode};
            break;
        }
    }

    event.preventDefault();

    $( "#view-country-list").empty();
    $( "#view-country-form").empty();

    $( "#view-country-detail" ).load( "/templates/countryDetail.html", function() {
        $.getScript( "/js/countryDetail.js", function( data, textStatus, jqxhr ) {
            renderDetail();
        });
    });
};

var confirmDelete = function (countryID) {
    var doDelete = window.confirm("Möchten Sie das Land mit der ID " + countryID + " löschen?");

    if (doDelete == true) {

        alert("delete");
    }
};

var saveForm = function (){


    alert("doSave");
};