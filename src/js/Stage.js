class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;
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
        this.element = this.render()
        parent.appendChild(this.element);
    }

    addPacman () {
        let pacman = new Pacman (0,0)
        pacman.mount(this.element);

    }

    addEntity () {
        for (let i = 0; i < 5; i++) {
        this.entity = new Entity (2,i, 'wall');
        this.entity.mount(this.element);
    }
    }
}