'use strict';

const container = document.querySelector('.container');
let stage = new Stage(935,510);
stage.mount(container);
stage.addPacman();

console.log('it works!');
fetch('http://bootcamp.podlomar.org/api/pacman?width=11&height=6')
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






