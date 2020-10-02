'use strict';

console.log('it works!');

class Entity {
    constructor(posX, posY, type) {
        this.posX = posX;
        this.posY = posY;
        this.type = type;
    }

    render () {
        const entityElm = document.createElement('div');
        entityElm.classList.add('entity');
        entityElm.style = `top: ${this.posY * 85}px; left: ${this.posX * 85}px;`;
        if (this.type === 'wall') {
            entityElm.classList.add('entity--wall');
        } else if (this.type === 'bomb') {
            entityElm.classList.add('entity--bomb');
        } else if (this.type === 'apple') {
            entityElm.classList.add('entity--apple');
        };
        return entityElm;
    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
    }

    // unmout() {
    //     this.element.remove();

    // }
}




const container = document.querySelector('.container');
let stage = new Stage(850,510);
stage.mount(container);

stage.addPacman();
stage.addEntity('wall');

