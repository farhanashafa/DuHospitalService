/**
 * Created by shafa on 5/5/17.
 */
var medicalDept;
var medicalDeptID;
var getDeptFlag = 0;
var getDrFlag = 0;
var slotFgal = 0;
var prevDept;


function isLoggedin() {
        //alert("ckecking");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState);

            if(this.readyState == 4 && this.status == 200) {
                console.log(this.status);
                var response = xhttp.responseText;
                //alert(response);
                if( String(response.trim()) === "yes" ){
                }
                else{
                    document.getElementById("logout").style.display = 'none';
                }
            }

        }
        xhttp.open("GET", "checkSession.php", true);
        xhttp.send();
}
isLoggedin();


function getDeptList(){
    if( getDeptFlag != 1 ) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log(this.readyState);

            if (this.readyState == 4 && this.status == 200) {
                var input = document.getElementById("dept");
                var dataList = document.getElementById('dept-datalist');

                getDeptFlag = 1;
                var response = xhttp.responseText;
                console.log(response);
                var obj = JSON.parse(response);
                var length = Object.keys(obj).length;
                medicalDept = new Array(length);
                medicalDeptID = new Array(length);
                for (var i = 0; i < length; i++) {
                    medicalDept[i] = obj[i].deptName;
                    medicalDeptID[i] = obj[i].dept_ID;
                    var option = document.createElement('option');
                    option.value = medicalDept[i];
                    dataList.appendChild(option);
                }
            }

        }
        xhttp.open("GET", "getAllDept.php", true);
        xhttp.send();
    }
}

function getDeptDrList() {
    var dept;
    if( getDrFlag == 0 ) {
        dept = document.getElementById("dept").value;
        prevDept = document.getElementById("dept").value;
    }
    else {
        var temp = document.getElementById("dept").value;
        if( String(prevDept.trim()) === temp ){

        }
        else{
            getDrFlag = 0;
            dept = document.getElementById("dept").value;
            prevDept = document.getElementById("dept").value;
        }
    }
    if( dept.length > 1 && getDrFlag != 1 ){
        var input = document.getElementById("drName");
        var dataList = document.getElementById('dr-datalist');

        var deptIN = 0;
        for(; deptIN < medicalDept.length; deptIN++){
            if( String(medicalDept[deptIN].trim()) === dept ){
                console.log(medicalDept[deptIN] + " -> " + dept);
                break;
            }
        }

        getDrFlag = 1;
        while( dataList.hasChildNodes() ){
            dataList.removeChild(dataList.lastChild);
        }
        for (var i = 0; i < drName.length; i++) {
            if( String(medicalDept[deptIN].trim()) === drDept[i] ) {
                var option = document.createElement('option');
                option.value = drName[i];
                dataList.appendChild(option);
            }
        }
    }

}

function slotDropDown() {
    if( slotFgal != 1 ){
        var dataList = document.getElementById('slot-datalist');
        var option = document.createElement('option');
        option.value = "Morning";
        dataList.appendChild(option);
        var option = document.createElement('option');
        option.value = "Evening";
        dataList.appendChild(option);
        slotFgal = 1;
    }
}