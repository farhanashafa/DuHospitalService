/**
 * Created by shafa on 4/25/17.
 */
var checker = 0;
var searchFlag = 0;
var index = 0;
var drName ;
var drID;
var drDept ;
var saturday;
var sunday;
var monday;
var tuesday;
var wednesday;
var thursday;
var friday;
var total;

function getDoctorsList(){

    console.log(checker);
    checker = checker +1;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
            if (xhttp.responseText == 'ERROR') {
                alert("Dr List Error!!!!");
            }
            else {
                var response = xhttp.responseText;
                //console.log(response);
                var obj = JSON.parse(response);
                var length = Object.keys(obj).length;

                drName = new Array(length);
                drDept = new Array(length);
                drID = new Array(length);
                saturday = new Array(length);
                sunday = new Array(length);
                monday = new Array(length);
                tuesday = new Array(length);
                wednesday = new Array(length);
                thursday = new Array(length);
                friday = new Array(length);

                for (var i = 0; i < length; i++) {
                    drName[i] = obj[i].drName;
                    drDept[i] = obj[i].deptName;
                    drID[i] = obj[i].dr_ID;
                    if( obj[i].saturday.length < 1 ){
                        saturday[i] = "#";
                    }
                    else if( !obj[i].saturday.localeCompare("Morning") ){
                        saturday[i] = "Sat: 8.00am-12.00pm";
                    }
                    else if( !obj[i].saturday.localeCompare("Evening") ){
                        saturday[i] = "Sat: 2.00pm-6.00pm";
                    }
                    if( obj[i].sunday.length < 1 ){
                        sunday[i] = "#";
                    }
                    else if( !obj[i].sunday.localeCompare("Morning") ){
                        sunday[i] = "Sun: 8.00am-12.00pm";
                    }
                    else if( !obj[i].sunday.localeCompare("Evening") ){
                        sunday[i] = "Sun: 2.00pm-6.00pm";
                    }
                    if( obj[i].monday.length < 1 ){
                        monday[i] = "#";
                    }
                    else if( !obj[i].monday.localeCompare("Morning") ){
                        monday[i] = "Mon: 8.00am-12.00pm";
                    }
                    else if( !obj[i].monday.localeCompare("Evening") ){
                        monday[i] = "Mon: 2.00pm-6.00pm";
                    }
                    if( obj[i].tuesday.length < 1 ){
                        tuesday[i] = "#";
                    }
                    else if( !obj[i].tuesday.localeCompare("Morning") ){
                        tuesday[i] = "Tue: 8.00am-12.00pm";
                    }
                    else if( !obj[i].tuesday.localeCompare("Evening") ){
                        tuesday[i] = "Tue: 2.00pm-6.00pm";
                    }
                    if( obj[i].wednesday.length < 1 ){
                        wednesday[i] = "#";
                    }
                    else if( !obj[i].wednesday.localeCompare("Morning") ){
                        wednesday[i] = "Wed: 8.00am-12.00pm";
                    }
                    else if( !obj[i].wednesday.localeCompare("Evening") ){
                        wednesday[i] = "Wed: 2.00pm-6.00pm";
                    }
                    if( obj[i].thursday.length < 1 ){
                        thursday[i] = "#";
                    }
                    else if( !obj[i].thursday.localeCompare("Morning") ){
                        thursday[i] = "Thu: 8.00am-12.00pm";
                    }
                    else if( !obj[i].thursday.localeCompare("Evening") ){
                        thursday[i] = "Thu: 2.00pm-6.00pm";
                    }
                    if( obj[i].friday.length < 1 ){
                        friday[i] = "#";
                    }
                    else if( !obj[i].friday.localeCompare("Morning") ){
                        friday[i] = "Fri: 8.00am-12.00pm";
                    }
                    else if( !obj[i].friday.localeCompare("Evening") ){
                        friday[i] = "Fri: 2.00pm-6.00pm";
                    }
                    console.log(obj[i].name + " -> " + obj[i].deptName + "::" + drName[i] + "->" + drDept[i]);
                    console.log(saturday[i] + sunday[i] + monday[i] +tuesday[i]+wednesday[i]+friday[i]);
                }
                total = length;
                dynamic();
            }
        }
    }
    xhttp.open("GET","getDrList.php",true);
    xhttp.send();

}
getDoctorsList();
function searchFun() {
    console.log(searchFlag);
    if( searchFlag != 1 ) {
        var input = document.getElementById("varSearch");
        var dataList = document.getElementById('json-datalist');

        searchFlag = 1;
        for (var i = 0; i < drName.length; i++) {
            console.log(drName[i]);
            var option = document.createElement('option');
            option.value = drName[i];
            dataList.appendChild(option);
        }
    }
    console.log(searchFlag);
}


function dynamic() {
    //alert(drName.length);
    for( var i = 0; i < total; i++) {
        var d = new Array(5);
        var i = 0;
        var name = drName[index];
        var dept = drDept[index];
        if (saturday[index].localeCompare("#")) {
            d[i] = saturday[index];
            i = i + 1;
        }
        if (sunday[index].localeCompare("#")) {
            d[i] = sunday[index];
            i = i + 1;
        }
        if (monday[index].localeCompare("#")) {
            d[i] = monday[index];
            i = i + 1;
        }
        if (tuesday[index].localeCompare("#")) {
            d[i] = tuesday[index];
            i = i + 1;
        }
        if (wednesday[index].localeCompare("#")) {
            d[i] = wednesday[index];
            i = i + 1;
        }
        if (thursday[index].localeCompare("#")) {
            d[i] = thursday[index];
            i = i + 1;
        }
        if (friday[index].localeCompare("#")) {
            d[i] = friday[index];
            i = i + 1;
        }
        index = index + 1;
        console.log(name + "      " + dept);
        console.log(d[0] + d[1] + d[2] + d[3] + d[4]);
        var div = document.createElement('div');
        div.className = 'row';
        div.innerHTML = '<br>\
                    <div class="col-sm-8">\
                    <img src="doctormale.png" height="200" width="200">\
                    </div>\
                    <div class="col-sm-4">\
                    <h3 style="color: #91ace8">Name: ' + name + '</h3>\
                    <h4 style="color: #91ace8">Dept: ' + dept + '</h4>\
                    <h5 style="color: #91ace8">Working Hour: <br>' +
            d[0] + '<br>' + d[1] + '<br>' + d[2] + '<br>' + d[3] + '<br>' + d[4] + '</h5>\
                    <br>\<br>\</div>';

        document.getElementById('content').appendChild(div);
    }
}

function loadDrdetails() {

    console.log("entering");
    var searchContent = document.getElementById("varSearch");
    console.log(searchContent.value);
    var i = 0;
    for( ; i < drName.length; i++){
        if ( !searchContent.value.localeCompare(drName[i]) ){
            break;
        }
    }
    console.log(drName[i] + "####" + drDept[i]);
    while (document.getElementById('content').hasChildNodes()) {
        console.log("working");
        document.getElementById('content').removeChild(document.getElementById('content').lastChild);
    }
    var loadbutton = document.getElementById('loadButton');
    loadbutton.style.visibility = 'hidden';

    var d = new Array(5);
    var i1 = 0;
    var name = drName[i];
    var dept = drDept[i];
    if( saturday[i].localeCompare("#") ){
        d[i1] = saturday[i];
        i1 = i1+1;
    }
    if( sunday[i].localeCompare("#") ){
        d[i1] = sunday[i];
        i1 = i1+1;
    }
    if( monday[i].localeCompare("#") ){
        d[i1] = monday[i];
        i1 = i1+1;
    }
    if( tuesday[i].localeCompare("#") ){
        d[i1] = tuesday[i];
        i1 = i1+1;
    }
    if( wednesday[i].localeCompare("#") ){
        d[i1] = wednesday[i];
        i1 = i1+1;
    }
    if( thursday[i].localeCompare("#") ){
        d[i1] = thursday[i];
        i1 = i1+1;
    }
    if( friday[i].localeCompare("#") ){
        d[i1] = friday[i];
        i1 = i1+1;
    }
     var div = document.createElement('div');
     div.className = 'row';
     div.innerHTML ='<br>\
     <div class="col-sm-8">\
     <img src="doctormale.png" height="200" width="200">\
     </div>\
     <div class="col-sm-4">\
     <h3 style="color: #91ace8">Name: ' + name + '</h3>\
     <h4 style="color: #91ace8">Dept: ' + dept + '</h4>\
     <h5 style="color: #91ace8">Working Hour: <br>' +
     d[0] + '<br>' + d[1] + '<br>' + d[2] + '<br>' + d[3] + '<br>' + d[4] + '</h5>\
     <br>\<br>\</div>';

     document.getElementById('content').appendChild(div);
}