let toggle = false;
function changeImg() {
    if (toggle === true) {
        document.getElementById('logo-toggle').src  = './img/google-logo.png';
    } else {
       document.getElementById('logo-toggle').src = './img/logo.svg';
       alert(img); 
    }
    toggle = !toggle; 
}

