let data = {
  photo: 'images/phone.jpg',
  title: 'Phone',
  description: 'Always take pictures!'
};

$('#photo').attr('src', data.photo);

let currentPhoto = 0;

let imagesData = ['human brain', 'Human Heart' , 'Human Intestines', 'Human kidney and bladder', 'human left arm', 'Human left foot', 'Human skeleton', 'strand of DNA'];
$('#photo').attr('src', imagesData[currentPhoto].photo);

let loadPhoto = (photoNumber) => {
  $('#photo').attr('src', imagesData[photoNumber].photo);
  // ...
}

loadPhoto(currentPhoto);

$('#left-arrow').click(() => {
  if(currentPhoto > 1) {
    currentPhoto--;  
  }
  loadPhoto(currentPhoto);
});


$('#right-arrow').click(() => {
  if (currentPhoto < 9){
  currentPhoto++;
}
  loadPhoto(currentPhoto);
});