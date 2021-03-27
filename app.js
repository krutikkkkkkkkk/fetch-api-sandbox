function getData(){
    var url = document.getElementById('url').value;
    
       fetch(url,{
           method: 'GET'
       })
       .then(response => response.json())
       .then(data => {
           document.getElementById('jsonData').innerHTML = JSON.stringify(data);
       })
       .catch(error => {
    document.getElementById('error').innerHTML = error;
       })
    
    }
