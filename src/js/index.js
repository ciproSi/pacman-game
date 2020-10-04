'use strict';

let width = Number(prompt('Insert width of maze'));
let height = Number(prompt('Insert height of maze'));

const container = document.querySelector('.container');
let stage = new Stage(width * 85, height * 85);
stage.mount(container);
stage.addPacman();

fetch(`http://bootcamp.podlomar.org/api/pacman?width=${width - 1}&height=${height - 1}`)
    .then((resp) => resp.json())
    .then((maze) => {
      maze.walls.forEach((wall) => {
        stage.addEntity(wall.x, wall.y, 'wall');
      });
      maze.apples.forEach((apple) => {
        stage.addEntity(apple.x, apple.y, 'apple');
      });
      maze.bombs.forEach((bomb) => {
        stage.addEntity(bomb.x, bomb.y, 'bomb');
      });
        stage.amountOfApples = maze.apples.length;
    });

    


