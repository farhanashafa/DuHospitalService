/**
 * Created by shafa on 5/6/17.
 */

function appointment(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if(this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            var response = xhttp.responseText;
            //alert(response);
            if( String(response.trim()) === "yes" ){
                document.getElementById('id03').style.display='block';
            }
            else{
                document.getElementById('id03').style.display='none';
                alert("Log in First! :)");
                window.location.href = "index.html";
                $('#id01').modal('hide');
            }
        }

    }
    xhttp.open("GET", "checkSession.php", true);
    xhttp.send();
}

function globalAppointment() {
    checkDate();
}

function checkDate(){
    var today = new Date();
    console.log(today);
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var today = yyyy+'-'+mm+'-'+dd;//yyyy-mm-dd
    console.log(document.getElementById("date").value);
    var input = document.getElementById("date").value;
    if(today > input){
        document.getElementById("dateErr").innerHTML = "Time machine has not been invented yet... plz, enter a valid date";
        console.log(today+ " ->previous");
    }
    else{
        getStuID();
    }
}

function getStuID() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if(this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            var response = xhttp.responseText;
            //alert(response);
            stu_id = response;
            checkDB();
        }

    }
    xhttp.open("GET", "getSTUID.php", true);
    xhttp.send();
}
function checkDB(){
    var weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var day = document.getElementById("date").valueAsDate;
    var d = day.getDay();
    console.log("day:"+day+"->"+d +" -> "+ weekday[d]);

    var slot = document.getElementById("slot").value;
    var input = document.getElementById("date").value;
    var dept = document.getElementById("dept").value;
    var name = document.getElementById("drName").value;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if(this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            var response = xhttp.responseText;
           /* alert(response);*/
            if( String(response.trim()) === "No slot available, try another day" || String(response.trim()) === "You already have an appoinment"){
                document.getElementById("submitErr").innerHTML = response;
                document.getElementById("dateErr").innerHTML = "";
                document.getElementById("slotErr").innerHTML = "";
            }
            else if( response.length > 15 ){
                document.getElementById("dateErr").innerHTML = response;
                document.getElementById("slotErr").innerHTML = "";
                document.getElementById("submitErr").innerHTML = "";
            }
            else if( String(response.trim()) === "Wrong slot" ){
                document.getElementById("slotErr").innerHTML = response;
                document.getElementById("dateErr").innerHTML = "";
                document.getElementById("submitErr").innerHTML = "";
            }
            else if( String(response.trim()) === "success" ){
                document.getElementById("submitErr").innerHTML = "Your appointment is accepted successfully";
                document.getElementById("dateErr").innerHTML = "";
                document.getElementById("slotErr").innerHTML = "";
            }

        }
    }
    xhttp.open("GET", "insertAppointment.php?stuID="+stu_id+"&drname="+name+"&drdept="+dept+"&date="+input+"&slot="+slot+"&day="+weekday[d], true);
    xhttp.send();
}
