function init() {
  // * TO DO
  // orcapuses come back with 'orca' class
  // make separate variables and timers for the octopuses = NO CLASSES
  // or make a become orca function?
  // or Jos suugestion make seperate objects in an orca array for each orca.




  // DOM objects
  const grid = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const playAgainBtn = document.querySelector('#play-again')
  const scoreDisplay = document.querySelector('.score')
  const cells = []

  // constant variables
  const width = 20
  const cellCount = width * width
  const fishClass = 'fish'
  const shellClass = 'shell'
  const wallClass = 'wall'
  const orcas = [
    {
      index: 0,
      position: 21,
      background: 'orca',
    },
    {
      index: 1,
      position: 38,
      background: 'orca',
    },
    {
      index: 2,
      position: 338,
      background: 'orca',
    },
    {
      index: 3,
      position: 321,
      background: 'orca',
    }
  ]

  // variables will change
  let sharkClass = 'shark-e'
  let sharkPosition = 365
  // let orcaClass = 'orca'
  let totalScore = 0

  // * loop to MAKE GRID
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.dataset.id = i
    grid.appendChild(cell)
    cells.push(cell)
  }

  // * very long WALL BUILDER loop
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

  function addShark(position, direction) {
    cells[position].classList.add(direction)
  }

  function removeShark(position) {
    cells[position].classList.remove(sharkClass)
  }

  function addOrca() {
    orcas.forEach(orca => {
      cells[orca.position].classList.add(orca.background)
    })
  }

  function removeOrca() {
    orcas.forEach(orca => {
      cells[orca.position].classList.remove(orca.background)
    })
    
  }

  function becomeOcto() {
    if (cells[sharkPosition].classList.contains(shellClass)) {
      // removeOrca(orcas[0].position)
      // removeOrca(orcas[1].position)
      // removeOrca(orcas[2].position)
      // removeOrca(orcas[3].position)
      // orcaClass = 'octopus'
      orcas.forEach(orca => {
        removeOrca(orca.position)
        orca.background = 'octopus'
      })

    }
  }
  function becomeOrca(position) {
    // removeOrca(orcas[0].position)
    // removeOrca(orcas[1].position)
    // removeOrca(orcas[2].position)
    // removeOrca(orcas[3].position)
    // orcaClass = 'orca'
    orcas.filter(orca => {
      if (orca.position === position) {
        orca.background = 'orca'
        console.log(orca)
      }
    })
  }

  function removeFish(position) {
    cells[position].classList.remove(fishClass)
  }

  function removeShell(position) {
    cells[position].classList.remove(shellClass)
  }


  // *  Place orcas on the grid ********
  orcas.forEach(orca => {
    addOrca(orca.position)
  })


  // ? MOVE ORCA 1 FUNCTION **********
  function moveOrcaOne() {
    removeOrca(orcas[0].position)
  
    if (orcas[0].position < 27) {
      orcas[0].position ++
    } else if (orcas[0].position > 81 
      && orcas[0].position <= 87) {
      orcas[0].position --
    } else if (orcas[0].position === 27 
      || orcas[0].position === 47
      || orcas[0].position === 67) {
      orcas[0].position += width
    } else {
      orcas[0].position -= width
    }

    addOrca(orcas[0].position)
  }
  
  const orcaOneTimer = setInterval(() => {
    handleCollide()
    
    if (orcas[0].position === sharkPosition) {
      clearInterval(orcaOneTimer)
    }
    moveOrcaOne()
  }, 500)   

  

  // ? MOVE ORCA 2 FUNCTION **********
  function moveOrcaTwo() {
    removeOrca(orcas[1].position)

    if (orcas[1].position > 32 
      && orcas[1].position <= 38) {
      orcas[1].position --
    } else if (orcas[1].position === 32 
      || orcas[1].position === 52
      || orcas[1].position === 72) {
      orcas[1].position += width
    } else if (orcas[1].position >= 92 
      && orcas[1].position < 98) {
      orcas[1].position ++
    } else {
      orcas[1].position -= width
    }

    addOrca(orcas[1].position)
  }
  
  const orcaTwoTimer = setInterval(() => {
    handleCollide()

    if (orcas[1].position === sharkPosition) {
      clearInterval(orcaTwoTimer)
    }

    moveOrcaTwo()
    
  }, 500) 



  // ? MOVE ORCA 3 FUNCTION **********
  function moveOrcaThree() {
    removeOrca()

    if (orcas[2].position > 333 
      && orcas[2].position <= 338) {
      orcas[2].position --
    } else if (orcas[2].position === 333 
      || orcas[2].position === 313
      || orcas[2].position === 293
      || orcas[2].position === 273) {
      orcas[2].position -= width
    } else if (orcas[2].position >= 253 
      && orcas[2].position < 258) {
      orcas[2].position ++
    } else {
      orcas[2].position += width
    }

    addOrca()
  }

  let orcaThreeTimer = setInterval(() => {
    handleCollide()

    if (orcas[2].position === sharkPosition) {
      clearInterval(orcaThreeTimer)
      setTimeout(() => {
        // orcas[2].position = 338
        removeOrca()
        orcas[2].background = 'orca'
        addOrca()
        orcaThreeTimer = setInterval(() => {
          handleCollide()

          if (orcas[2].position === sharkPosition) {
            clearInterval(orcaThreeTimer)
          }
          moveOrcaThree()
        }, 500)
      }, 7000)  
    }
    moveOrcaThree()
  }, 500)

  

  // ? MOVE ORCA 4 FUNCTION **********
  function moveOrcaFour() {
    removeOrca(orcas[3].position)

    if (orcas[3].position > 320 
      && orcas[3].position < 326) {
      orcas[3].position ++
    } else if (orcas[3].position === 326 
      || orcas[3].position === 306
      || orcas[3].position === 286
      || orcas[3].position === 266) {
      orcas[3].position -= width
    } else if (orcas[3].position > 241 
      && orcas[3].position <= 246) {
      orcas[3].position --
    } else {
      orcas[3].position += width
    }
    addOrca(orcas[3].position)
  }

  let orcaFourTimer = setInterval(() => {
    handleCollide()

    if (orcas[3].position === sharkPosition) {
      clearInterval(orcaFourTimer)
      setTimeout(() => {
        orcas[3].position = 321
        becomeOrca(orcas[3].position)
        addOrca(orcas[3].position)
        orcaFourTimer = setInterval(() => {
          handleCollide()
            
          if (orcas[3].position === sharkPosition) {
            clearInterval(orcaFourTimer)
          }
            
          moveOrcaFour()

        }, 500) 
      }, 7000)
    }

    moveOrcaFour()
  }, 500) 
  

  // ? MOVE PAC-SHARK function **********
  function handleKeyDown(event) {
    removeShark(sharkPosition)
    removeFish(sharkPosition)
    removeShell(sharkPosition)

    switch (event.keyCode) {
      case 39: //move east
        if (!checkIfWall(sharkPosition + 1)) {
          sharkPosition ++
          sharkClass = 'shark-e'
        }
        break
      case 37: // move west
        if (!checkIfWall(sharkPosition - 1)) {
          sharkPosition --   
          sharkClass = 'shark-w'
        }
        break
      case 38: // move north
        if (!checkIfWall(sharkPosition - width)) {
          sharkPosition -= width
          sharkClass = 'shark-n'
        }
        break
      case 40: //move south
        if (!checkIfWall(sharkPosition + width)) {
          sharkPosition += width
          sharkClass = 'shark-s'
        }
        break
      default:
        console.log('Not a valid key!')
    }
    // add Shark-Man at new location
    addShark(sharkPosition, sharkClass)
    
    // expect to pop up with the current score
    addPoints()

    // check if player lost just now
    handleCollide()

    // check if player won just now
    handleWin()

    // change all killer whales to octopuses
    becomeOcto()
  }
  
  // ? CHECK IF WON function **********
  function handleWin() {
    const fishCells = cells.filter(cell => {
      if (cell.classList.contains(fishClass) 
      || (cell.classList.contains(shellClass))) {
        return cell
      }
    })
    if (fishCells.length < 1) {
      window.alert('You won!!!! 🏆')
    }
  }

  // ? PAC-SHARK COLLISION function **********
  function handleCollide() {
    orcas.forEach(orca => {
      if (sharkPosition === orca.position) {
        if (orca.background === 'octopus') {
          removeOrca()
          totalScore += 150
        } else {
          window.alert('You lost! 😭')
          console.log('You lost! 😭')
        }  
      }
    })



    // if (sharkPosition === orcas[0].position) {
    //   if (orcaClass === 'octopus') {
    //     removeOrca(orcas[0].position)
    //     totalScore += 150
    //   } else {
    //     window.alert('You lost! 😭')
    //   }  
    // } else if (sharkPosition === orcas[1].position) {
    //   if (orcaClass === 'octopus') {
    //     removeOrca(orcas[1].position)
    //     totalScore += 150
    //   } else {
    //     window.alert('You lost! 😭')
    //   }  
    // } else if (sharkPosition === orcas[2].position) {
    //   if (orcaClass === 'octopus') {
    //     totalScore += 150
    //     removeOrca(orcas[2].position)
    //   } else {
    //     window.alert('You lost! 😭')
    //   }  
    // } else if (sharkPosition === orcas[3].position) {
    //   if (orcaClass === 'octopus') {
    //     removeOrca(orcas[3].position)
    //     totalScore += 15
    //   } else {
    //     window.alert('You lost! 😭')
    //   }  
    // }


  }

  // ? SCORING function **********
  function addPoints() {
    const sharkClassList = cells[sharkPosition].classList
    if (sharkClassList.contains(fishClass)) {
      totalScore += 20
    } else if (sharkClassList.contains(shellClass)){
      totalScore += 50
    }
    scoreDisplay.innerHTML = totalScore
  }

  // ? START GAME function **********
  function handleStart() {
    addShark(sharkPosition, sharkClass)
  }

  // ? RELOAD GAME function **********
  function handleReset() {
    window.location.reload()
  }


  // * Event Listeners ************
  document.addEventListener('keydown', handleKeyDown)
  startBtn.addEventListener('click', handleStart)
  playAgainBtn.addEventListener('click', handleReset)



































// ! DO NOT EDIT below this line !
}

window.addEventListener('DOMContentLoaded', init)