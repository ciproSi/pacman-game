class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.entities = [];
        this.score = 0;
        this.amountOfApples = 0;
        this.cheatCode = 'iddqd';
        this.cheatMode = false;
    }

    render () {
        const stageElm = document.createElement('div');
        stageElm.classList.add('stage');
        stageElm.style = `
            width: ${this.width}px;
            height: ${this.height}px;
        `;
        
        return stageElm;
    }

    mount(parent) {
        //listen to cheat codes
        let keySequence = [];
        document.addEventListener('keydown', (e) => {
            keySequence.push(e.key);
            if (keySequence.length > 5) {
                keySequence.splice(0,1);
            };
            //array to regular string
            let sequence = "";    
            keySequence.forEach((key) => {
                sequence += key; 
            });

            //compare to cheat
            if (sequence === this.cheatCode) {
            this.cheatMode = true;
            };
        });
        this.element = this.render()
        parent.appendChild(this.element);
    }

    addPacman () {
        let pacman = new Pacman (0,0)
        pacman.mount(this.element);

    }

    addEntity (x, y, type) {
        let entity = new Entity (x,y , type);
        entity.mount(this.element);
        this.entities.push(entity);
    
    }
    

    removeEntity (entity) {
        this.element.removeChild(entity);
    }
}