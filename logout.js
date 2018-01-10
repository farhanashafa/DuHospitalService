/**
 * Created by shafa on 5/5/17.
 */

function myFunc() {
    //alert("logout");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        console.log(this.readyState);
        if(this.readyState == 4 && this.status == 200)
        {
            console.log(this.status);
            var response = xhttp.responseText;
            //alert(response);
            window.location.href = "index.html";
        }

    }
    xhttp.open("GET", "destroySession.php", true);
    xhttp.send();
}
