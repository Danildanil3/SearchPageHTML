let uk = {
  extsrch: 'Розширений пошук',
  imgsrch: 'Зображення',
  modal_header: 'Знайти&nbsp;сторінки,<br>що&nbsp;містять...',
  text1: "усі ці слова:",
  text2: "точне слово або фразу:",
  text3: "будь-яке з цих слів:",
  text4: "жодне з цих слів:",
  luck: "Мені пощастить",
  mainserc: "Пошук Google",
  search: "Пошук"
};

let en = {
  extsrch: 'Advanced search',
  imgsrch: 'Images',
  modal_header: 'Find&nbsp;pages&nbsp;that<br>contain&nbsp;...',
  text1: "all these words:",
  text2: "exact word or phrase:",
  text3: "any of these words:",
  text4: "none of these words:",
  luck: "I'm Feeling Lucky",
  mainserc: "Google Search",
  search: "Search"
  };

changeLagnuage();

function changeLagnuage(){
  let language = lang.checked ? uk : en;
  document.querySelectorAll('[text]').forEach(el => {
    el.innerHTML = language[el.getAttribute('text')];
  })

  let chose = lang.checked ? 'uk' : 'en';
  var body = document.getElementsByTagName('body')[0];
  var titleUK = document.getElementById('title-uk');
  var titleEN = document.getElementById('title-en');
  var title = {
    uk: titleUK.getAttribute('content'),
    en: titleEN.getAttribute('content')
  }

  body.className = chose;
  document.cookie = document.title = title[chose];
}

function removehash(){
  setTimeout(function(){
    history.replaceState("", document.title, window.location.pathname);
  }, 1);
}

function changeItem() {
  document.getElementById('google').style.width = '12%';
  document.getElementById('google').style.left = '44%';  
}

function rechangeItem() {
  document.getElementById('google').style.width = '10%';
  document.getElementById('google').style.left = '45%';
}

document.getElementById("clearButton").onclick = function(e) {
  document.getElementById("ipt").value = "";
}

function myFunction(event) {
  (event.inputType === 'insertText')?
    document.getElementById("clearButton").style.display = "block" :  document.getElementById("clearButton").style.display = "none";
}