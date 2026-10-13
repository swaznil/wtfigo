
var clicks = 0;
var moveCount = 0;
var errors = 0;
var wetbit = 3;
var pop = document.getElementById('popup');
var gone = false;
var attic_step = 0;
var photo_misses = 0;
var pw_misses = 0;
var broom_timeout;
var lastboo = 0;
var boo_timeout;

function choose(a) {
  return a[Math.floor(Math.random() * a.length)];
}

function popup(message) {
  pop.style.display = 'block';
  document.getElementById('poptxt').innerText = message;
  var room = document.documentElement.clientWidth - pop.offsetWidth - 18;
  pop.style.left = (9 + Math.random() * Math.max(0, room)) + 'px';
  pop.style.top = (Math.random() * 55) + '%';
}

function oops(e) {
  if (e) e.preventDefault();
  popup(choose([
    'YOU ARE NOT ALLOWED',
    'PERMISSION DENIED BY OWNER',
    'CANNOT CONNECT TO THE INTERNET. YOU ARE ON THE INTERNET.',
    'ERROR ERROR ERROR',
    'your computer has been informed'
  ]));
}

function nah(button) {
  moveCount++;
  button.style.position = 'relative';
  button.style.left = (Math.random() * 550 - 200) + 'px';
  button.style.top = (Math.random() * 210 - 100) + 'px';

  if (moveCount % 4 === 0) button.innerText = 'stop chasing me';
}

function btnbtn(button) {
  clicks++;
  button.innerText = ['WHY', 'STOP', 'HELLo', 'AAHAHAH', 'CLICK AGAIN', 'NOOO', 'THIS no BUTTON', 'BUTTON yes Button'][clicks % 8];
  document.getElementById('counter').innerText = ('00000000' + (13 + clicks)).slice(-8);
  if (clicks % 3 === 0) popup('BUTTON HAS STOPPED RESPONDING');
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
  a.className = 'random';
  a.style.left = Math.random() * 100 + '%';
  a.style.top = window.scrollY + Math.random() * innerHeight + 'px';
  a.style.zIndex = 15 + errors;
  a.style.fontSize = 10 + Math.random() * 65 + 'px';
  a.style.color = ['red', 'lime', 'yellow', 'white', '#7b0a08', '#767676'][errors % 6];
  a.style.background = Math.random() > 0.65 ? '#050505' : '';

  a.innerHTML = [
    'ERROR',
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
    '<img src="missing.png" width="190" height="60">',
    '<a href="#" onclick="oops(event)">free</a>'
  ][errors % 10];

  document.body.appendChild(a);

  var scraps = document.querySelectorAll('.random');
  if (scraps.length > 55) scraps[0].remove();

  if (errors % 4 === 0) {
    document.body.style.fontFamily = [
      'Times New Roman', 'Comic Sans MS', 'Courier New'
    ][errors % 3];
  }

  if (errors > 35) document.getElementById('panic').style.display = 'block';
}

function wrong_pw(e) {
  e.preventDefault();

  if (attic_step === 2) {
    popup('door unlocked. use the little exit at the bottom.');
    return false;
  }

  if (attic_step === 0) {
    popup('not that password. find the key first.');
    return false;
  }

  if (document.getElementById('pw2').value.trim() !== '0337') {
    pw_misses++;
    popup(pw_misses >= 2
      ? 'the key says 03:37. four digits. no colon.'
      : 'not that password. look at the back of the key.');
    return false;
  }

  attic_step = 2;
  var door = document.getElementById('end');
  door.innerText = 'door unlocked (leave)';
  door.style.color = '#c5bca4';
  door.style.fontSize = '13px';
  popup('door unlocked. use the little exit at the bottom.');
  return false;
}

function old_foto(e) {
  e.preventDefault();
  document.body.classList.add('in_the_puzzle');
  if (attic_step === 0) popup('photo locked. six digits. camera knows. try VERIFY.');
  if (attic_step === 1) popup('password on the back of the key. use REGISTER.');
  if (attic_step === 2) popup('door unlocked. little exit. bottom of the page.');
}

function check_the_photo(e) {
  e.preventDefault();
  document.body.classList.add('in_the_puzzle');
  if (attic_step > 0) {
    show_the_key();
    return false;
  }
  var code = document.getElementById('photo_pw').value.replace(/[\s:]/g, '');
  if (code !== '021408') {
    photo_misses++;
    popup(photo_misses >= 2
      ? 'camera says 02:14:08. six digits. leave out the colons.'
      : 'wrong. thats not when the camera stopped.');
    return false;
  }
  attic_step = 1;
  show_the_key();
  return false;
}

function show_the_key() {
  pop.style.display = 'none';
  document.getElementById('photo_deleted').style.display = 'block';

  var picture = document.getElementById('keyprint');
  picture.hidden = false;
  picture.scrollIntoView({ block: 'center' });
  picture.focus({ preventScroll: true });

  document.getElementById('helpanswer').innerText = 'zero. three. three. seven.';
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
  if (attic_step > 0) {
    document.getElementById('helpanswer').innerText = 'zero. three. three. seven.';
    return;
  }
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
  var photo = document.getElementById('photo_deleted');
  photo.style.display = photo.style.display === 'none' ? 'block' : 'none';
  if (photo.style.display === 'block') oh_no();
  wetbit += 13;
  patchsize();
}

function putit() {
  var input = document.getElementById('writeit');
  if (!input.value.trim()) return popup('you didnt write anything');
  var p = document.createElement('p');
  p.innerText = '??: ' + input.value;
  document.getElementById('messages').appendChild(p);
  input.value = '';
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

function move_some_stuff() {
  var all = Array.from(document.body.children).filter(function(el) {
    return ['P', 'HR', 'CENTER'].includes(el.tagName);
  });
  all.sort(function() { return Math.random() - 0.5; });
  all.forEach(function(el) { document.body.insertBefore(el, document.getElementById('end')); });
  popup('WEBSITE SUCCESSFULLY SORTED');
}

function bye(e) {
  e.preventDefault();
  if (gone) return;
  gone = true;
  clearTimeout(welcome_clock);
  clearTimeout(boo_timeout);

  if (attic_step === 2) {
    pop.style.display = 'none';
    document.getElementById('panic').style.display = 'none';
    document.getElementById('cupboard').hidden = false;
    document.body.classList.add('in_the_cupboard');
    document.getElementById('outside2').focus();
    oh_no(true);
    broom_timeout = setTimeout(finish_the_broom, 1200);
    return;
  }

  document.title = 'you are still in the room';

  document.body.innerHTML =
    '<main id="wrong_door">' +
    '<div class="door_eyes" aria-hidden="true">● &nbsp; ●<span>︶</span></div>' +
    '<h1>you failed to leave the room.</h1>' +
    '<p>something on the other side turned the handle back.</p>' +
    '<small>also you were pulling. it says push.</small>' +
    '<p><a id="again_wrong" href="index.html">try again</a></p>' +
    '<small class="door_hint">the old photos are still there.</small></main>';

  document.getElementById('again_wrong').focus({ preventScroll: true });
}

function finish_the_broom() {
  clearTimeout(broom_timeout);
  clearTimeout(boo_timeout);
  document.getElementById('boo2').hidden = true;
  document.getElementById('broom2').hidden = false;
  document.getElementById('again2').hidden = false;
}

function mouse(e) {
  if (gone) return;
  if (Math.random() < 0.012 && errors < 25) {
    var d = document.createElement('span');
    d.innerText = choose(['+', '?', 'x', '!']);
    d.style.position = 'absolute';
    d.style.color = Math.random() > 0.5 ? 'red' : 'green';
    d.style.left = e.pageX + 'px';
    d.style.top = e.pageY + 'px';
    d.style.pointerEvents = 'none';
    document.body.appendChild(d);
    setTimeout(function() { d.remove(); }, 2000);
  }
}

function key(e) {
  if (e.key !== 'Escape') return;
  if (gone && attic_step === 2) return finish_the_broom();
  pop.style.display = 'none';
  document.getElementById('panic').style.display = 'none';
  document.getElementById('boo2').hidden = true;
}

var totalClicks = 0;
document.addEventListener('click', function() {
  if (gone) return;
  totalClicks++;
  if (totalClicks % 4 === 0) {
    wetbit++;
    patchsize();
  }
  if (totalClicks % 9 === 0) more_crap();
});

var welcome_clock = setTimeout(function() {
  if (!gone) popup('WELCOME. THERE IS A PROBLEM.');
}, 14000);

function oh_no(force) {
  if (gone && !force) return;
  var ghost = document.getElementById('boo2');
  ghost.style.left = (30 + Math.random() * 40) + 'vw';
  ghost.style.top = (15 + Math.random() * 30) + 'vh';
  ghost.hidden = false;
  clearTimeout(boo_timeout);
  boo_timeout = setTimeout(function() { ghost.hidden = true; }, 850);
}
