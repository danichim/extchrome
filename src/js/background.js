import '../img/icon-128.png'
import '../img/icon-34.png'

// chrome.storage.sync.clear();

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log('bg listener', request);

        if (request.type === 'save') {
            console.log('if type save bg listener', request);

            callMeBaby(request.data);
            sendResponse("from background");
        }
    }
);


const callMeBaby = (msg) =>{
    chrome.tabs.query({}, function(tabs) {
        tabs.forEach(tab => {
          chrome.tabs.sendMessage(tab.id, msg);
        })
      });
}

// var defulatState = {
//     luna: '7',
//     persoane: [{
//         nume: 'Default',
//         prenume: 'Iulian',
//         cnp: '1861222070067',
//         email: 'ichimdanconstantin@gmail.com',
//     }, {
//         nume: 'Vaipan',
//         prenume: 'Heorhii',
//         cnp: '1820824070079',
//         email: 'ichimdanconstantin@gmail.com',
//     },{
//         nume: 'Magas',
//         prenume: 'Serghei',
//         cnp: '1840706070105',
//         email: 'ichimdanconstantin@gmail.com',
//     },{
//         nume: '',
//         prenume: '',
//         cnp: 'XXXX',
//         email: 'danichimc@gmail.com',
//     },{
//         nume: '',
//         prenume: '',
//         cnp: '',
//         email: '',
//     }]
//   }

//   chrome.storage.sync.set({settings: defulatState}, function() {
//     console.log('bg Value is set to ' + JSON.stringify(defulatState));
//   });