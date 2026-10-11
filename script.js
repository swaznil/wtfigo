
var clicks = 0;
var moveCount = 0;
var errors = 0;

var pop = document.getElementById('popup');

function popup(message) {
  pop.style.display = 'block';
  document.getElementById('poptxt').innerText = message;

  pop.style.left = Math.random() * 50 + 10 + '%';
  pop.style.top = Math.random() * 40 + 5 + '%';
}

function oops(e) {
  if (e) e.preventDefault();

  var messages = [
    'ERROR. TRY AGAIN LATER',
    'YOU ARE NOT ALLOWED',
    'PERMISSION DENIED',
    'THIS PAGE DOES NOT EXIST',
    'STOP CLICKING HOME',
    'your computer has been informed'
  ];

  popup(messages[Math.floor(Math.random() * messages.length)]);
}

function nah(button) {
  moveCount++;

  button.style.position = 'relative';
  button.style.left = Math.random() * 350 - 150 + 'px';
  button.style.top = Math.random() * 120 - 60 + 'px';

  if (moveCount > 5) {
    button.innerText = 'STOP CHASING ME';
  }

  if (moveCount > 10) {
    button.style.background = 'red';
  }
}

function btnbtn(button) {
  clicks++;

  var names = [
    'WHY',
    'STOP',
    'HELLO',
    'AAAH',
    'CLICK AGAIN',
    'no',
    'THIS IS A BUTTON',
    'BUTTON 2'
  ];

  button.innerText = names[clicks % names.length];

  document.getElementById('counter').innerText =
    String(13 + clicks).padStart(8, '0');

  if (clicks % 3 === 0) {
    popup('BUTTON HAS STOPPED RESPONDING');
  }

  if (clicks % 5 === 0) {
    more_crap();
  }
}

function download() {
  popup('DOWNLOAD COMPLETE. NOTHING DOWNLOADED');

  var file = document.createElement('a');

  file.href = 'data:text/plain,You have downloaded nothing';
  file.download = 'nothing.txt';

  document.body.appendChild(file);
  file.click();
  file.remove();
}

function more_crap() {
  errors++;

  var messages = [
    'ERROR ERROR ERROR',
    '404 NOT FOUND',
    'PLEASE WAIT...',
    'SOMETHING WENT WRONG',
    '???',
    'WARNING WARNING',
    'THIS IS NOT A VIRUS',
    'X X X X',
    'HELLO????'
  ];

  var p = document.createElement('p');
  p.className = 'warning random';

  p.innerText = messages[Math.floor(Math.random() * messages.length)];

  p.style.left = Math.random() * 80 + '%';
  p.style.top = window.scrollY + Math.random() * 600 + 'px';
  p.style.fontSize = 15 + Math.random() * 45 + 'px';
  p.style.transform = 'rotate(' + (Math.random() * 40 - 20) + 'deg)';

  p.style.color = [
    'red',
    'lime',
    'yellow',
    'white'
  ][errors % 4];

  document.body.appendChild(p);

  if (errors % 3 === 0) {
    document.body.style.background = '#200000';
  }

  if (errors % 5 === 0) {
    popup('TOO MANY ERRORS. PLEASE STOP');
  }
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    pop.style.display = 'none';
  }
});
