// get the yes button element
const yesBtn = document.getElementById('yes');
// add event listener to the yes button
yesBtn.addEventListener('click', function() {
  // display a thank you message
  // make the alert class visible
  // alert('thank 😋');
  document.getElementsByClassName('alert')[0].style.visibility = 'visible';
  document.getElementById('no').style.transform = 'translateY(0px)';
  // hide the alert after 10 seconds
  setTimeout(function() {
    document.getElementsByClassName('alert')[0].style.visibility = 'hidden';
  }, 10000);
});



// move button away from the user when the user hovers over it or clicks on it
let position = 0; // 0 = left, 1 = middle, 2 = right
const noBTN = document.getElementById('no')
noBTN.addEventListener('mouseover', function() {
  document.getElementsByClassName('alert')[0].style.visibility = 'hidden';
  position = (position + 1) % 4
  if (position ==  0) {
    noBTN.style.transform = 'translateY(0px)';
  } else if (position == 1) {
    noBTN.style.transform = 'translateY(100px) translateX(100px)';
  }
  else if (position == 2) {
    noBTN.style.transform = 'translateY(100px) translateX(-100px)';
  }
  else if (position == 3) {
    noBTN.style.transform = 'translateY(-100px) translateX(-100px)';
  }
});

noBTN.addEventListener('click', function() {
  document.getElementsByClassName('alert')[0].style.visibility = 'hidden';
  position = (position + 1) % 4
  if (position ==  0) {
    noBTN.style.transform = 'translateY(0px)';
  } else if (position == 1) {
    noBTN.style.transform = 'translateY(100px) translateX(100px)';
  }
  else if (position == 2) {
    noBTN.style.transform = 'translateY(100px) translateX(-100px)';
  }
  else if (position == 3) {
    noBTN.style.transform = 'translateY(-100px) translateX(-100px)';
  }
}
);


