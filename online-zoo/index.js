
let arrImg = document.querySelectorAll('.img');
let arrPictures = document.querySelectorAll('.pictures');
console.log(arrImg);

for (let i = 0; i < arrImg.length; i++) {
    arrImg[i].addEventListener("mouseover", function(){
        arrPictures[i].querySelector('.namePicture').style.top = '0px';
    })
}