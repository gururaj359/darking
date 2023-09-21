var url = 'http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token';
//var params = 'orem=ipsum&name=binny';
http.open('POST', url, true);

//Send the proper header information along with the request
//http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send();
