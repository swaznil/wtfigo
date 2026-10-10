
var clicks = 0;

function popup(message) {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('poptxt').innerText = message;
}

function oops(e) {
  if (e) e.preventDefault();
  popup('ERROR. TRY AGAIN LATER');
}

function nah(button) {
  button.style.position = 'relative';
  button.style.left = Math.random() * 100 + 'px';
}

function btnbtn(button) {
  clicks++;
  button.innerText = ['WHY', 'STOP', 'HELLO', 'CLICK AGAIN'][clicks % 4];
  document.getElementById('counter').innerText = '000000' + (13 + clicks);
}

function download() {
  popup('DOWNLOAD FAILED');
}

function more_crap() {
  var p = document.createElement('p');
  p.innerText = 'ERROR ERROR ERROR';
  p.style.color = 'red';
  document.body.appendChild(p);
}