document.addEventListener('DOMContentLoaded', function () {
    var dropdownItem = document.querySelector('.cascata11');
    var dropdown = document.querySelector('.cascata1');

    dropdownItem.addEventListener('mouseenter', function (e) {
        dropdown.classList.add('show');
    });
    dropdownItem.addEventListener('mouseleave', function () {
        dropdown.classList.remove('show');
    })

})
document.addEventListener('DOMContentLoaded', function () {
    var dropdownItem = document.querySelector('.cascata22');
    var dropdown = document.querySelector('.cascata2');

    dropdownItem.addEventListener('mouseenter', function (e) {
        dropdown.classList.add('show');
    });
    dropdownItem.addEventListener('mouseleave', function () {
        dropdown.classList.remove('show');
    })

})
document.addEventListener('DOMContentLoaded', function () {
    var dropdownItem = document.querySelector('.cascata33');
    var dropdown = document.querySelector('.cascata3');

    dropdownItem.addEventListener('mouseenter', function (e) {
        dropdown.classList.add('show');
    });
    dropdownItem.addEventListener('mouseleave', function () {
        dropdown.classList.remove('show');
    })

})
var x = document.getElementById("mobile");
x.style.display = "none";
function botao() {
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 
var y = document.getElementById("botao1");
y.style.display = "none";
function botao1() {
  if (y.style.display == "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
} 
var z = document.getElementById("botao2");
z.style.display = "none";
function botao2() {
  if (z.style.display == "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
} 
var zz = document.getElementById("botao3");
zz.style.display = "none";
function botao3() {
  if (zz.style.display == "none") {
    zz.style.display = "block";
  } else {
    zz.style.display = "none";
  }
} 