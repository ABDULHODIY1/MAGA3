// Yangi HTML tegi yaratish
var newElement = document.createElement('3d-body');
newElement.setAttribute('src', 'path/to/model');

// Elementni HTML-domga qo'shish
var bodyElement = document.getElementsByTagName('body')[0];
bodyElement.appendChild(newElement);