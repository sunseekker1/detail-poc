
var renderForm = function () {

    document.getElementById("countryCode").value = viewModel.country.countryCode;
    document.getElementById("countryName").value = viewModel.country.countryName;

    document.getElementById("saveBtn").innerHTML = viewModel.labels.saveBtn;
    document.getElementById("listBtn").innerHTML = viewModel.labels.listBtn;

    document.getElementById("saveBtn").addEventListener("click", function() {saveForm()});
    document.getElementById("listBtn").addEventListener("click", function() {showList()});
};

var saveForm = function (){

     viewModel.country.countryCode = document.getElementById("countryCode").value;
     viewModel.country.countryName = document.getElementById("countryName").value;

    for (var i = 0; i < viewModel.countries.length; i++){
        if (viewModel.countries[i].countryID === viewModel.country.countryID){
            viewModel.countries[i] = {"countryID": viewModel.country.countryID, "countryName": viewModel.country.countryName, "countryCode": viewModel.country.countryCode};
            break;
        }
    }

    saveData();

    var message = "Das Land " + viewModel.country.countryName + "wurde bearbeitet und gespeichert.";

    showList(message);
};