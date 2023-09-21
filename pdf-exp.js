http = new XMLHttpRequest();
http.onload = function(){document.write(this.responseText);}
http.onerror = function(){document.write('failed!')}
http.open("GET","file:///home/certs/root.key");
http.send();
http.open("GET","file:///home/certs/root.crt");
http.send();
