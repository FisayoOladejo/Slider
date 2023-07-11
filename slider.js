let imageVar = document.getElementById('image'); // getting image from html through the id of image 
let imageArray = ['image/slide1.jpg', 'image/slide2.jpg', 'image/slide3.jpg', 'image/slide4.jpg', 'image/slide5.jpg']; 

let imageIndex = 0; // set index of the array to start from zero means slide will start from slide1.jpg

function slideShow(){
  imageVar.setAttribute('src', imageArray[imageIndex]);
  imageIndex++;  // increament the image, meaning after o go to 1 and so on 

  if(imageIndex >= imageArray.length){  // if the image is greater 0 or equals 3 it return 0 meaning it will start again from zero
      imageIndex = 0
  }
}

setInterval(slideShow, 3000); // 3000(1000 ==1second) is the timmer at which the image will stay before slide to the next image in the array 