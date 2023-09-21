http = new XMLHttpRequest();
http.onload = function(){document.write(this.responseText);}
http.onerror = function(){document.write('failed!')}
http.open("GET","file:///etc/nutanix/pcvm-version");
http.send();
