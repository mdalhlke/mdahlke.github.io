//alert('Hello, world')

function addListItem(text){
  list = document.querySelector('ul');
  item = document.createElement('li');
  item.innerText = text;
  list.appendChild(item);
}

function action() {
  console.log("You clicked the button.");
}

function popOutHeading(){
  $('h1').animate({fontSize: "50px"},2000);
  $('h1').animate({fontSize: "50px"},2000);
  $('h1').animate({fontSize: "38px"},2000);
}

function addBorderToPic(){
  $('#sandiego').css({border: '5px #191970'});
}

function fadeOutCurrentElement(){
  $(this).fadeOut();
}

function fadeImage() {
  $('#sandiego').fadeToggle(4000,'swing');
}

function setupHandlers() {
  $('#sandiego').on('click', fadeImage);
  $('.fab').on('click', fadeImage);
  $('#sandiego').on('mouseenter', addBorderToPic);
}

$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 50) {
         $('.menu').addClass('fixed');
     }
     else {
         $('.menu').removeClass('fixed');
     }
});


/**function moveWhenClicked() {
  $("#sandiego").animate({left:"30px", right:"30px"} 2000);
}**/

$(document).ready(setupHandlers); // 'ready' only goes through a funtion when the document is ready
$(document).ready(popOutHeading);
