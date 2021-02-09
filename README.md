# General Assembly Project 1: JS Game
## Pac-Shark by Penny Jungreis

![Pac-Shark](./images/shark-e.png)
## Deployment
This game was deployed on GitHub Pages and is available to play at [Pac-Shark](https://penelopecj.github.io/pac-shark/).

## Task & Timeframe
Eight days to plan, complete, and deploy a complete browser-based game in Vanilla JS. 

## Technologies Used
* HTML5 with HTML5 audio
* CSS3 with animations
* JavaScript (ES6)
* GitHub Pages
* Google Fonts
* GIMP for drawing images

![Game Screen](./images/Screenshot%202021-02-09%20at%2017.04.00.png)

## How to Play
* Click “Start Game” to begin.
* Use your arrow keys to move Pac-Shark around in the ocean.
* Make sure to avoid the killer whales - they eat sharks!!
* Eat the clams to scare the killer whales away.
* Eat the octopuses to clear your path and get bonus points.
* Eat all of the fish to win the game.
* Eat the lobsters and tropical fish to get extra points.  

## Game Features
* Big game board to play on made up of a 20 x 20 grid.
![for loop](./images/Screenshot%202021-02-09%20at%2017.43.39.png)
* Enable sound to set the scene for your game play.
* If you are a first time player, you can read the rules from the main menu.
![game rules](./images/Screenshot%202021-02-09%20at%2017.24.31.png)
* Click 'Start Game' or press any arrow key to add Pac-Shark to the very bottom of the grid.
![game play buttons](./images/Screenshot%202021-02-09%20at%2017.04.00%20copy.png)
* Pac-Shark will create a ripple in the ocean wherever its swimming so its easier to spot.
![pac-shark tile detail](./images/Screenshot%202021-02-09%20at%2017.29.28.png)
* Reset the game at any time to play again.
* Pac-Shark can turn its razor sharp teeth to face the direction it is swimming in.
![shark css class code](./images/Screenshot%202021-02-09%20at%2017.31.03.png)
* Fish and clams disappear without a trace when eaten.
* Killer whales follow Pac-Shark wherever it goes, but you can plan to out-smart them my moving erratically.
![attack logic code](./images/Screenshot%202021-02-09%20at%2017.33.48.png)
* Killer whales cannot swim as fast as Pac-Shark so you can also out-swim them.
* Killer whales have an odd habit of turning into octopuses when you eat a clam!
![game screen with octopuses](./images/Screenshot%202021-02-09%20at%2017.06.00.png)
* Delicious octopuses are high risk and high reward with bonus points for eating them.
* Octopuses will flash to warn you before turning back into killer whales.
![octopus function code](./images/Screenshot%202021-02-09%20at%2017.35.30.png)
* Lobsters, tropical fish, and blowfish appear randomly on the grid and each award a unique number of bonus points.

![Lobster](./images/lobster.png)
![Tropical Fish](./images/tropical.png)
![Blowfish](./images/blowfish.png)
* Ride the East or West currants to get a quick lift to the other side of the ocean.
* No need to worry about getting stuck in any coral reefs. It is not possible for Pac-Shark to swim over them.
* You will know right away if you have won or lost because the ocean will display a message and make a sound alerting you.
![losing screen](./images/Screenshot%202021-02-09%20at%2017.04.27.png)
* Keep an eye on the score display to see how many points you get for eating different sea creatures.

## Challenges Overcome
* Prevent Pac-Shark from swimming over walls by using a class for all wall cells.
* Animate the animals by creating multiple background images and css animations.

![octopus](./images/octopus.png)
![flashing octopus](./images/octopus-flash.png)
![octopus](./images/octopus-swag.png)
* Seamlessly change the orcas to octopuses when a clam is eaten.
* Octopuses flash at appropriate times before turning back to killer whales.
* Octopuses disappear when eaten and come back as killer whales.
* Octopuses flash as a warning when they are about to transform back into killer whales.
* Whales and special bonus fish only activate when user is ready to start game.
* Game Rules display over the game grid so users can learn to play first.
* Sound effects can start and stop as desired.
* Killer whales stored in an array for efficient code and scalability.
![orca array code](./images/Screenshot%202021-02-09%20at%2017.41.33.png)

## Features Wish List
* Pac-Shark has multiple lives.
* Levels become increasingly more difficult.
* Each killer whales follows a different attack pattern.
* Game loads to a separate Menu page.
* User can choose level, speed, and theme.
* High scores are tracked and displayed.

## Credits
Pac-Shark image by Penelope Jungreis.

Animal emoji images by Apple.

Ocean background image provided by Shutterstock (https://www.shutterstock.com/).

All sounds provided by Orange Free Sounds (http://www.orangefreesounds.com/).

All fonts provided by Google Fonts (https://fonts.google.com/).

