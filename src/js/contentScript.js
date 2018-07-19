(function() {
    'use strict';

    // Your code here...
    //setez variabile globale pentru luna si ziua care se deschide
    //inchid apoi modalul ala urat cu click pe MAI DEPARTE #ext-gen17.trigger('click')
    //aleg luna din dropdown
    //vertific daca e culoarea verde(background-color:hsl(122, 93%, 32%)) daca nu dau refresh
    //dau click pe ziua aia dupa care iau toate a din div#generareZi si fac un for caut fiecare daca hasClass('available')
    //cu jchery bag 5 butoane pentru 5 persoane care le setez tot in obiectul global

     window._ = {
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
        }],
        selectLuna : window.jQuery("select[name='SelectLuna']"), //change value
        ziDeschisa: window.jQuery('#generareLuna').find('a'), //refresh
    }

    window.afiseazaButoanele = function() {
        console.log('afiseaza butoane');
        for (var i =window._.persoane.length; i--;) {
            window.jQuery('#programareCampuri .dummyBorder2').prepend('<div><button class="populeaza-date-form" id="btnperson_'+i+'">'+i+' '+window._.persoane[i].nume+'</button></div>');
        }
        window.addListenersButtons();
    };

    window.addListenersButtons = function() {
        console.log('add listeners');
        window.jQuery('button.populeaza-date-form').on('click',function(e){
            var indexPerson = e.currentTarget.id.replace('btnperson_','');
            var currentPerson = window._.persoane[indexPerson];
            window.populateDataForm(currentPerson);
        });
        // window.jQuery('#btnInscrie').on('click', function(e){
        //   window.open('http://ghiseulonline.ro/portal/suceava/evp/psonline.nsf/Programare?OpenForm&TipProgramare=Carte%20identitate', '_blank');
        // });
    };

    window.populateDataForm = function(person) {
        window.populateForm = {
            buttonInscrie: window.jQuery('#btnInscrie'), //trigger click,
            inputNume: window.jQuery("input[name='Nume']"),
            inputPrenume: window.jQuery("input[name='Prenume']"),
            inputCnp: window.jQuery("input[name='CNP']"),
            inputEmail: window.jQuery("input[name='Email']"),
            inputConfirmare: window.jQuery("input[name='ConfirmareEmail']"),
            checkLegea: window.jQuery("input[name='Legea677CK']"),
            checkActe: window.jQuery("input[name='ActeNecesareCK']"),
        }

        setTimeout(function(){ window.jQuery("input[name='Nume']").val(person.nume).trigger('change').removeClass('mandatory'); }, 50);
        setTimeout(function(){ window.jQuery("input[name='Prenume']").val(person.prenume).trigger('change').removeClass('mandatory'); }, 100);
        setTimeout(function(){ window.jQuery("input[name='CNP']").val(person.cnp).trigger('change').removeClass('mandatory'); }, 150);
        setTimeout(function(){ window.jQuery("input[name='Email']").val(person.email).trigger('change').removeClass('mandatory'); }, 200);
        setTimeout(function(){ window.jQuery("input[name='ConfirmareEmail']").val(person.email).trigger('change').removeClass('mandatory'); }, 250);
        setTimeout(function(){ window.jQuery("input[name='Legea677CK']").trigger('click'); }, 400);
        setTimeout(function(){ window.jQuery("input[name='ActeNecesareCK']").trigger('click'); }, 550);

    };

    window.adaugaBtn = function() {
        window.jQuery('#programareCampuri .dummyBorder2').prepend('<div><button id="btn_adauga_butoane">Adauga persoane</button></div>');
        window.jQuery('button#btn_adauga_butoane').on('click',function(e){
             window.afiseazaButoanele();
        });
    };

    window.doThings = function() {
        console.log('click pe ziua deschisa and doThings');
        window.ziuaDeschisa.trigger('click');
        console.log('ziua a fost selectata', window.ziuaDeschisa.text());
        window.intervaleOrare = window.jQuery('#generareZi').find('a');
        window.intervalulDeschis = [];
        window.adaugaBtn();

        for (var i = 0; i < window.intervaleOrare.length; i++) {
            if (window.jQuery(window.intervaleOrare[i]).attr('id') && (window.jQuery(window.intervaleOrare[i]).hasClass('available'))) {
                window.intervalulDeschis.push(window.intervaleOrare[i].id);
            }
        }

        //oridne de jos in sus
        //intervalulDeschis.reverse();

        console.log('click pe intervalulDeschis', window.intervalulDeschis, window.jQuery('#'+window.intervalulDeschis[0]));

        setTimeout(function(){ window.jQuery('#'+window.intervalulDeschis[0]).trigger('click'); }, 100)

        setTimeout(function(){ window.afiseazaButoanele() }, 150);
    };

    window.verificaLiber = function() {
        window.ziuaDeschisa = window.jQuery('#generareLuna').find('a');
        console.log('verifica zi deschisa');
        if (window.ziuaDeschisa.length === 0) {
            //TODO REMOVE RELOAD
            window.location.reload()
        } else {
            console.log('zi deschisa', window.ziuaDeschisa.text());
            window._.ziua = window.ziuaDeschisa.text();
            window.doThings();
        }
        window.adaugaBtnDebug();

    };

    window.initAndCheck = function() {
        //close modal
        setTimeout(function(){window.jQuery('#ext-gen17').trigger('click') }, 100)

        //change select
        if (window._.selectLuna.val() !== window._.luna) {
            console.log('luna schimbata');
            window._.selectLuna.val(window._.luna).trigger('change');
        }

        //verifica ziua daca e deschisa
        //window.verificaLiber()

        //TODO for debug
        //window.afiseazaButoanele();
        //window.adaugaBtn();
        //window.adaugaBtnDebug();

    }

    window.adaugaBtnDebug = function() {
        window.jQuery('#selectareLuna').prepend('<div><button id="btn_debugg">Arata formular</button></div>');
        window.jQuery('button#btn_debugg').on('click',function(e){
             window.jQuery('#programareCampuri').removeAttr('style');
        });
        window.adaugaBtn();
    }

    setTimeout(function(){ window.initAndCheck() }, 300);

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
        });


    chrome.storage.sync.get(['key'], function(result) {
        console.log('content take date: ' + JSON.stringify(result.key));
    });

        
        
})();