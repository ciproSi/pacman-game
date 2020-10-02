'use strict';

console.log('it works!');





const container = document.querySelector('.container');
let stage = new Stage(850,510);
stage.mount(container);

stage.addPacman();
