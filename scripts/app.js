function init() {
  const grid = document.querySelector('.grid')
  const cells = []

  const width = 20
  const cellCount = width * width
  let fishClass = 'fish'
  let wallClass = 'wall'
  let sharkClass = 'shark'


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

  cells.forEach(cell => {
    const coral = parseInt(cell.dataset.id)
    // horizontal walls
    if (coral >= 0 && coral <= 19
    || coral >= 28 && coral <= 31
    || coral >= 48 && coral <= 51
    || coral >= 68 && coral <= 71
    || coral >= 42 && coral <= 46
    || coral >= 62 && coral <= 66
    || coral >= 53 && coral <= 57
    || coral >= 73 && coral <= 77
    || coral >= 102 && coral <= 117
    || coral >= 141 && coral <= 145
    || coral >= 161 && coral <= 165
    || coral >= 181 && coral <= 185
    || coral >= 201 && coral <= 205
    || coral >= 207 && coral <= 212
    || coral >= 154 && coral <= 158
    || coral >= 174 && coral <= 178
    || coral >= 194 && coral <= 198
    || coral >= 214 && coral <= 218
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
    || coral === 200
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
    || coral === 180 + 19
    || coral === 200 + 19
    || coral === 220 + 19
    || coral === 240 + 19
    || coral === 260 + 19
    || coral === 280 + 19
    || coral === 300 + 19
    || coral === 310 + 19
    || coral === 320 + 19
    || coral === 340 + 19
    || coral === 360 + 19) {
      cell.classList.add(wallClass)
    } else {
      cell.classList.add(fishClass)
    }
  })

  cells[365].classList.add('shark')
  // - get shark element and give it event listener to move with arrow keys around the board ('keydown')
  // - create variable for tracking sharky's place on the grid
  // - update sharky's place and remove sharky from previous place with each move
  




































// ! DO NOT EDIT below this line !
}

window.addEventListener('DOMContentLoaded', init)