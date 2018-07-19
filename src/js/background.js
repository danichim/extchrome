import '../img/icon-128.png'
import '../img/icon-34.png'

var test = {"luna":"8","persoane":[{"nume":"Broasca","prenume":"Iulian","cnp":"1861222070067","email":"ichimdanconstantin@gmail.com","id":1},{"nume":"Vaipan","prenume":"Heorhii","cnp":"1820824070079","email":"ichimdanconstantin@gmail.com","id":2},{"nume":"Magas","prenume":"Serghei","cnp":"1840706070105","email":"ichimdanconstantin@gmail.com","id":3},{"nume":"","prenume":"","cnp":"XXXX","email":"danichimc@gmail.com","id":4},{"nume":"","prenume":"","cnp":"XXXX","email":"danichimc@gmail.com","id":5}]};

chrome.storage.sync.set({key: test}, function() {
    console.log('Value is set to ' + JSON.stringify(test));
});

chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + JSON.stringify(result.key));
});

console.log('fqwfqwf', window.jQuery('.options-page'));

window.jQuery('.options-page #saveData').on('click',function(){
    console.log('asfasfa');
     $('section.modal').addClass('thanks');
  });


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(sender.tab ?
                  "from a content script:" + sender.tab.url :
                  "from the extension");
      if (request.greeting == "hello")
        sendResponse({farewell: "goodbye"});
    });