function init() {
  const grid = document.querySelector('.grid')
  const cells = []

  const width = 20
  const cellCount = width * width
  const fishClass = 'fish'
  const wallClass = 'wall'
  const sharkClass = 'shark'
  const orcaClass = 'orca'

  let sharkPosition = 365
  let orcaPosition = 25

  // make div in css

  // make grid using JS
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.dataset.id = i
    grid.appendChild(cell)
    cells.push(cell)
  }

  // lightly style board

  // make obvious what everything is with classes and semantic html tags

  // add wall and fish styling as borders and background images
  // ! VERY LONG WALL BUILDER LOOP
  cells.forEach(cell => {
    const coral = parseInt(cell.dataset.id)
    // horizontal walls
    if (coral >= 0 && coral <= 19
    || coral >= 28 && coral <= 31
    || coral >= 42 && coral <= 46
    || coral >= 48 && coral <= 51
    || coral >= 53 && coral <= 57
    || coral >= 62 && coral <= 66
    || coral >= 68 && coral <= 71
    || coral >= 73 && coral <= 77
    || coral >= 102 && coral <= 117
    || coral >= 141 && coral <= 145
    || coral >= 154 && coral <= 158
    || coral >= 161 && coral <= 165
    || coral >= 174 && coral <= 178
    || coral >= 181 && coral <= 185
    || coral >= 207 && coral <= 212
    || coral >= 214 && coral <= 218
    || coral >= 221 && coral <= 225
    || coral >= 227 && coral <= 232
    || coral >= 234 && coral <= 238
    || coral >= 249 && coral <= 250
    || coral >= 262 && coral <= 265
    || coral >= 269 && coral <= 270
    || coral >= 274 && coral <= 277
    || coral >= 282 && coral <= 285
    || coral >= 294 && coral <= 297
    || coral >= 302 && coral <= 305
    || coral >= 307 && coral <= 312
    || coral >= 314 && coral <= 317
    || coral >= 327 && coral <= 332
    || coral >= 342 && coral <= 357
    || coral >= 380 && coral <= 399
    // left wall
    || coral === 20
    || coral === 40
    || coral === 60
    || coral === 80
    || coral === 100
    || coral === 120
    || coral === 140
    || coral === 160
    || coral === 180
    || coral === 210
    || coral === 220
    || coral === 240
    || coral === 260
    || coral === 280
    || coral === 300
    || coral === 320
    || coral === 340
    || coral === 360
    // right wall
    || coral === 20 + 19
    || coral === 40 + 19
    || coral === 60 + 19
    || coral === 80 + 19
    || coral === 100 + 19
    || coral === 120 + 19
    || coral === 140 + 19
    || coral === 160 + 19
    || coral === 200 + 19
    || coral === 220 + 19
    || coral === 240 + 19
    || coral === 260 + 19
    || coral === 280 + 19
    || coral === 300 + 19
    || coral === 310 + 19
    || coral === 320 + 19
    || coral === 340 + 19
    || coral === 360 + 19
    // random walls
    || coral === 127
    || coral === 132
    || coral === 147
    || coral === 149
    || coral === 150
    || coral === 152
    || coral === 169
    || coral === 170
    || coral === 187
    || coral === 192
    || coral === 267
    || coral === 287
    || coral === 272
    || coral === 292
    ) {
      cell.classList.add(wallClass)
    } else {
      cell.classList.add(fishClass)
    }
  })


  // ? GAME PLAY FUNCTIONS *********
  function checkIfWall(position) {
    return cells[position].classList.contains(wallClass)
  }

  function addShark(position) {
    cells[position].classList.add(sharkClass)
  }

  function removeShark(position) {
    cells[position].classList.remove(sharkClass)
  }

  function addOrca(position) {
    cells[position].classList.add(orcaClass)
  }

  function removeOrca(position) {
    cells[position].classList.remove(orcaClass)
  }

  function removeFish(position) {
    cells[position].classList.remove(fishClass)
  }


  // MAKE GHOST KILLER WHALES:
  // - give killer whales the ability to move to new tiles and disappear from old ones
  // - set random number
  // - set random movement for whales with numbers
  // * MOVE ORCA FUNCTION **********
  const randomPosition = Math.floor(Math.random() * 100)
  if (!checkIfWall(randomPosition)) orcaPosition = randomPosition

  // * MOVE PAC-SHARK FUNCTION **********
  function handleKeyUp(event) {
    removeShark(sharkPosition)
    removeFish(sharkPosition)

    // const sharkX = sharkPosition % width
    // const sharkY = Math.floor(sharkPosition / width)
    // console.log('x =', sharkX, 'y =', sharkY)
    // if (sharkX < 18)
    // if (sharkX > 1)
    // if (sharkY > 1) 
    //  if (sharkY < 18) 

    switch (event.keyCode) {
      case 39: //move right
        if (!checkIfWall(sharkPosition + 1)) sharkPosition ++ 
        break
      case 37: // move left
        if (!checkIfWall(sharkPosition - 1)) sharkPosition --   
        break
      case 38: // move up
        if (!checkIfWall(sharkPosition - width)) sharkPosition -= width
        break
      case 40: //move down
        if (!checkIfWall(sharkPosition + width)) sharkPosition += width
        break
      default:
        console.log('Not a valid key!')
    }
    addShark(sharkPosition)
  }

  addOrca(orcaPosition)




  document.addEventListener('keydown', handleKeyUp)
  
  
  // - create variable for tracking sharky's place on the grid
  // - add an event listener to move with arrow keys around the board ('keydown')
  // - update sharky's place and remove sharky from previous place with each move
  




































// ! DO NOT EDIT below this line !
}

window.addEventListener('DOMContentLoaded', init)