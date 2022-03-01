# Full Stack Exercise

## Task Description

>  Castles and Creatures

> Write a program to play a simple "adventure"-style interactive game. The adventure world consists of up to five castles each of which has up to seven rooms (35 total). Each room has a treasure, worth a certain number of points, and a creature guarding the treasure. The treasure can be captured by bluffing or fighting the creature. Bluffing always has a 30% chance of succeeding. The odds for winning a fight vary from creature to creature. The object of the game is to visit different rooms and gain as many treasure points as possible. The player begins with 9 lives and each fight lost costs a life. (There's no penalty for losing a bluff.) When all the lives (or all treasures) are gone the game ends. The adventure world information (like castle and room names) is stored in a text file. The program must read the text file and create a data structure to represent the world. (HINT: Use a record structure for each room.) The program must handle interaction with the player, including display of menus for castle and room choices, display of current lives and treasure points accumulated, and responding to one-character commands to fight, bluff, or move around the world.


*Source: http://users.csc.calpoly.edu/~jdalbey/103/Projects/ProgrammingPractice.html#moderate*


## Goals (so far)

- [ ] Learning HTML
- [ ] Learning CSS
- [ ] Repeat and extend knowledge about JavaScript

## Steps

- [ ] Create functioning frontend
    - [ ] Define static room(s)
    - [ ] Define API for backend (Room Configuration)
    - [ ] Make example input with full room configuration (5 castles with 7 rooms each)
    - [ ] Create castles / rooms with javaScript based on example input
- [ ] Create parsing part (backend)


## API frontend / backend

### Must-Haves
    - number of castles
    - castle names
    - number of rooms per castle
    - room names
    - monster in each room 
        - odds of winning fight
    - treasure in each room
        - points for the treasure

### Might-Haves
    - castle id




Castle image: <a href='https://www.freepik.com/vectors/cartoon-castle'>Cartoon castle vector created by pch.vector - www.freepik.com</a>

state bars: <a href='https://www.freepik.com/vectors/game-ui'>Game ui vector created by upklyak - www.freepik.com</a>