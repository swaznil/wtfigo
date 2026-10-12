
var clicks = 0;
var moveCount = 0;
var errors = 0;
var wetbit = 3;
var pop = document.getElementById('popup');
var gone = false;

function choose(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function popup(message) {
  pop.style.display = 'block';
  document.getElementById('poptxt').innerText = message;
  pop.style.left = (10 + Math.random() * 48) + '%';
  pop.style.top = (5 + Math.random() * 42) + '%';
}

function oops(e) {
  if (e) e.preventDefault();
  popup(choose([
    'ERROR. TRY AGAIN LATER',
    'YOU ARE NOT ALLOWED',
    'PERMISSION DENIED',
    'THIS PAGE DOES NOT EXIST',
    'STOP CLICKING HOME',
    'your computer has been informed',
    'WRONG BUTTON',
    'NOT YOUR WEBSITE'
  ]));
}

function nah(button) {
  moveCount++;
  button.style.position = 'relative';
  button.style.left = (Math.random() * 450 - 200) + 'px';
  button.style.top = (Math.random() * 180 - 90) + 'px';

  if (moveCount > 5) button.innerText = 'STOP CHASING ME';
  if (moveCount > 10) button.style.background = 'red';
  if (moveCount % 6 === 0) popup('PLEASE LEAVE THE BUTTON ALONE');
}

function btnbtn(button) {
  clicks++;

  button.innerText = [
    'WHY', 'STOP', 'HELLo', 'AAHAHAH',
    'CLICK AGAIN', 'NOOO', 'THIS no BUTTON', 'BUTTON yes Button'
  ][clicks % 8];

  document.getElementById('counter').innerText =
    String(13 + clicks).padStart(8, '0');

  if (clicks % 3 === 0) popup('BUTTON HAS STOPPED RESPONDINGING');
  if (clicks % 5 === 0) more_crap();
}

function download() {
  popup('DOWNLOAD COMPLETE. NOTHING DOWNLOADED');

  var a = document.createElement('a');
  a.href = 'data:text/plain,You%20have%20downloaded%20nothing';
  a.download = 'nothing.txt';
  a.click();
}

function more_crap() {
  if (gone) return;
  errors++;

  var a = document.createElement('div');
  a.className = 'warning random';

  a.innerHTML = choose([
    'ERROR ERROR ERROR',
    '404 NOT FOUND',
    'PLEASE WAIT...',
    'SOMETHING WENT WRONG LMAO',
    '???',
    'WARNING WARNING',
    'THIS IS MAYBE NOT A VIRUS',
    'X X X',
    'BOO',
    '<button onclick="more_crap()">MORE ERRORS</button>',
    '<marquee width="150">WHY WHY WHY</marquee>',
    '<input value="help">',
    '<img src="missing.png" width="150" height="50">'
  ]);

  a.style.left = Math.random() * 85 + '%';
  a.style.top = window.scrollY + Math.random() * innerHeight + 'px';
  a.style.fontSize = 15 + Math.random() * 50 + 'px';
  a.style.transform = 'rotate(' + (Math.random() * 50 - 25) + 'deg)';
  a.style.color = ['red', 'lime', 'yellow', 'white', 'magenta'][errors % 5];

  document.body.appendChild(a);

  if (errors % 5 === 0) popup('TOO MANY ERRORS. PLEASE STOP');
  if (errors % 7 === 0) {
    document.body.style.fontFamily = choose([
      'Comic Sans MS', 'Courier New', 'Times New Roman'
    ]);
  }

  if (errors > 20) document.body.classList.add('glitch');

  var scraps = document.querySelectorAll('.random');
  if (scraps.length > 40) scraps[0].remove();
}

function wrong_pw(e) {
  e.preventDefault();
  popup(choose([
    'WRONG PASSWORD',
    'REGISTRATION FAILED',
    'name already taken',
    'YOU ARE NOT HUMAN'
  ]));
  return false;
}

function news() {
  document.getElementById('headline').innerText = choose([
    'roof shoe update: still there',
    '6/9 water off again',
    'stop sending the shoe photo i HAVE IT',
    'someone took the little ladder',
    'the knocking stops when i record it',
    'roof shoe update: gone. ladder also gone',
    'do not answer the second bell'
  ]);
}

function patchsize() {
  wetbit = Math.max(0, Math.min(100, wetbit));
  document.getElementById('howbig').innerText = wetbit;
  document.getElementById('longthing').value = wetbit;
}

function pipe_is_doing_it() {
  document.getElementById('helpanswer').innerText = choose([
    '>_<',
    'wait',
    'three taps then nothing',
    'thats the fridge probably',
    'Unplug the fudging fridge',
    '03:37 again'
  ]);

  wetbit += 7;
  patchsize();
}

function upstairs2() {
  var g = document.getElementById('photo_deleted');
  g.style.display = g.style.display === 'none' ? 'block' : 'none';

  wetbit += 13;
  patchsize();

  document.getElementById('upstairs2').style.borderWidth =
    (1 + Math.random() * 14) + 'px';
}

function putit() {
  var i = document.getElementById('writeit');

  if (!i.value.trim()) {
    popup('you didnt write anything');
    return;
  }

  var p = document.createElement('p');
  p.innerText = '??: ' + i.value;
  document.getElementById('messages').appendChild(p);

  i.value = '';
  popup('its there now');

  wetbit += 9;
  patchsize();
}

function room4again() {
  document.getElementById('r4').innerText = choose([
    '13° / window shut',
    '13° / window open',
    '13° / no battery??',
    '12° / someone moved the chair',
    '13° / wet patch bigger',
    '13°'
  ]);

  document.getElementById('thermometer_no_battery').style.transform =
    'rotate(' + (Math.random() * 32 - 16) + 'deg)';
}

function rag() {
  wetbit -= 17;
  patchsize();

  document.getElementById('cloth').innerText = choose([
    'made it bigger ;)',
    'cloth gone red',
    'needs more bloody paint',
    'its on the other side dammit',
    'leaveeee it'
  ]);

  more_crap();
}

function where_is_my_cable() {
  document.getElementById('missingstuff').innerText = choose([
    'cygenowack extension cable. not the short one.',
    'small steel bowl',
    'USD 20.00',
    'left shoe',
    'the tape with no label',
    'SHH door key (dont post it here)',
    'stop returning the bowl full of water'
  ]);

  document.getElementById('curse').style.fontSize =
    (13 + Math.random() * 40) + 'px';

  wetbit += 4;
  patchsize();
}

function old_foto(e) {
  e.preventDefault();
  popup('old photos are locked. camera is being weird again');
}

function move_some_stuff() {
  var all = Array.from(document.body.children).filter(function(x) {
    return x.tagName === 'P' ||
           x.tagName === 'HR' ||
           x.tagName === 'CENTER';
  });

  all.sort(function() { return Math.random() - .5; });

  all.forEach(function(x) {
    document.body.insertBefore(x, document.getElementById('end'));
  });

  popup('WEBSITE SUCCESSFULLY SORTED');
}

function bye(e) {
  e.preventDefault();
  if (gone) return;

  gone = true;
  clearInterval(titleClock);
  clearInterval(deathClock);
  document.title = 'you are still in the room';

  document.body.innerHTML = '<main id="wrong_door">' +
    '<div style="font-size:60px;color:#930b0b">● &nbsp; ●</div>' +
    '<h1>you failed to leave the room.</h1>' +
    '<p>something on the other side turned the handle back.</p>' +
    '<small>also you were pulling. it says push.</small>' +
    '<p><a href="index.html">try again</a></p>' +
    '<small>the old photos are still there.</small></main>';
}

window.addEventListener('mousemove', function(e) {
  if (gone || Math.random() >= .025) return;

    var x = document.createElement('span');
    x.className = 'mousebit';
    x.innerText = choose(['+', '?', 'X', '!', '0']);
    x.style.left = e.pageX + 'px';
    x.style.top = e.pageY + 'px';
    x.style.color = Math.random() > 0.5 ? 'red' : 'lime';

    document.body.appendChild(x);

    setTimeout(function() {
      x.remove();
    }, 1500);
});

var titleClock = setInterval(function() {
  if (gone) return;

  document.title = choose([
    'COOL WEB SITE 2003',
    'ERROR 0x00',
    'DONT LEAVE',
    'WELCOME !!!',
    'the website is fine',
    'HELLO????'
  ]);
}, 5000);

var deathClock = setInterval(function() {
  if (!gone) {
    document.getElementById('death').innerText =
      Math.floor(Math.random() * 999);
  }
}, 8000);

setTimeout(function() {
  if (!gone) popup('WELCOME. THERE IS A PROBLEM.');
}, 14000);

document.addEventListener('keydown', function(e) {
  if (gone) return;

  if (e.key === 'Escape') {
    pop.style.display = 'none';
  }

  if (e.key === 'Enter' &&
      !e.target.closest('input,button,a,select,form')) {
    more_crap();
  }
});

var totalClicks = 0;

document.addEventListener('click', function() {
  if (gone) return;

  totalClicks++;

  if (totalClicks % 9 === 0) more_crap();

  if (totalClicks % 4 === 0) {
    wetbit++;
    patchsize();
  }
});

var wall = document.createElement('div');
wall.id = 'suj_dont';
wall.innerText = 'dont show this bit to suj';
document.body.appendChild(wall);

setInterval(function() {
  if (!gone) {
    wall.innerText = choose([
      'dont show this bit to aiciagkbkgb',
      'i didnt put that photo there',
      '03:37',
      'leave the little window open'
    ]);
  }
}, 5700);
