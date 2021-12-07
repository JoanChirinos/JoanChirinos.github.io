let nav = document.getElementById('navbar');

document.onscroll = function () {
  var scrollTop = document.documentElement.scrollTop;
  //  console.log(scrollTop);

  if (scrollTop <= 0) {
    if (nav.classList.contains('to-grey')) {
      nav.classList.remove('to-grey');
    }
    if (!nav.classList.contains('to-yellow')) {
      nav.classList.add('to-yellow');
    }
  } else {
    if (nav.classList.contains('to-yellow')) {
      nav.classList.remove('to-yellow');
    }
    if (!nav.classList.contains('to-grey')) {
      nav.classList.add('to-grey');
    }
  }
}
