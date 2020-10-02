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
        let typeOfEntity = this.collision((this.posX + 85) / 85, this.posY / 85);
        if (typeOfEntity === 'wall') {
            return;
        } else {
            if (stage.width - 85 > this.posX) {
                this.direction = 0;
                if (this.mouth === 0) {
                    this.mouth = 85;
                } else {this.mouth = 0}
                this.posX += 85;
                this.update ();
            };
        };
    }

    moveLeft() {
        let typeOfEntity = this.collision((this.posX - 85) / 85, this.posY / 85);
        if (typeOfEntity === 'wall') {
            return;
        } else {
            if (this.posX > 0) {
                this.direction = -85;
                if (this.mouth === 0) {
                    this.mouth = 85;
                } else {this.mouth = 0}
                this.posX -= 85;
                this.update ();
            };
        };
    }

    moveUp() {
        let typeOfEntity = this.collision(this.posX / 85, (this.posY - 85) / 85);
        if (typeOfEntity === 'wall') {
            return;
        } else {
            if (this.posY > 0) {
                this.direction = -255;
                if (this.mouth === 0) {
                    this.mouth = 85;
                } else {this.mouth = 0}
                this.posY -= 85;
                this.update ();
            };
        };    
    }

    moveDown() {
        let typeOfEntity = this.collision(this.posX / 85, (this.posY + 85) / 85);
        if (typeOfEntity === 'wall') {
            return;
        } else {
            if (stage.height - 85 > this.posY) {
                this.direction = -170;
                if (this.mouth === 0) {
                    this.mouth = 85;
                } else {this.mouth = 0}
                this.posY += 85;
                this.update ();
            };
        };
    }

    collision(x, y) {
        let typeOfEntity = null;
        stage.entities.forEach((entity) => {
            if (entity[0] === x && entity[1] === y) {
                typeOfEntity = entity[2];
            }
        });
        return typeOfEntity;

    }

    update () {
        // let typeOfEntity = this.collision(this.posX / 85, this.posY / 85);
        // if (typeOfEntity === 'wall') {
        //     return;
        // } else {
            this.element.style = `
            left: ${this.posX}px;
            top: ${this.posY}px;
            background-position-x: ${this.mouth}px;
            background-position-y: ${this.direction}px;
            `;
        // }
    }
}