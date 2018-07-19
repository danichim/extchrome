import "../css/options.css";

function save_options() {
  var luna = document.getElementById('luna').value;
  var nume1 = document.getElementById('name1').value;
  var prenume1 = document.getElementById('prenume1').value;
  var cnp1 = document.getElementById('prenume1').value;
  var email1 = document.getElementById('email1').value;

  var nume2 = document.getElementById('name2').value;
  var prenume2 = document.getElementById('prenume2').value;
  var cnp2 = document.getElementById('cnp2').value;
  var email2 = document.getElementById('email2').value;

  var nume3 = document.getElementById('name3').value;
  var prenume3 = document.getElementById('prenume3').value;
  var cnp3 = document.getElementById('cnp3').value;
  var email3 = document.getElementById('email3').value;

  var nume4 = document.getElementById('name4').value;
  var prenume4 = document.getElementById('prenume4').value;
  var cnp4 = document.getElementById('cnp4').value;
  var email4 = document.getElementById('email4').value;

  var nume5 = document.getElementById('name5').value;
  var prenume5 = document.getElementById('prenume5').value;
  var cnp5 = document.getElementById('cnp5').value;
  var email5 = document.getElementById('email5').value;

  chrome.storage.sync.set({
    luna: luna,
    persoane: [{
      nume: nume1,
      prenume: prenume1,
      cnp: cnp1,
      email: email1
    },
    {
      nume: nume2,
      prenume: prenume2,
      cnp: cnp2,
      email: email2
    },
    {
      nume: nume3,
      prenume: prenume3,
      cnp: cnp3,
      email: email3
    },
    {
      nume: nume4,
      prenume: prenume4,
      cnp: cnp4,
      email: email4
    },
    {
      nume: nume5,
      prenume: prenume5,
      cnp: cnp5,
      email: email5
    }]
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
      luna: '8',
      persoane: [{
          nume: 'Broasca',
          prenume: 'Iulian',
          cnp: '1861222070067',
          email: 'ichimdanconstantin@gmail.com',
          id: 1,
      }, {
          nume: 'Vaipan',
          prenume: 'Heorhii',
          cnp: '1820824070079',
          email: 'ichimdanconstantin@gmail.com',
          id: 2,
      },{
          nume: 'Magas',
          prenume: 'Serghei',
          cnp: '1840706070105',
          email: 'ichimdanconstantin@gmail.com',
          id: 3,
      },{
          nume: '',
          prenume: '',
          cnp: 'XXXX',
          email: 'danichimc@gmail.com',
          id: 4,
      },{
          nume: '',
          prenume: '',
          cnp: 'XXXX',
          email: 'danichimc@gmail.com',
          id: 5,
      }]
  }, function(items) {
    document.getElementById('luna').value = items.luna;

    document.getElementById('name1').value = items.persoane[0].nume;
    document.getElementById('prenume1').value = items.persoane[0].prenume;
    document.getElementById('cnp1').value = items.persoane[0].cnp;
    document.getElementById('email1').value = items.persoane[0].email;

    document.getElementById('name2').value = items.persoane[1].nume;
    document.getElementById('prenume2').value = items.persoane[1].prenume;
    document.getElementById('cnp2').value = items.persoane[1].cnp;
    document.getElementById('email2').value = items.persoane[1].email;

    document.getElementById('name3').value = items.persoane[2].nume;
    document.getElementById('prenume3').value = items.persoane[2].prenume;
    document.getElementById('cnp3').value = items.persoane[2].cnp;
    document.getElementById('email3').value = items.persoane[2].email;

    document.getElementById('name4').value = items.persoane[3].nume;
    document.getElementById('prenume4').value = items.persoane[3].prenume;
    document.getElementById('cnp4').value = items.persoane[3].cnp;
    document.getElementById('email4').value = items.persoane[3].email;

    document.getElementById('name5').value = items.persoane[4].nume;
    document.getElementById('prenume5').value = items.persoane[4].prenume;
    document.getElementById('cnp5').value = items.persoane[4].cnp;
    document.getElementById('email5').value = items.persoane[4].email;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('saveData').addEventListener('click',
    save_options);
