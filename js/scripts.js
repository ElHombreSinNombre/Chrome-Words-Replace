document.addEventListener('DOMContentLoaded', function() {
  var detectado = document.getElementById('iniciar');
  var audio= document.getElementById('audio');
        detectado.addEventListener('click', function() {   
        audio.play();
        chrome.tabs.executeScript(null, {code: "document.body.innerHTML = document.body.innerHTML.replace(new RegExp('Venezuela' , 'g'), 'España');"});    
        chrome.tabs.executeScript(null, {code: "document.body.innerHTML = document.body.innerHTML.replace(new RegExp('Maduro' , 'g'), 'Rajoy');"});    
        chrome.tabs.executeScript(null, {code: "document.body.innerHTML = document.body.innerHTML.replace(new RegExp('Nicolás' , 'g'), 'Mariano');"});  
    });
});