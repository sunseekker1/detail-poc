
var renderList = function (){

    var table = document.getElementById("countryTable");

    for (var i = 0; i < viewModel.countries.length; i++) {
        var insertPos = table.getElementsByTagName("tr").length;
        var row = table.insertRow(insertPos);


        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        cell3.className = "buttonContainer";

        cell0.innerHTML = viewModel.countries[i].countryID;
        cell1.innerHTML = viewModel.countries[i].countryCode;
        cell2.innerHTML = viewModel.countries[i].countryName;
        cell3.innerHTML = '<button type="button" class="btn btn-default btn-xs" onclick="showDetail(' + viewModel.countries[i].countryID + ', event)">' + viewModel.labels.detail + '</button>';
        cell3.innerHTML = cell3.innerHTML + '<button type="button" class="btn btn-default btn-xs" onclick="showForm(' + viewModel.countries[i].countryID + ', event)">' + viewModel.labels.modify + '</button>';
        cell3.innerHTML = cell3.innerHTML + '<button type="button" class="btn btn-danger btn-xs" onclick="confirmDelete(' + viewModel.countries[i].countryID + ')">' + viewModel.labels.delete + '</button>';

    }
};

