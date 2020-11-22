// ! Glitch on cell 23 - thinks that player has lost even though no orca

function init() {
  const grid = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const playAgainBtn = document.querySelector('#play-again')
  const cells = []

  const width = 20
  const cellCount = width * width
  const fishClass = 'fish'
  const shellClass = 'shell'
  const wallClass = 'wall'
  const sharkClass = 'shark'
  const orcaClass = 'orca'

  let sharkPosition = 365
  let orcaOnePosition = 21
  let orcaTwoPosition = 38

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
    const cellId = parseInt(cell.dataset.id)
    // horizontal walls
    if (cellId >= 0 && cellId <= 19
    || cellId >= 28 && cellId <= 31
    || cellId >= 42 && cellId <= 46
    || cellId >= 48 && cellId <= 51
    || cellId >= 53 && cellId <= 57
    || cellId >= 62 && cellId <= 66
    || cellId >= 68 && cellId <= 71
    || cellId >= 73 && cellId <= 77
    || cellId >= 102 && cellId <= 117
    || cellId >= 141 && cellId <= 145
    || cellId >= 154 && cellId <= 158
    || cellId >= 161 && cellId <= 165
    || cellId >= 174 && cellId <= 178
    || cellId >= 181 && cellId <= 185
    || cellId >= 207 && cellId <= 212
    || cellId >= 214 && cellId <= 218
    || cellId >= 221 && cellId <= 225
    || cellId >= 227 && cellId <= 232
    || cellId >= 234 && cellId <= 238
    || cellId >= 249 && cellId <= 250
    || cellId >= 262 && cellId <= 265
    || cellId >= 269 && cellId <= 270
    || cellId >= 274 && cellId <= 277
    || cellId >= 282 && cellId <= 285
    || cellId >= 294 && cellId <= 297
    || cellId >= 302 && cellId <= 305
    || cellId >= 307 && cellId <= 312
    || cellId >= 314 && cellId <= 317
    || cellId >= 327 && cellId <= 332
    || cellId >= 342 && cellId <= 357
    || cellId >= 380 && cellId <= 399
    // left wall
    || cellId === 20
    || cellId === 40
    || cellId === 60
    || cellId === 80
    || cellId === 100
    || cellId === 120
    || cellId === 140
    || cellId === 160
    || cellId === 180
    || cellId === 210
    || cellId === 220
    || cellId === 240
    || cellId === 260
    || cellId === 280
    || cellId === 300
    || cellId === 320
    || cellId === 340
    || cellId === 360
    // right wall
    || cellId === 20 + 19
    || cellId === 40 + 19
    || cellId === 60 + 19
    || cellId === 80 + 19
    || cellId === 100 + 19
    || cellId === 120 + 19
    || cellId === 140 + 19
    || cellId === 160 + 19
    || cellId === 200 + 19
    || cellId === 220 + 19
    || cellId === 240 + 19
    || cellId === 260 + 19
    || cellId === 280 + 19
    || cellId === 300 + 19
    || cellId === 310 + 19
    || cellId === 320 + 19
    || cellId === 340 + 19
    || cellId === 360 + 19
    // random walls
    || cellId === 127
    || cellId === 132
    || cellId === 147
    || cellId === 149
    || cellId === 150
    || cellId === 152
    || cellId === 169
    || cellId === 170
    || cellId === 187
    || cellId === 192
    || cellId === 267
    || cellId === 287
    || cellId === 272
    || cellId === 292) {
      cell.classList.add(wallClass)
    } else if (cellId === 41
      || cellId === 58
      || cellId === 281
      || cellId === 298) {
      cell.classList.add(shellClass)
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

  function removeShell(position) {
    cells[position].classList.remove(shellClass)
  }

  // ? MOVE ORCA FUNCTION **********
  setInterval(() => {
    removeOrca(orcaOnePosition)
    removeOrca(orcaTwoPosition)

    // orca1 path
    if (orcaOnePosition < 27) {
      orcaOnePosition ++
    } else if (orcaOnePosition > 81 && orcaOnePosition <= 87) {
      orcaOnePosition --
    } else if (orcaOnePosition >= 27 && orcaOnePosition < 102) {
      orcaOnePosition += width
    } else {
      orcaOnePosition = 21
    }
    // orca2 path
    if (orcaTwoPosition > 32 && orcaTwoPosition <= 38) {
      orcaTwoPosition --
    } else if (orcaTwoPosition === 32 || orcaTwoPosition === 52|| orcaTwoPosition === 72) {
      orcaTwoPosition += width
    } else if (orcaTwoPosition >= 92 && orcaTwoPosition < 98) {
      orcaTwoPosition ++
    } else if (orcaTwoPosition === 98 || orcaTwoPosition === 78  || orcaTwoPosition === 58) {
      orcaTwoPosition -= width
    }

    if (!checkIfWall(orcaOnePosition)) addOrca(orcaOnePosition)
    if (!checkIfWall(orcaTwoPosition)) addOrca(orcaTwoPosition)
  }, 500) // orca in OFF mode
  

  // ? MOVE PAC-SHARK FUNCTION **********
  function handleKeyDown(event) {
    removeShark(sharkPosition)
    removeFish(sharkPosition)
    removeShell(sharkPosition)

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
    handleWin()
    handleLose()
  }
  
  // ? WINNER FUNCTION **********
  function handleWin() {
    const fishCells = cells.filter(cell => {
      if (cell.classList.contains(fishClass) || (cell.classList.contains(shellClass))) {
        return cell
      }
    })
    if (fishCells.length === 0) {
      window.alert('You won!!!!')
    }
  }

  // ? LOSER FUNCTION **********
  function handleLose() {
    if (sharkPosition === orcaOnePosition 
    || sharkPosition === orcaTwoPosition) {
      window.alert('You lost!')
    }
  }

  // ? RESET FUNCTION **********
  function handleReset() {
    window.location.reload()
  }


  // Event Listeners ************
  // ! GAME PLAY PREVENTED IN THIS FUNCTION
  function handleStart() {
    document.addEventListener('keydown', handleKeyDown)
  }

  startBtn.addEventListener('click', handleStart)
  playAgainBtn.addEventListener('click', handleReset)



































// ! DO NOT EDIT below this line !
}

window.addEventListener('DOMContentLoaded', init)