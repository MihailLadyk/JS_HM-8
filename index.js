"use strict";

import gallery from "./gallery-item.js"





let body = document.querySelector('body')
let list = document.querySelector('.gallery')
let lightbox = document.querySelector('.lightbox')
let bigImage= document.querySelector('.lightbox__image')
let closeBtn = document.querySelector('.lightbox__button')
let overlay = document.querySelector('.lightbox__content')




const addToGallery = function () {
    for (let i = 0; i < gallery.length; i++) {
      let photo = document.createElement('img');
        let link = document.createElement('a');
        let item = document.createElement('li');
     

      
        list.append(item);
        item.append(photo);
        photo.append(link);
      
    
       
       
     
        
   

        link.classList.add('gallery__link');
        link.setAttribute('href', gallery[i].original)
        photo.classList.add('gallery__image')
        photo.setAttribute('src', gallery[i].preview);
        photo.setAttribute('id', 1);
        photo.setAttribute('alt', gallery[i].description);
        photo.setAttribute('data-source', gallery[i].original)
    }
}
addToGallery()




const modalOpen  = function() {
  event.preventDefault();
  event.target.nodeName == 'IMG' ? lightbox.classList.add('is-open') : lightbox.classList.remove('is-open');
bigImage.src = event.target.getAttribute('data-source');
bigImage.setAttribute('id', event.target.id)
}

list.addEventListener('click', modalOpen);


closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('is-open')
})

overlay.addEventListener('click', () => {
  lightbox.classList.remove('is-open')
})

let bigId = +bigImage.id;
body.addEventListener('keydown', () => {
  event.key == 'Escape' ? lightbox.classList.remove('is-open') : '';

  let gallery__image = document.querySelectorAll('.gallery__image');
  if (event.key == 'ArrowLeft') {
    bigId -= 1;
    bigId < 0 ? bigId = 8 : '';
    bigImage.src = gallery__image[bigId].getAttribute('data-source')

  };
  if (event.key == 'ArrowRight') {
    bigId += 1;
    bigId == 9 ? bigId = 0 : '';
    bigImage.src = gallery__image[bigId].getAttribute('data-source')
  
  }
})
