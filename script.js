//active-menu///////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove('active'));
    menuLi[len].classList.add('active');
}


activeMenu();
window.addEventListener("scroll",activeMenu);


//toggle-navbar///////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}

//welcome animation//


const text = "Welcome to SHA-ADA AGRO Limited";
const typedText = document.getElementById("typed-text");
let charIndex = 0;

function typeNextChar() {
  if (charIndex < text.length) {
    typedText.innerHTML += text.charAt(charIndex);
    charIndex++;
    setTimeout(typeNextChar, 150); // speed between letters (adjust as needed)
  }
}

document.addEventListener("DOMContentLoaded", typeNextChar);


//sticky-navbar///////
const header = document.querySelector('header');
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})

//form-submission///////
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent normal form submission

  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Clear form
      successMsg.style.display = 'block'; // Show success message
    } else {
      alert('Something went wrong. Please try again.');
    }
  })
  .catch(error => {
    alert('Error sending message.');
    console.error(error);
  });
});