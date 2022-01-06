'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
      {code:`
      function getRandomInt(min, max) {
        return Math.random() * (max - min) + min;
      }
    
      function putLikes(count) {
          if (count <= 0) {
              return;
          }
          let timeout = 0;
          let svgLikes = document.querySelectorAll('button > div> svg[aria-label="Like"][height="24"]');
          svgLikes.forEach(x => {
              timeout += getRandomInt(1500, 3000);              
              setTimeout(() => {
                  x.parentElement?.parentElement?.click();
              }, timeout);
          });
          
          setTimeout(() => {
              scrollBy({top: innerHeight});
              setTimeout(() => {
                putLikes(count - (svgLikes.length > 0 ? svgLikes.length : 1));
              }, getRandomInt(3000, 5000));            
            }, timeout + getRandomInt(3000, 5000));
      }

      putLikes(${e.target.id});      
      `});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});

