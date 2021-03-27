getData = function(){
 
let url = document.getElementById('url').value;

   fetch(url)
   .then(response => response.json())
   .then(data => {
       document.getElementById('jsonData').innerHTML = JSON.stringify(data);
   })

}