    let mobileMenuButton = document.getElementById("mobile-menu-button");
    let mobileMenu = document.getElementById("mobile-menu");

   
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

   
    let mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    });
    document.addEventListener("DOMContentLoaded", function () {
        let dropdownNavbarLink = document.getElementById("dropdownNavbarLink");
        let dropdownNavbar = document.getElementById("dropdownNavbar");
    
        dropdownNavbarLink.addEventListener("mouseover", function () {
          dropdownNavbar.classList.toggle("hidden");
        });
    });

let dropdownNavbarLink = document.querySelector('#dropdownNavbarLink');
let dropdownNavbar = document.querySelector('#dropdownNavbar');


dropdownNavbarLink.addEventListener('click', (event) => {
    event.preventDefault();
    dropdownNavbar.classList.toggle('open');
});
let container6 = document.querySelector('.container6')
let div1_ctn6 = document.createElement('div')
let div1_1_ctn6 = document.createElement('div')
let div1_2_ctn6 = document.createElement('div')
let div1_3_ctn6 = document.createElement('div')
let div2_ctn6 = document.createElement('div')
let container_carrousel = document.createElement('div')
let carrousel = document.createElement('ul')
let container_btn_carrousel = document.createElement('div')
for (let i = 0; i < 5; i++) {
    let btn_carrousel = document.createElement('button')
    btn_carrousel.classList.add('btn_carrousel')
    container_btn_carrousel.append(btn_carrousel)
    
}

let card = document.createElement('li')
let card2 = document.createElement('li')
let card3 = document.createElement('li')
let card4 = document.createElement('li')
let card5 = document.createElement('li')
let card6 = document.createElement('li')
let card7 = document.createElement('li')

let div_img = document.createElement('div')
let div_img2 = document.createElement('div')
let div_img3 = document.createElement('div')
let div_img4 = document.createElement('div')
let div_img5 = document.createElement('div')
let div_img6 = document.createElement('div')
let div_img7 = document.createElement('div')

let testimonial = document.createElement('div')
let testimonial2 = document.createElement('div')
let testimonial3 = document.createElement('div')
let testimonial4 = document.createElement('div')
let testimonial5 = document.createElement('div')
let testimonial6 = document.createElement('div')
let testimonial7 = document.createElement('div')

let h2 = document.createElement('h2')
let h2_2 = document.createElement('h2')
let h2_3 = document.createElement('h2')
let h2_4 = document.createElement('h2')
let h2_5 = document.createElement('h2')
let h2_6 = document.createElement('h2')
let h2_7 = document.createElement('h2')

let span = document.createElement('span')
let span2 = document.createElement('span')
let span3 = document.createElement('span')
let span4 = document.createElement('span')
let span5 = document.createElement('span')
let span6 = document.createElement('span')
let span7 = document.createElement('span')

card.append(testimonial, div_img, h2, span)
card2.append(testimonial2, div_img2, h2_2, span2)
card3.append(testimonial3, div_img3, h2_3, span3)
card4.append(testimonial4, div_img4, h2_4, span4)
card5.append(testimonial5, div_img5, h2_5, span5)
card6.append(testimonial6, div_img6, h2_6, span6)
card7.append(testimonial7, div_img7, h2_7, span7)


carrousel.append(card, card2, card3, card4, card5, card6, card7)
container_carrousel.append(carrousel)
div2_ctn6.append(container_carrousel)
div1_ctn6.append(div1_1_ctn6, div1_2_ctn6, div1_3_ctn6)
container6.append(div1_ctn6, div2_ctn6, container_btn_carrousel)

container_btn_carrousel.classList.add('container_btn_carrousel')
div1_ctn6.classList.add('div1_ctn6')
div1_1_ctn6.classList.add('div1_1_ctn6')
div1_2_ctn6.classList.add('div1_2_ctn6')
div1_3_ctn6.classList.add('div1_3_ctn6')
div2_ctn6.classList.add('div2_ctn6')
container_carrousel.classList.add('container_carrousel')
carrousel.classList.add('carrousel')
card.classList.add('card')
card2.classList.add('card')
card3.classList.add('card')
card4.classList.add('card')
card5.classList.add('card')
card6.classList.add('card')
card7.classList.add('card')

div_img.classList.add('img')
div_img2.classList.add('img')
div_img3.classList.add('img')
div_img4.classList.add('img')
div_img5.classList.add('img')
div_img6.classList.add('img')
div_img7.classList.add('img')

testimonial.classList.add('testimonial')
testimonial2.classList.add('testimonial')
testimonial3.classList.add('testimonial')
testimonial4.classList.add('testimonial')
testimonial5.classList.add('testimonial')
testimonial6.classList.add('testimonial')
testimonial7.classList.add('testimonial')

h2.classList.add('h2')
h2_2.classList.add('h2')
h2_3.classList.add('h2')
h2_4.classList.add('h2')
h2_5.classList.add('h2')
h2_6.classList.add('h2')
h2_7.classList.add('h2')

span.classList.add('span')
span2.classList.add('span')
span3.classList.add('span')
span4.classList.add('span')
span5.classList.add('span')
span6.classList.add('span')
span7.classList.add('span')

div1_1_ctn6.innerHTML = "TESTIMONIALS"
div1_3_ctn6.innerHTML = "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas."

testimonial.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial2.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial3.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial4.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial5.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial6.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"
testimonial7.innerHTML = "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam"

h2.innerText = "John"
h2_2.innerText = "Ayoub Sathan"
h2_3.innerText = "Ayoub Sathan2"
h2_4.innerText = "Larson"
h2_5.innerText = "Ayoub Sathan5"
h2_6.innerText = "Ayoub Sathan"
h2_7.innerText = "John Larson"
span.innerText = "CEO & Founder"
span2.innerText = "CEO & Founder"
span3.innerText = "CEO & Founder"
span4.innerText = "CEO & Founder"
span5.innerText = "CEO "
span6.innerText = "CEO & Founder"
span7.innerText = "CEO & Founder"

let btn_carrousel = document.querySelectorAll('.btn_carrousel')
    btn_carrousel[0].addEventListener('click', function () {
        carrousel.style.transform = "translateX(65%)"
    })
    btn_carrousel[1].addEventListener('click', function () {
        carrousel.style.transform = "translateX(32.5%)"
    })
    btn_carrousel[2].addEventListener('click', function () {
        carrousel.style.transform = "translateX(0%)"
    })
    btn_carrousel[3].addEventListener('click', function () {
        carrousel.style.transform = "translateX(-32.5%)"
    })
    btn_carrousel[4].addEventListener('click', function () {
        carrousel.style.transform = "translateX(-65%)"
    })
btnIA.addEventListener('click', () => {
  if (containerIA.style.display == "none") {
          containerDev.style.display = "none"
          containerUI.style.display = "none"
          containerIA.style.display = "flex"
  }
})
btnDev.addEventListener('click', () => {

  if (containerDev.style.display == "none") {
      containerDev.style.display = "flex"
      containerIA.style.display = "none"
      containerUI.style.display = "none"
  }
})
btnUI.addEventListener('click', () => {
  if (containerUI.style.display == "none") {
      containerUI.style.display = "flex"
      containerIA.style.display = "none"
      containerDev.style.display = "none"
  }
})
document.addEventListener("DOMContentLoaded", function () {
  let toggleSwitch = document.getElementById("check");
  let prices = document.querySelectorAll(".prices");
  let periodTexts = document.querySelectorAll(".period");
  let initialPrices = Array.from(prices, (priceElement) => parseFloat(priceElement.textContent));
  let initialPeriods = Array.from(periodTexts, (periodElement) => periodElement.textContent);
  function updatePricesAndPeriods() {
    let multiplier = toggleSwitch.checked ? 10 : 1;

    prices.forEach((priceElement, index) => {
      let originalPrice = initialPrices[index];
      let updatedPrice = originalPrice * multiplier;
      priceElement.textContent = updatedPrice.toFixed(2);
    });

    periodTexts.forEach((periodElement, index) => {
      let originalPeriod = initialPeriods[index];
      let updatedPeriod = toggleSwitch.checked ? "/year" : "/month";
      periodElement.textContent = originalPeriod.replace("/month", updatedPeriod);
    });
  }
  toggleSwitch.addEventListener("change", updatePricesAndPeriods);

  updatePricesAndPeriods();
});
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
      let body = this.nextElementSibling;
      let icon = this.querySelector('.accordion-icon');
      if(body.style.height && body.style.height !== '0px'){
          body.style.height = null;
          icon.classList.remove('fa-chevron-up');
          icon.classList.add('fa-chevron-down');
          icon.classList.remove('text-indigo-500'); 
          icon.classList.add('text-black'); 
      } else {
          body.style.height = body.scrollHeight + "px";
          icon.classList.remove('fa-chevron-down');
          icon.classList.add('fa-chevron-up');
          icon.classList.remove('text-black'); 
          icon.classList.add('text-indigo-500'); 
      } 
  });
});

