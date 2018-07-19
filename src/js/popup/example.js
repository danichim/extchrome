const helper = {
  loadFile() {
    var input, file, fr;
  
    if (typeof window.FileReader !== 'function') {
        bodyAppend("p", "The file API isn't supported on this browser yet.");
        return;
    }
  
    input = document.getElementById('fileinput');
    if (!input) {
        bodyAppend("p", "Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
        bodyAppend("p", "This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
        bodyAppend("p", "Please select a file before clicking 'Load'");
    }
    else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }
  
    function receivedText() {
        showResult(fr, "Text");
  
        fr = new FileReader();
        fr.onload = receivedBinary;
        fr.readAsBinaryString(file);
    }
  
    function receivedBinary() {
        showResult(fr, "Binary");
    }
  },

  showResult(fr, label) {
    var markup, result, n, aByte, byteStr;
  
    markup = [];
    result = fr.result;
    for (n = 0; n < result.length; ++n) {
        aByte = result.charCodeAt(n);
        byteStr = aByte.toString(16);
        if (byteStr.length < 2) {
            byteStr = "0" + byteStr;
        }
        markup.push(byteStr);
    }
    bodyAppend("p", label + " (" + result.length + "):");
    bodyAppend("pre", markup.join(" "));
  },

  bodyAppend(tagName, innerHTML) {
    var elm;
  
    elm = document.createElement(tagName);
    elm.innerHTML = innerHTML;
    document.body.appendChild(elm);
  }
}

export default helper;
