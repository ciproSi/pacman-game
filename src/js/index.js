'use strict';

console.log('it works!');

class Pacman {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    render () {
        const pacmanElm = document.createElement('div');
        pacmanElm.classList.add('entity');
        pacmanElm.classList.add('entity--pac');
        pacmanElm.classList.add('pacboy-active-light');
        pacmanElm.style = `top: ${this.posY * 85}px; left: ${this.posX * 85}px;`;
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowRight') {this.moveRight()};
        });
        return pacmanElm;
    }

    mount (parent) {
        this.element = this.render();
        parent.appendChild(this.element);
    }

    moveRight() {
        this.element.classList.toggle('pacboy-active-light--right-closed');
        this.posX += 85;
        this.update ();
    }

    update () {
        this.element.style = `left: ${this.posX}px; top: ${this.posY}px;`;
    }
}

const containerElm = document.querySelector('.container');
let pacman = new Pacman (0,0);
pacman.mount(containerElm);