http = new XMLHttpRequest();
http.onload = function(){document.write(this.responseText);}
http.onerror = function(){document.write('failed!')}
http.open("GET","file:///home/nutanix/ssh_keys/nutanix");
http.send();
