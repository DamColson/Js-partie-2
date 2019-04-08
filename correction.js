Exercice 1 partie 2

var myImage = document.querySelector('img');

function hover(){
  var mySrc = myImage.getAttribute('src');
  if (mySrc == 'images/image1.jpg') {
    myImage.setAttribute('src', 'images/image1_2.jpg');
  } else {
    myImage.setAttribute('src', 'images/image1.jpg');
  }
}

myImage.addEventListener('mouseover', hover);



  hover();
});

Exercice 2 partie 2

function looseFocus(){
      alert('Merci de votre participation');
    }
