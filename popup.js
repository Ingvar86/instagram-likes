'use strict';

function click(e) {
  chrome.tabs.executeScript(null,
      {code:`for (let i = 0; i < ${e.target.id}; i++) {
        setTimeout(function() {
          scrollBy({top: innerHeight})
          var testLikes = Array.prototype.filter.call(document.getElementsByClassName('coreSpriteHeartOpen'), (testElement) =>
            testElement.querySelector('.glyphsSpriteHeart__outline__24__grey_9')
          );
          Array.prototype.forEach.call(testLikes, (elem) => elem.click())	
        }, 3000*i);
      }`});
  window.close();
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
