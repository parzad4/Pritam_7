

// ====== EDIT THIS: your 6 photos + notes live here ======
// Replace each `photo` path with your real image, e.g. "assets/month-1.jpg"
// defaultNote is the fixed message you write for that month — Dia can't edit it.
const MONTHS = [
  { n: 1, label: "1st Month", photo: "1month.jpg", defaultNote: `This month wasn't about being perfect.
It was about being honest.
Two people carrying different scars, trying to understand each other without letting those scars hurt the person standing in front of them.
We slowly learned each other's hearts.
We learned what made us smile.
What made us overthink.
What made us afraid.
And instead of pretending to be okay, we chose to be real with each other.
I still remember us bringing random flowers for one another.
Those little flowers carried so much love.
Looking back now...
I realize I wasn't just getting to know my girlfriend.
I was falling in love with my best friend.` },
  { n: 2, label: "2nd Month", photo: "2month.jpg", defaultNote: `Choosing Peace Together
Little by little, our past stopped controlling our present.
Whenever one of us felt weak, the other became strong.
Whenever one of us overthought, the other brought peace.
We stopped fighting our past alone.
We started fighting it together.
Every conversation made us understand each other more.
Every random flower became another silent "I love you."
My love for you grew without making any noise.
One day I simply realized...
You had already become my peace.` },
  { n: 3, label: "3rd Month", photo: "3months.jpg", defaultNote: `Healing Became Our Love Language
This month felt lighter.
We laughed more.
We teased each other more.
We became the cute couple we always wanted to be.
Every late-night conversation, every random joke, every flower, every little moment became another piece of our healing.
Without even realizing it...
You fixed parts of me I thought would stay broken forever.
You made me smile differently.
You made my days brighter.
You made love feel safe.` },
  { n: 4, label: "4th Month", photo: "4month.jpg", defaultNote: `Dreaming About Forever
By now, most of our old wounds had started becoming memories instead of pain.
We weren't only talking about today anymore.
We started talking about our future.
Our little house.
Our official dates.
Our dreams.
Our forever.
You wrote me a handwritten letter that I'll always treasure.
We made paper rings together.
We went on random chiya dates.
We still surprised each other with random flowers, just because seeing each other smile was enough.
Around this time, I also started changing in ways you may not have fully noticed.
I looked at the future we kept dreaming about, and I realized I wanted to become someone who could protect that future.
So I began letting go of the habits that never truly belonged in the life I wanted with you.
Slowly, I started leaving smoking and drinking behind.
Not because you forced me.
Not because you asked me to.
But because I loved you enough to want a healthier, better version of myself.
I never wanted anything I chose today to become something that could hurt you tomorrow.
Loving you didn't change who I was.
It inspired me to become who I wanted to be.` },
  { n: 5, label: "5th Month", photo: "5month.jpg", defaultNote: `The Month My Heart Overflowed
This month was unforgettable.
I gave you a crochet bouquet because I wanted to celebrate us with something that would last.
Then you surprised me with something even more beautiful.
You made a bouquet with your own hands.
You probably don't even know what I felt in that moment.
That wasn't just a bouquet.
That was your time.
Your effort.
Your love.
No expensive gift could ever replace what I felt while holding something you created for me.
By this time, I had completely left smoking and drinking behind.
Every day without them reminded me why I had made that choice.
Because every future I imagined had you standing beside me.
I wanted to take care of myself so I could take care of the life we dream about together.
For the first time in my life...
I felt loved in a way I had never experienced before.
Pure.
Warm.
Safe.
Real.` },
  { n: 6, label: "6th Month", photo: "6month.jpg", defaultNote: `Six Months Down...
Forever To Go...
Today marks six beautiful months together.
Six months of trust.
Six months of healing.
Six months of random flowers.
Six months of handwritten letters.
Six months of paper rings.
Six months of chai dates.
Six months of laughter.
Six months of choosing each other over and over again.
We have even faced moments that scared us.
Moments where we worried about what the future might bring.
But instead of letting fear separate us, we held each other's hands and faced everything together.
That's what makes our love so special.
We're not perfect.
We're simply two people who refuse to stop choosing each other.
When I look back, I don't just see memories.
I see my buddy becoming the love of my life.
I see my best friend becoming my home.
I see the person who taught me that love isn't about grand gestures.
It's about staying.
Healing.
Growing.
Choosing.
Every single day.
If these six months have already given me so many beautiful memories...
I can't wait to see what six years...
Sixty years...
Or a lifetime with you will look like.
Thank you for walking into my life.
Thank you for staying.
Thank you for believing in me.
Thank you for loving every version of me, even while I was learning how to become better.
Happy six months, my baby.
I loved you yesterday.
I love you today.
And I'll keep loving you through every tomorrow that life blesses us with.
Forever starts with us. ❤️` },
];

const ORDINAL_TITLE = {
  1: "1st Month", 2: "2nd Month", 3: "3rd Month",
  4: "4th Month", 5: "5th Month", 6: "6th Month"
};

// ---------- Scene 0 -> Scene 1: message to envelope ----------
const messageScene = document.getElementById('message-scene');
const toEnvelopeBtn = document.getElementById('to-envelope-btn');

toEnvelopeBtn.addEventListener('click', () => {
  messageScene.classList.add('d-none');
  envelopeScene.classList.remove('d-none');
});

// ---------- Scene 1: Envelope open ----------
const envelope = document.getElementById('envelope');
const envelopeScene = document.getElementById('envelope-scene');
const letterScene = document.getElementById('letter-scene');

function openEnvelope(){
  if (envelope.classList.contains('open')) return;
  envelope.classList.add('open');
  setTimeout(() => {
    envelopeScene.classList.add('d-none');
    letterScene.classList.remove('d-none');
    buildFanGallery();
  }, 850);
}
envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') openEnvelope();
});

// ---------- Scene 2: dim film-reel gallery (display only, not clickable) ----------
const fanWrap = document.getElementById('fan-wrap');

function buildFanGallery(){
  fanWrap.innerHTML = '';
  MONTHS.forEach((m) => {
    const card = document.createElement('div');
    card.className = 'fan-card';

    const photoInner = m.photo
      ? `<img src="${m.photo}" alt="${m.label}" style="width:100%;height:100%;object-fit:cover;border-radius:2px;">`
      : `&#10084;`;

    card.innerHTML = `
      <div class="fan-photo">${photoInner}</div>
      <div class="fan-label">${m.label}</div>
    `;
    fanWrap.appendChild(card);
  });
}

// ---------- Month tabs (left scroll list) ----------
const monthListItems = document.querySelectorAll('#month-list li');
monthListItems.forEach(li => {
  li.querySelector('.month-tab').addEventListener('click', () => {
    showMonth(parseInt(li.dataset.month, 10));
  });
});

// ---------- Month detail view ----------
const fanGallery = document.getElementById('fan-gallery');
const monthDetail = document.getElementById('month-detail');
const monthPhoto = document.getElementById('month-photo');
const monthTitle = document.getElementById('month-title');
const monthNote = document.getElementById('month-note');
const backBtn = document.getElementById('back-to-gallery');

function showMonth(n){
  const data = MONTHS.find(m => m.n === n);
  if (!data) return;

  monthListItems.forEach(li => {
    li.classList.toggle('active', parseInt(li.dataset.month, 10) === n);
  });

  monthTitle.textContent = "— " + data.label;
  monthPhoto.src = data.photo || '';
  monthPhoto.alt = data.label;
  monthPhoto.style.display = data.photo ? 'block' : 'none';

  monthNote.textContent = data.defaultNote || '';
  monthNote.dataset.month = n;

  fanGallery.classList.add('d-none');
  monthDetail.classList.remove('d-none');
}

const mailBtn = document.getElementById('mail-note');
mailBtn.addEventListener('click', () => {
  const n = monthNote.dataset.month;
  const label = ORDINAL_TITLE[n] || (n + " Month");
  const subject = `A note from our ${label} 💌`;
  const body = monthNote.textContent || "";
  const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
});

backBtn.addEventListener('click', () => {
  monthDetail.classList.add('d-none');
  fanGallery.classList.remove('d-none');
  monthListItems.forEach(li => li.classList.remove('active'));
});