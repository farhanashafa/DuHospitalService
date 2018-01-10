/**
 * Created by shafa on 5/6/17.
 */

function isLoggedin2() {
    //alert("ckecking2");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.status);
            var response = xhttp.responseText;
            //alert(response);
            if( String(response.trim()) === "yes" ){
                document.getElementById("navBarHealthcard").style.display = 'none';
                document.getElementById("navBarLog").innerHTML = '<li>\<a onclick="myFunc();"' +
                    ' style="width:auto;"> Logout </a>\</li>';
            }
        }
    }
    xhttp.open("GET", "checkSession.php", true);
    xhttp.send();
}
isLoggedin2();
