function getData(){
    var url = document.getElementById('url').value;
    var myHeaders = new Headers();
    myHeaders.append('Access-Control-Allow-Origin', 'https://reboot13-git.github.io/');
       fetch(url,{
           method: 'GET',
           headers: myHeaders
       })
       .then(response => response.json())
       .then(data => {
           document.getElementById('jsonData').innerHTML = JSON.stringify(data);
       })
    
    }
