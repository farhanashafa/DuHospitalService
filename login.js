/**
 * Created by emma on 4/29/17.
 */
//var loginFlag = 0;
function globalLogin() {
    checkLogInMail();
}
function checkLogInMail() {
    var mailET = document.getElementById("mailID");
    var mailIdError = document.getElementById("mailIdErr");
    mailID = mailET.value;
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regex.test(mailID)) {
        mailIdError.innerHTML = "Enter a valid Email id";
        //loginFlag = 1;
    }
    else{
        checkmailPass();
    }
}


function checkmailPass() {
    var passET = document.getElementById("psw");
    var passError = document.getElementById("pswErr");

    psw = passET.value;

    console.log(mailID);
    console.log(psw);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);

        if(this.readyState == 4 && this.status == 200)
        {
            console.log(this.status);
            var response = xhttp.responseText;
            if(String(response.trim()) === "success") {

                document.getElementById("id01").style.display = 'none';
                $('#id01').modal('hide');
                document.getElementById("navBarHealthcard").style.display = 'none';
                document.getElementById("navBarLog").innerHTML = '<li>\<a onclick="myFunc();"' +
                    ' style="width:auto;"> Logout </a>\</li>';
            }
            else{
                document.getElementById("loginErr").innerHTML = response;
            }
        }

    }
    xhttp.open("GET", "passwordChecker.php?psw="+psw+"&mailID="+mailID, true);
    xhttp.send();
}