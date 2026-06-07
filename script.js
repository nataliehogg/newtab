'use strict';

// ============================================================
// CONFIGURATION — add your Unsplash Access Key here.
// Get one free at: https://unsplash.com/developers
// Without a key the background falls back to a gradient.
// ============================================================
const UNSPLASH_ACCESS_KEY = 'cXAiHOTB8pYKNXODphDHejGyBWxw1t4aBXYX6Qe5mkw';
const NAME = 'Natalie';

// ============================================================
// QUOTES — shown one per day, cycles through the list
// ============================================================
const QUOTES = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa" },
  { text: "When you reach the end of your rope, tie a knot in it and hang on.", author: "Franklin D. Roosevelt" },
  { text: "Don't judge each day by the harvest you reap, but by the seeds that you plant.", author: "Robert Louis Stevenson" },
  { text: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", author: "Helen Keller" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Do not go where the path may lead; go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
  { text: "You will face many defeats in life, but never let yourself be defeated.", author: "Maya Angelou" },
  { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "Many of life's failures are people who did not realize how close they were to success when they gave up.", author: "Thomas Edison" },
  { text: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Darkness cannot drive out darkness; only light can do that.", author: "Martin Luther King Jr." },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { text: "The most wasted of all days is one without laughter.", author: "E.E. Cummings" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "What we think, we become.", author: "Buddha" },
  { text: "All our dreams can come true, if we have the courage to pursue them.", author: "Walt Disney" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "If you're going through hell, keep going.", author: "Winston Churchill" },
  { text: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { text: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { text: "We know what we are, but know not what we may be.", author: "William Shakespeare" },
  { text: "The mountains are calling and I must go.", author: "John Muir" },
  { text: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
  { text: "In every walk with nature, one receives far more than he seeks.", author: "John Muir" },
  { text: "Of all the paths you take in life, make sure a few of them are dirt.", author: "John Muir" },
  { text: "Not all those who wander are lost.", author: "J.R.R. Tolkien" },
  { text: "There is pleasure in the pathless woods.", author: "Lord Byron" },
  { text: "Nature always wears the colors of the spirit.", author: "Ralph Waldo Emerson" },
  { text: "Adopt the pace of nature: her secret is patience.", author: "Ralph Waldo Emerson" },
  { text: "Look deep into nature, and then you will understand everything better.", author: "Albert Einstein" },
  { text: "The earth has music for those who listen.", author: "George Santayana" },
  { text: "I went to the woods because I wished to live deliberately.", author: "Henry David Thoreau" },
  { text: "It's not what you look at that matters, it's what you see.", author: "Henry David Thoreau" },
  { text: "Heaven is under our feet as well as over our heads.", author: "Henry David Thoreau" },
  { text: "It is not the mountain we conquer but ourselves.", author: "Edmund Hillary" },
  { text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
  { text: "Two roads diverged in a wood, and I took the one less traveled by.", author: "Robert Frost" },
  { text: "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.", author: "T.S. Eliot" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "W.B. Yeats" },
  { text: "Kites rise highest against the wind, not with it.", author: "Winston Churchill" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" },
  { text: "The secret of change is to focus all of your energy not on fighting the old, but on building the new.", author: "Socrates" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
  { text: "A journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "The greatest wealth is to live content with little.", author: "Plato" },
  { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { text: "A mind that is stretched by a new experience can never go back to its old dimensions.", author: "Oliver Wendell Holmes" },
  { text: "Life is short, and it's up to you to make it sweet.", author: "Sarah Louise Delany" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "I am not afraid of storms, for I am learning how to sail my ship.", author: "Louisa May Alcott" },
  { text: "It does not do to dwell on dreams and forget to live.", author: "J.K. Rowling" },
  { text: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
  { text: "Life is either a daring adventure or nothing at all.", author: "Helen Keller" },
  { text: "The purpose of life is to live it, to taste experience to the utmost.", author: "Eleanor Roosevelt" },
  { text: "What you do speaks so loudly that I cannot hear what you say.", author: "Ralph Waldo Emerson" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "We do not inherit the earth from our ancestors; we borrow it from our children.", author: "Native American Proverb" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker" },
  { text: "Not I, nor anyone else can travel that road for you.", author: "Walt Whitman" },
  { text: "Keep close to Nature's heart and break clear away once in a while, climb a mountain or spend a week in the woods.", author: "John Muir" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { text: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
  { text: "Everything has beauty, but not everyone sees it.", author: "Confucius" },
  { text: "Nothing is impossible. The word itself says 'I'm possible'.", author: "Audrey Hepburn" },
  { text: "Try to be a rainbow in someone's cloud.", author: "Maya Angelou" },
  { text: "You become what you believe.", author: "Oprah Winfrey" },
  { text: "Life itself is the most wonderful fairy tale.", author: "Hans Christian Andersen" },
  { text: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
  { text: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { text: "The world is full of magical things patiently waiting for our wits to grow sharper.", author: "Bertrand Russell" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "When it is dark enough, you can see the stars.", author: "Ralph Waldo Emerson" },
];

// ============================================================
// HELPERS
// ============================================================

function todayKey() {
  // "YYYY-MM-DD" in local time
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// Simple deterministic hash so the same date always maps to the same quote
function dateHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

// ============================================================
// BACKGROUND IMAGE
// ============================================================

async function loadBackground() {
  const bg = document.getElementById('bg');
  const cacheKey = 'nb_bg';
  const stored = JSON.parse(localStorage.getItem(cacheKey) || '{}');

  if (stored.date === todayKey() && stored.url) {
    bg.style.backgroundImage = `url(${stored.url})`;
    return;
  }

  if (UNSPLASH_ACCESS_KEY === 'YOUR_UNSPLASH_ACCESS_KEY_HERE') {
    applyFallbackGradient(bg);
    return;
  }

  const QUERIES = ['mountains', 'pine forest', 'misty forest', 'rainier', 'pacific northwest', 'waterfall', 'old growth forest', 'evergreen forest', 'mountain lake', 'fog forest', 'ferns', 'nature', 'glacier', 'starry sky', 'trees', 'landscape', 'dolomites', 'alps', 'alpine meadow'];
  try {
    const query = QUERIES[dateHash(todayKey()) % QUERIES.length];
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    if (!res.ok) throw new Error(`Unsplash ${res.status}: ${await res.text()}`);
    const data = await res.json();
    const url = `${data.urls.raw}&w=3840&q=95&auto=format`;
    localStorage.setItem(cacheKey, JSON.stringify({ date: todayKey(), url }));
    bg.style.backgroundImage = `url(${url})`;
  } catch (err) {
    console.error('[newtab] Unsplash load failed:', err);
    applyFallbackGradient(bg);
  }
}

function applyFallbackGradient(el) {
  // Subtle mountain-dusk palette when no photo is available
  el.style.background = 'linear-gradient(160deg, #1a1a2e 0%, #16213e 45%, #0f3460 75%, #1a2a4a 100%)';
}

// ============================================================
// TIME + GREETING
// ============================================================

function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('time-display').textContent = `${h}:${m}`;

  const hour = now.getHours();
  let greeting;
  if (hour < 5)       greeting = 'Good night';
  else if (hour < 12) greeting = 'Good morning';
  else if (hour < 17) greeting = 'Good afternoon';
  else                greeting = 'Good evening';
  document.getElementById('greeting').textContent = `${greeting}, ${NAME}`;
}

// ============================================================
// QUOTE
// ============================================================

function loadQuote() {
  const idx = dateHash(todayKey()) % QUOTES.length;
  const { text, author } = QUOTES[idx];
  document.getElementById('quote-text').textContent = `"${text}"`;
  document.getElementById('quote-author').textContent = `— ${author}`;
}

// ============================================================
// FOCUS MODE TOGGLE
// ============================================================

let focusMode = false;

document.getElementById('focus-toggle').addEventListener('click', () => {
  focusMode = !focusMode;
  document.body.classList.toggle('focus-mode', focusMode);
  document.getElementById('focus-toggle').textContent = focusMode ? 'Exit Focus' : 'Focus';
});

// ============================================================
// POMODORO TIMER
// ============================================================

const WORK_SECONDS  = 25 * 60;
const BREAK_SECONDS =  5 * 60;

const timer = {
  phase:      'work', // 'work' | 'break'
  remaining:  WORK_SECONDS,
  running:    false,
  intervalId: null,
};

function formatTime(s) {
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
}

function setPlayPauseIcon(running) {
  document.getElementById('icon-play').style.display  = running ? 'none' : '';
  document.getElementById('icon-pause').style.display = running ? ''     : 'none';
}

function setPhaseUI(phase) {
  document.getElementById('timer-display').dataset.phase = phase;
}

function renderTimer() {
  document.getElementById('timer-display').textContent = formatTime(timer.remaining);
  setPhaseUI(timer.phase);
}

function tick() {
  if (timer.remaining > 0) {
    timer.remaining--;
    renderTimer();
  } else {
    phaseComplete();
  }
}

function phaseComplete() {
  clearInterval(timer.intervalId);
  timer.running = false;
  setPlayPauseIcon(false);

  if (timer.phase === 'work') {
    incrementStreak();
    timer.phase     = 'break';
    timer.remaining = BREAK_SECONDS;
  } else {
    timer.phase     = 'work';
    timer.remaining = WORK_SECONDS;
  }

  renderTimer();
}

document.getElementById('start-pause-btn').addEventListener('click', () => {
  if (timer.running) {
    clearInterval(timer.intervalId);
    timer.running = false;
    setPlayPauseIcon(false);
  } else {
    timer.intervalId = setInterval(tick, 1000);
    timer.running = true;
    setPlayPauseIcon(true);
  }
});

document.getElementById('reset-btn').addEventListener('click', () => {
  clearInterval(timer.intervalId);
  timer.running   = false;
  timer.phase     = 'work';
  timer.remaining = WORK_SECONDS;
  renderTimer();
  setPlayPauseIcon(false);
});

// ============================================================
// STREAK (saved per calendar day)
// ============================================================

function getStreaks() {
  return JSON.parse(localStorage.getItem('nb_streaks') || '{}');
}

function getTodayCount() {
  return getStreaks()[todayKey()] || 0;
}

function incrementStreak() {
  const streaks = getStreaks();
  const today   = todayKey();
  streaks[today] = (streaks[today] || 0) + 1;
  localStorage.setItem('nb_streaks', JSON.stringify(streaks));
  renderDots();
}

function makeDots(count) {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'dot';
    frag.appendChild(d);
  }
  return frag;
}

function renderDots() {
  const count = getTodayCount();

  // Focus panel
  const container = document.getElementById('streak-dots');
  const label     = document.getElementById('streak-count');
  container.innerHTML = '';
  container.appendChild(makeDots(count));
  label.textContent = count > 0 ? `${count} pomodoro${count === 1 ? '' : 's'} today` : '';

  // Main page
  const main = document.getElementById('streak-main');
  main.innerHTML = '';
  if (count === 0) {
    const empty = document.createElement('div');
    empty.className = 'dot-empty';
    main.appendChild(empty);
  } else {
    main.appendChild(makeDots(count));
  }
}

// ============================================================
// CALENDAR POPUP
// ============================================================

function calDayHTML(day, count, isToday, isMuted, isFuture) {
  const cls = ['cal-day', isToday && 'today', isMuted && 'muted', isFuture && 'future']
    .filter(Boolean).join(' ');
  let dots = '';
  for (let i = 0; i < count; i++) dots += '<div class="cal-dot"></div>';
  return `<div class="${cls}"><span class="cal-num">${day}</span><div class="cal-dots-row">${dots}</div></div>`;
}

function buildCalendarHTML() {
  const streaks = getStreaks();
  const now     = new Date();
  const year    = now.getFullYear();
  const month   = now.getMonth();

  const MONTHS = ['January','February','March','April','May','June',
                  'July','August','September','October','November','December'];

  const daysInMonth     = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();
  const firstDow        = (new Date(year, month, 1).getDay() + 6) % 7; // Mon = 0

  const prevMonth = month === 0 ? 11 : month - 1;
  const prevYear  = month === 0 ? year - 1 : year;

  let html = `<div id="cal-title">${MONTHS[month]} ${year}</div><div id="cal-grid">`;

  for (const d of ['M','T','W','T','F','S','S']) {
    html += `<div class="cal-hdr">${d}</div>`;
  }

  // Previous-month days filling the first row
  for (let i = firstDow - 1; i >= 0; i--) {
    const day = daysInPrevMonth - i;
    const key = `${prevYear}-${String(prevMonth + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    html += calDayHTML(day, streaks[key] || 0, false, true, false);
  }

  // Current-month days
  for (let day = 1; day <= daysInMonth; day++) {
    const key    = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    const isToday  = day === now.getDate();
    const isFuture = day > now.getDate();
    html += calDayHTML(day, streaks[key] || 0, isToday, false, isFuture);
  }

  html += '</div>';
  return html;
}

function openCalendar() {
  document.getElementById('calendar-inner').innerHTML = buildCalendarHTML();
  document.getElementById('calendar-popup').classList.remove('hidden');
  document.getElementById('calendar-backdrop').classList.remove('hidden');
}

function closeCalendar() {
  document.getElementById('calendar-popup').classList.add('hidden');
  document.getElementById('calendar-backdrop').classList.add('hidden');
}

document.getElementById('streak-main').addEventListener('click', openCalendar);
document.getElementById('streak-main').addEventListener('keydown', e => {
  if (e.key === 'Enter' || e.key === ' ') openCalendar();
});
document.getElementById('calendar-backdrop').addEventListener('click', closeCalendar);

// ============================================================
// INIT
// ============================================================

loadBackground();
loadQuote();
updateTime();
setInterval(updateTime, 1000);
renderTimer();
renderDots();
