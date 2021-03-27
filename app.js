function getData(){
    var url = document.getElementById('url').value;
    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', 'https://github.com');
       fetch(url,{
           method: 'GET',
           headers: myHeaders
       })
       .then(response => response.json())
       .then(data => {
           document.getElementById('jsonData').innerHTML = JSON.stringify(data);
       })
    
    }
