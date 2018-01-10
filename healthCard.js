/**
 * Created by emma on 4/24/17.
 */
var hallName;
var hallShort;
var hallIndex = 0;
var hallFlag = 0;
var signFlag = 0;

function globalChecker() {
    checkName();
    checkMailID();
    checkHallName();
    checkIDCardNo();
    checkSession();
    checkRegNo();
    checkPassword();
    databaseEntry();
}

function  getHallList() {
    if( hallFlag != 1 ) {
        var input = document.getElementById("hall");
        var dataList = document.getElementById('hall_json-datalist');

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (xhttp.responseText == 'ERROR') {
                    alert("Hall Name Error!!!");
                }
                else {
                    var response = xhttp.responseText;
                    console.log(response);
                    var obj = JSON.parse(response);
                    var length = Object.keys(obj).length;
                    hallName = new Array(length);
                    hallShort = new Array(length);
                    hallFlag = 1;

                    for (var i = 0; i < length; i++) {
                        hallName[i] = obj[i].hallName_full;
                        hallShort[i] = obj[i].hallName;
                        //console.log(obj[i].hallName_full + " -> " + obj[i].hallName);
                        // console.log(hallName[i] + " -> " + hallShort[i]);
                        var option = document.createElement('option');
                        option.value = obj[i].hallName_full;
                        dataList.appendChild(option);
                    }
                }
            }
        }
        xhttp.open("GET", "getAllHallName.php", true);
        xhttp.send();
    }
}

function checkName() {

    //alert("hello emma");
    //var b = 5;//local
    var nameET = document.getElementById("name");
    var nameError = document.getElementById("nameErr");

    name = nameET.value;

    var regex = /^[a-zA-Z ]*$/;
    if(!regex.test(name)){
        nameError.innerHTML = "Only letters and white space allowed";
        signFlag = 1;
    }
    else {
        nameError.innerHTML = "";
    }
}

function checkMailID() {
    var mailET = document.getElementById("mail");
    var mailError = document.getElementById("mailErr");

    mail = mailET.value;
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(mail)) {
        mailError.innerHTML = "Enter a valid Email id";
        signFlag = 1;
    }
    else {
        mailError.innerHTML = "";

        /*var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState);

            if(this.readyState == 4 && this.status == 200)
            {
                console.log(this.status);
                var response = xhttp.responseText;
                mailError.innerHTML = response;
            }

        }
        xhttp.open("GET", "sendmail.php?data="+mailET.value, true);
        xhttp.send();*/
    }
}
function checkHallName() {
    var hallEt = document.getElementById("hall");
    var hallErr = document.getElementById("hallErr");

    hall = hallEt.value;

    var regex = /^[a-zA-Z ]*$/;
    if(!regex.test(name)){
        hallErr.innerHTML = "Only letters and white space allowed";
        signFlag = 1;
    }
    else {
        hallErr.innerHTML = "";
    }
    for( var i = 0; i < hallName.length; i++){
        if( hallEt.value == hallName[i] ){
            varHall = hallShort[i];
        }
    }
}

function checkIDCardNo()
{
    var idET = document.getElementById("idCardNo");
    var idCardNoErr = document.getElementById("idCardNoErr");

    id_no = idET.value;
    var regex= /^[1-9][0-9]{1,3}$/;

    if (!regex.test(id_no)) {
        idCardNoErr.innerHTML = "Enter valid id number";
        signFlag = 1;
    }
    else {
        idCardNoErr.innerHTML = " ";
    }

}

function checkSession()
{
    var session1ET = document.getElementById("session1");
    var session2ET = document.getElementById("session2");
    var sessionErr = document.getElementById("sessionErr");

    session1 = session1ET.value;
    session2 = session2ET.value;
    var diff = session2-session1;

    var regex= /^\d{4}$/;

    if ((!regex.test(session1)||!regex.test(session2))||(diff != 1)){
        sessionErr.innerHTML = "Enter valid Session";
        signFlag = 1;
    }
    else {
        sessionErr.innerHTML = " ";
    }

}

function checkRegNo() {
    var regNoET = document.getElementById("regNo");
    regNo = regNoET.value;
    var regNoError = document.getElementById("regNoErr");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if(this.readyState == 4 && this.status == 200)
        {
            console.log(this.status);
            var response = xhttp.responseText;
            //regNoError.innerHTML = response;
            if(String(response.trim()) !== "Success")
                signFlag = 1;

        }

    }
    xhttp.open("GET", "regChecker.php?data="+regNo, true);
    xhttp.send();
}

function checkPassword() {

    var pass1ET = document.getElementById("pass1");
    var pass2ET = document.getElementById("pass2");
    var pass1Err = document.getElementById("pass1Err");
    var passErr = document.getElementById("passErr");

    pass1 = pass1ET.value;
    pass2 = pass2ET.value;

    var regex= /^([0-9a-zA-Z]){6,16}$/;

    if (regex.test(pass1)) {
        if(pass1 == pass2) {
            passErr.innerHTML = " ";
        }
        else {
            passErr.innerHTML = "Password does not match the previous one!";
            signFlag = 1;
        }
    }
    else {
        pass1Err.innerHTML = "Enter a strong password";
        signFlag = 1;
    }
}

function databaseEntry() {
    if(signFlag==1) {
        console.log("Sign up correctly!");
        //alert("Sign up correctly!");
    }
    else
    {
        console.log(name);
        console.log(mail);
        console.log(varHall);
        console.log(id_no);
        console.log(regNo);
        console.log(session1);
        console.log(session2);
        console.log(pass1);

       var signUpError = document.getElementById("signErr");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState);
            if(this.readyState == 4 && this.status == 200)
            {
                console.log(this.status);
                var response = xhttp.responseText;
                console.log(response);
                signUpError.innerHTML=response;
                //alert(response);
                if(String(response.trim()) === "Success") {
                    alert("Successfully signed up :)");
                    window.location.href = "index.html";
                }
            }
        }
        xhttp.open("GET", "healthcard.php?name="+name+"&mail="+mail+"&hall="+varHall+"&regNo="+regNo+"&id_no="+id_no+"&session1="+session1+"&session2="+session2+"&pass2="+pass2,true);
        xhttp.send();
    }
}
