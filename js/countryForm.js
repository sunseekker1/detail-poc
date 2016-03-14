
/*

var callSaveBtn = function (){


    alert("doSave");
};

var callListBtn = function (){


    event.preventDefault();

    $("#view-country-form").empty();
    $("#view-country-detail").empty();

    $("#view-country-list").load("/templates/countryList.html", function () {
        $.getScript( "/js/countryList.js", function( data, textStatus, jqxhr ) {
            renderTemplate();
        });
    });
};
*/

var renderForm = function () {
    /*document.getElementById("saveBtn").addEventListener("click", callSaveBtn);
    document.getElementById("listBtn").addEventListener("click", showList);*/

    /*document.getElementById("submitForm").action = viewModel.linkTargetFile;*/
    document.getElementById("countryID").value = viewModel.country.countryID;
    document.getElementById("countryCode").value = viewModel.country.countryCode;
    document.getElementById("countryName").value = viewModel.country.countryName;

    document.getElementById("saveBtn").innerHTML = viewModel.labels.saveBtn;
    document.getElementById("listBtn").innerHTML = viewModel.labels.listBtn;

    document.getElementById("saveBtn").addEventListener("click", function() {saveForm()});
    document.getElementById("listBtn").addEventListener("click", function() {showList()});
}