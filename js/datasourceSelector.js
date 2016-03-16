

$(".btn-datasource").click(function() {

    if (this.id === "btn-write-localstorage"){
        setCountries("webserver", "localstorage");
    }
    else {
        var datasource = this.id.split("-")[1];
        changeDatasource(datasource);
    }


});

var toggleDatasourceSelector = function (){

    $(".btn-datasource").removeClass("active");
    $("#btn-" + viewModel.datasource).addClass("active");
};

var changeDatasource = function (datasource){

    viewModel.datasource = datasource;

    console.log(localStorage);
    console.log(datasource);

    setCountries(datasource, "viewModel");
    showList();
    toggleDatasourceSelector();
};