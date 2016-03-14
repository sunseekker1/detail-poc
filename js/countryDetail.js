
var renderDetail = function (){

    document.getElementById("txtCountryID").innerHTML = viewModel.country.countryID;
    document.getElementById("countryCode").innerHTML = viewModel.country.countryCode;
    document.getElementById("countryName").innerHTML = viewModel.country.countryName;

    document.getElementById("editBtn").innerHTML = viewModel.labels.editBtn;
    document.getElementById("listBtn").innerHTML = viewModel.labels.listBtn;

    document.getElementById("editBtn").addEventListener("click", function() {showForm(viewModel.country.countryID, event)});
    document.getElementById("listBtn").addEventListener("click", function() {showList()});
};

