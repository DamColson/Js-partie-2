// Exercice 1 partie 2
//
// var myImage = document.querySelector('img');
//
// function hover(){
//   var mySrc = myImage.getAttribute('src');
//   if (mySrc == 'images/image1.jpg') {
//     myImage.setAttribute('src', 'images/image1_2.jpg');
//   } else {
//     myImage.setAttribute('src', 'images/image1.jpg');
//   }
// }
//
// myImage.addEventListener('mouseover', hover);
//
//
//
//   hover();
// });
//
// Exercice 2 partie 2
//
// function looseFocus(){
//       alert('Merci de votre participation');
//     }

// Exercice 3 partie 2

// var myTextReturned = document.getElementById('lastname');
//
// function textReturn(){
//   var myText = document.getElementById('lastname').value;
//   alert(myText);
// }
//
// myTextReturned.addEventListener(('keyup'),function() {
//   textReturn();
// });

// Exercice 4 partie 2

// var myButton = document.getElementById('resetButton');
//
// function resetButton(){
//   document.getElementById('myForm').reset();
// }
//
// myButton.addEventListener('click',function() {
//   resetButton();
// });

// Exercice 5 et 6 partie 2


// var myHover = document.getElementsByTagName('img');
//
// var hoverImage = function(index){
//     myHover[index].setAttribute('src', 'images/image' + (index+1)+'_2.jpg');
//   }
// var hoverImage2 = function(index2){
//     myHover[index2].setAttribute('src', 'images/image' + (index2+1)+'.jpg');
//   }
//
// for (let i = 0; i < myHover.length; i++) {
//   let mySrc = myHover[i];
//   mySrc.addEventListener('mouseover', function(){
//     hoverImage(i);
//       });
//   mySrc.addEventListener('mouseout',function(){
//     hoverImage2(i);
//   });
// }

// partie en une ligne exo 5 et 6

// function hoverImage(img){
//   img.src = 'images/' +img.id+'_2.jpg';
// }
// function hoverOut(img){
//   img.src = 'images/' +img.id+'.jpg';
// }
