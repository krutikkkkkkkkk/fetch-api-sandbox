function getData(){
    var url = document.getElementById('url').value;
    
       fetch(url,{
           method: 'GET'
       })
       .then(response => response.json())
       .then(data => {
           document.getElementById('jsonData').innerHTML ="<pre>" + JSON.stringify(data,undefined, 4) + " </pre>";
       })
       .catch(error => {
    document.getElementById('error').innerHTML = error;
       })
    
    }
