class Pacman {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.mouth = 0;
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
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowLeft') {this.moveLeft()};
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowUp') {this.moveUp()};
        });
        document.addEventListener('keydown', (event) => {
            if (event.code === 'ArrowDown') {this.moveDown()};
        });
        return pacmanElm;
    }

    mount (parent) {
        this.element = this.render();
        parent.appendChild(this.element);
    }

    moveRight() {
        if (screen.width - 150 > this.posX) {
            this.direction = 0;
            if (this.mouth === 0) {
                this.mouth = 85;
            } else {this.mouth = 0}
            this.posX += 85;
            this.update ();
        };
    }

    moveLeft() {
        if (this.posX > 0) {
            this.direction = -85;
            if (this.mouth === 0) {
                this.mouth = 85;
            } else {this.mouth = 0}
            this.posX -= 85;
            this.update ();
        };
    }

    moveUp() {
        if (this.posY > 0) {
            this.direction = -255;
            if (this.mouth === 0) {
                this.mouth = 85;
            } else {this.mouth = 0}
            this.posY -= 85;
            this.update ();
        };
    }

    moveDown() {
        if (screen.height - 150 > this.posY) {
            this.direction = -170;
            if (this.mouth === 0) {
                this.mouth = 85;
            } else {this.mouth = 0}
            this.posY += 85;
            this.update ();
        };
    }

    update () {
        this.element.style = `
            left: ${this.posX}px;
            top: ${this.posY}px;
            background-position-x: ${this.mouth}px;
            background-position-y: ${this.direction}px;
            `;
    }
}