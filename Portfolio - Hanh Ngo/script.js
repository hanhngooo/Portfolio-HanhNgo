//Home

//Interest



// About


let myImage = document.querySelector('.profile-image-wrapper img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/about2.jpg') {
      myImage.setAttribute ('src','images/about3.jpg');
    } else {
      myImage.setAttribute ('src','images/about2.jpg')
    }
}

