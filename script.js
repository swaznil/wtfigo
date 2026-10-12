
var clicks = 0;
var moveCount = 0;
var errors = 0;
var chaos = 0;

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
    'your computer has been informed',
    'WRONG BUTTON',
    'NOT YOUR WEBSITE'
  ];

  popup(messages[Math.floor(Math.random() * messages.length)]);
}

function nah(button) {
  moveCount++;

  button.style.position = 'relative';
  button.style.left = Math.random() * 450 - 200 + 'px';
  button.style.top = Math.random() * 180 - 90 + 'px';

  if (moveCount > 5) {
    button.innerText = 'STOP CHASING ME';
  }

  if (moveCount > 10) {
    button.style.background = 'red';
  }

  if (moveCount % 6 === 0) {
    popup('PLEASE LEAVE THE BUTTON ALONE');
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
  chaos++;

  var messages = [
    'ERROR ERROR ERROR',
    '404 NOT FOUND',
    'PLEASE WAIT...',
    'SOMETHING WENT WRONG',
    '???',
    'WARNING WARNING',
    'THIS IS NOT A VIRUS',
    'X X X X',
    'HELLO????',
    '<button onclick="more_crap()">MORE ERRORS</button>',
    '<marquee width="150">WHY WHY WHY</marquee>',
    '<input value="help">',
    '<img src="missing.png" width="150" height="50">'
  ];

  var p = document.createElement('div');
  p.className = 'warning random';

  p.innerHTML = messages[Math.floor(Math.random() * messages.length)];

  p.style.left = Math.random() * 85 + '%';
  p.style.top = window.scrollY + Math.random() * innerHeight + 'px';
  p.style.fontSize = 15 + Math.random() * 50 + 'px';
  p.style.transform = 'rotate(' + (Math.random() * 50 - 25) + 'deg)';

  p.style.color = [
    'red',
    'lime',
    'yellow',
    'white',
    'magenta'
  ][errors % 5];

  document.body.appendChild(p);

  if (errors % 3 === 0) {
    document.body.style.background = '#200000';
  }

  if (errors % 5 === 0) {
    popup('TOO MANY ERRORS. PLEASE STOP');
  }

  if (chaos % 7 === 0) {
    document.body.style.fontFamily = [
      'Comic Sans MS',
      'Courier New',
      'Times New Roman'
    ][Math.floor(Math.random() * 3)];
  }

  if (chaos > 20) {
    document.body.classList.add('glitch');
  }

  var scraps = document.querySelectorAll('.random');

  if (scraps.length > 40) {
    scraps[0].remove();
  }
}

document.addEventListener('mousemove', function(e) {
  if (Math.random() < 0.025) {
    var x = document.createElement('span');

    x.className = 'mousebit';
    x.innerText = ['+', '?', 'X', '!', '0'][Math.floor(Math.random() * 5)];

    x.style.left = e.pageX + 'px';
    x.style.top = e.pageY + 'px';
    x.style.fontSize = Math.random() * 25 + 10 + 'px';
    x.style.color = Math.random() > 0.5 ? 'red' : 'lime';

    document.body.appendChild(x);

    setTimeout(function() {
      x.remove();
    }, 1500);
  }
});

setInterval(function() {
  var titles = [
    'COOL WEB SITE 2003',
    'ERROR 0x00',
    'DONT LEAVE',
    'WELCOME !!!',
    'the website is fine',
    'HELLO????'
  ];

  document.title = titles[Math.floor(Math.random() * titles.length)];
}, 5000);

setTimeout(function() {
  popup('WELCOME. THERE IS A PROBLEM.');
}, 14000);

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    pop.style.display = 'none';
  }

  if (e.key === 'Enter' && !e.target.closest('input,button,a,select')) {
    more_crap();
  }
});

var noise = document.createElement('div');
noise.id = 'noise';
document.body.appendChild(noise);

var totalClicks = 0;

document.addEventListener('click', function() {
  totalClicks++;

  if (totalClicks % 9 === 0) {
    more_crap();
  }
});
