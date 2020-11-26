function init() {
  // * TO DO
  // or Jos suugestion make seperate objects in an orca array for each orca.
  // make separate variables and timers for the octopuses = NO CLASSES


  // DOM objects
  const grid = document.querySelector('.grid')
  const startBtn = document.querySelector('#start')
  const playAgainBtn = document.querySelector('#play-again')
  const scoreDisplay = document.querySelector('.score')

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
      x: this.position % width,
      y: Math.floor(this.position / width),
      background: 'orca',
      timer: 'timer',
    },
    {
      index: 1,
      position: 38,
      x: this.position % width,
      y: Math.floor(this.position / width),
      background: 'orca',
      timer: 'timer',
    },
    {
      index: 2,
      position: 338,
      x: this.position % width,
      y: Math.floor(this.position / width),
      background: 'orca',
      timer: 'timer',
    },
    {
      index: 3,
      position: 321,
      x: this.position % width,
      y: Math.floor(this.position / width),
      background: 'orca',
      timer: 'timer',
    }
  ]

  // variables will change
  let cells = []
  let sharkClass = 'shark-e'
  let sharkPosition = 365
  let sharkX = sharkPosition % width
  let sharkY = Math.floor(sharkPosition / width)
  let totalScore = 0
  let playing = false
  let randomCell = 0

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

  // Add lobsters
  // setInterval(() => {
  //   randomCell = cells[Math.floor(Math.random() * 400)]
  //   randomCell.classList.add('lobster')
  // }, 30000)

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
      removeOrca()
      orcas.forEach(orca => {
        orca.background = 'octopus'
      })
      console.log(orcas[0].background)
      addOrca()
      console.log(orcas[0].background)

      //Need to disable the first timeouts if a second shell is eaten.
      // const flashTimeout = setTimeout(() => {
      //   removeOrca()
      //   orcas.forEach(orca => {
      //     orca.background = 'octopus-flash'
      //   })
      //   addOrca()
      // }, 4500)

      // const orcaTimeout = setTimeout(() => {
      //   removeOrca()
      //   orcas.forEach(orca => {
      //     orca.background = 'orca'
      //   })
      //   addOrca()
      // }, 8000)
    }
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


  // ? ORCA 1 LOGIC **********
  function moveOrcaOne() {
    removeOrca(orcas[0].position)
  
    // if (orcas[0].position < 27) {
    //   orcas[0].position ++
    // } else if (orcas[0].position > 81 
    //   && orcas[0].position <= 87) {
    //   orcas[0].position --
    // } else if (orcas[0].position === 27 
    //   || orcas[0].position === 47
    //   || orcas[0].position === 67) {
    //   orcas[0].position += width
    // } else {
    //   orcas[0].position -= width
    // }
    // if (sharkPosition > orcas[0].position) {
    //   if (!checkIfWall(orcas[0].position + 1)) {
    //     orcas[0].position ++ // move east
    //   } else if (!checkIfWall(orcas[0].position + width)) {
    //     orcas[0].position += width // move south
    //   } else if (!checkIfWall(orcas[0].position - 1)) {
    //     orcas[0].position -- // move west
    //   } else if (!checkIfWall(orcas[0].position - width)) {
    //     orcas[0].position -= width // move north
    //   } 
    // } else if (sharkPosition < orcas[0].position) {
    //   if (!checkIfWall(orcas[0].position - 1)) {
    //     orcas[0].position -- // move west
    //   } else if (!checkIfWall(orcas[0].position - width)) {
    //     orcas[0].position -= width // move north
    //   } else if (!checkIfWall(orcas[0].position + width)) {
    //     orcas[0].position += width // move south
    //   } else if (!checkIfWall(orcas[0].position + 1)) {
    //     orcas[0].position ++ // move east
    //   } 
    // }
    
    // if (sharkX >= orcas[0].x && !checkIfWall(orcas[0].position + 1)) {
    //   orcas[0].position ++ // move east
    // } else if (sharkY >= orcas[0].y && !checkIfWall(orcas[0].position + width)) {
    //   orcas[0].position += width // move south
    // } else if (sharkX < orcas[0].x && !checkIfWall(orcas[0].position - 1)) {
    //   orcas[0].position -- // move west
    // } else if (sharkY < orcas[0].y && !checkIfWall(orcas[0].position - width)) {
    //   orcas[0].position -= width // move north
    // } 

    // } else if (sharkPosition < orcas[0].position) {
    //   if (!checkIfWall(orcas[0].position - 1)) {
    //     orcas[0].position -- // move west
    //   } else if (!checkIfWall(orcas[0].position - width)) {
    //     orcas[0].position -= width // move north
    //   } else if (!checkIfWall(orcas[0].position + width)) {
    //     orcas[0].position += width // move south
    //   } else if (!checkIfWall(orcas[0].position + 1)) {
    //     orcas[0].position ++ // move east
    //   } 
    // }

    // ! attack logic
    if (orcas[0].background === 'orca') {
      if (sharkX > orcas[0].x && !checkIfWall(orcas[0].position + 1)) {
        orcas[0].position ++ // move east
      } else if (sharkY > orcas[0].y && !checkIfWall(orcas[0].position + width)) {
        orcas[0].position += width // move south
      } else if (sharkX < orcas[0].x && !checkIfWall(orcas[0].position - 1)) {
        orcas[0].position -- // move west
      } else if (sharkY < orcas[0].y && !checkIfWall(orcas[0].position - width)) {
        orcas[0].position -= width // move north
      } 
      orcas[0].x = orcas[0].position % width
      orcas[0].y = Math.floor(orcas[0].position / width)
      addOrca(orcas[0].position)
    } 
    // ? escape logic 
    if (orcas[0].background === 'octopus'){
      if (sharkX < orcas[0].x && !checkIfWall(orcas[0].position + 1)) {
        orcas[0].position ++ // move east
      } else if (sharkY < orcas[0].y && !checkIfWall(orcas[0].position + width)) {
        orcas[0].position += width // move south
      } else if (sharkX > orcas[0].x && !checkIfWall(orcas[0].position - 1)) {
        orcas[0].position -- // move west
      } else if (sharkY > orcas[0].y && !checkIfWall(orcas[0].position - width)) {
        orcas[0].position -= width // move north
      } 
      orcas[0].x = orcas[0].position % width
      orcas[0].y = Math.floor(orcas[0].position / width)
      addOrca(orcas[0].position)
    }
  }

  // ? RELEASE ORCA 1 FUNCTION **********
  function releaseOrcaOne() {
    let orcaOneTimer = setInterval(() => {
      handleCollide()
      
      if (orcas[0].position === sharkPosition) {
        clearInterval(orcaOneTimer)
        setTimeout(() => {
          removeOrca()
          orcas[0].background = 'orca'
          addOrca()
          orcaOneTimer = setInterval(() => {
            
            if (orcas[0].position === sharkPosition) {
              clearInterval(orcaOneTimer)
            }
            moveOrcaOne()
          }, 500)
        }, 5000)
      }
      moveOrcaOne()
    }, 500)   
  }
  

  // ? MOVE ORCA 2 LOGIC **********
  function moveOrcaTwo() {
    removeOrca(orcas[1].position)

    // stupid logic
    // if (orcas[1].position > 32 
    //   && orcas[1].position <= 38) {
    //   orcas[1].position --
    // } else if (orcas[1].position === 32 
    //   || orcas[1].position === 52
    //   || orcas[1].position === 72) {
    //   orcas[1].position += width
    // } else if (orcas[1].position >= 92 
    //   && orcas[1].position < 98) {
    //   orcas[1].position ++
    // } else {
    //   orcas[1].position -= width
    // }

    // ! attack logic
    if (orcas[1].background === 'orca') {
      if (sharkX > orcas[1].x && !checkIfWall(orcas[1].position + 1)) {
        orcas[1].position ++ // move east
      } else if (sharkY > orcas[1].y && !checkIfWall(orcas[1].position + width)) {
        orcas[1].position += width // move south
      } else if (sharkX < orcas[1].x && !checkIfWall(orcas[1].position - 1)) {
        orcas[1].position -- // move west
      } else if (sharkY < orcas[1].y && !checkIfWall(orcas[1].position - width)) {
        orcas[1].position -= width // move north
      } 
      orcas[1].x = orcas[1].position % width
      orcas[1].y = Math.floor(orcas[1].position / width)
      addOrca(orcas[1].position)
    } 
    // ? escape logic 
    if (orcas[1].background === 'octopus'){
      if (sharkX < orcas[1].x && !checkIfWall(orcas[1].position + 1)) {
        orcas[1].position ++ // move east
      } else if (sharkY < orcas[1].y && !checkIfWall(orcas[1].position + width)) {
        orcas[1].position += width // move south
      } else if (sharkX > orcas[1].x && !checkIfWall(orcas[1].position - 1)) {
        orcas[1].position -- // move west
      } else if (sharkY > orcas[1].y && !checkIfWall(orcas[1].position - width)) {
        orcas[1].position -= width // move north
      } 
      orcas[1].x = orcas[1].position % width
      orcas[1].y = Math.floor(orcas[1].position / width)
      addOrca(orcas[1].position)
    }

    
  }
  
  // ? RELEASE ORCA 2 FUNCTION **********
  function releaseOrcaTwo() {
    let orcaTwoTimer = setInterval(() => {
      handleCollide()
  
      if (orcas[1].position === sharkPosition) {
        clearInterval(orcaTwoTimer)
        setTimeout(() => {
          removeOrca()
          orcas[1].background = 'orca'
          addOrca()
          orcaTwoTimer = setInterval(() => {
        
            if (orcas[1].position === sharkPosition) {
              clearInterval(orcaTwoTimer)
            }
            moveOrcaTwo()
          }, 500)
        }, 5000)
      }
      moveOrcaTwo()
    }, 500) 
  }
  


  // ? ORCA 3 LOGIC **********
  function moveOrcaThree() {
    removeOrca()

    // if (orcas[2].position > 333 
    //   && orcas[2].position <= 338) {
    //   orcas[2].position --
    // } else if (orcas[2].position === 333 
    //   || orcas[2].position === 313
    //   || orcas[2].position === 293
    //   || orcas[2].position === 273) {
    //   orcas[2].position -= width
    // } else if (orcas[2].position >= 253 
    //   && orcas[2].position < 258) {
    //   orcas[2].position ++
    // } else {
    //   orcas[2].position += width
    // }

    // ! attack logic
    if (orcas[2].background === 'orca') {
      if (sharkX > orcas[2].x && !checkIfWall(orcas[2].position + 1)) {
        orcas[2].position ++ // move east
      } else if (sharkY > orcas[2].y && !checkIfWall(orcas[2].position + width)) {
        orcas[2].position += width // move south
      } else if (sharkX < orcas[2].x && !checkIfWall(orcas[2].position - 1)) {
        orcas[2].position -- // move west
      } else if (sharkY < orcas[2].y && !checkIfWall(orcas[2].position - width)) {
        orcas[2].position -= width // move north
      } 
      // ! Do this for all orca logic
      orcas[2].x = orcas[2].position % width
      orcas[2].y = Math.floor(orcas[2].position / width)
      addOrca()
    } 
    // ? escape logic 
    if (orcas[2].background === 'octopus'){
      if (sharkX < orcas[2].x && !checkIfWall(orcas[2].position + 1)) {
        orcas[2].position ++ // move east
      } else if (sharkY < orcas[2].y && !checkIfWall(orcas[2].position + width)) {
        orcas[2].position += width // move south
      } else if (sharkX > orcas[2].x && !checkIfWall(orcas[2].position - 1)) {
        orcas[2].position -- // move west
      } else if (sharkY > orcas[2].y && !checkIfWall(orcas[2].position - width)) {
        orcas[2].position -= width // move north
      } 
      // ! Do this for all orca logic
      orcas[2].x = orcas[2].position % width
      orcas[2].y = Math.floor(orcas[2].position / width)
      addOrca()
    }
  }

  // ? RELEASE ORCA 3 FUNCTION **********
  function releaseOrcaThree() {
    let orcaThreeTimer = setInterval(() => {
      // handleCollide()
  
      if (orcas[2].position === sharkPosition) {
        clearInterval(orcaThreeTimer)
        setTimeout(() => {
          // orcas[2].position = 338
          removeOrca()
          orcas[2].background = 'orca'
          addOrca()
          orcaThreeTimer = setInterval(() => {
  
            if (orcas[2].position === sharkPosition) {
              clearInterval(orcaThreeTimer)
            }
            moveOrcaThree()
          }, 500)
        }, 5000)  
      }
      moveOrcaThree()
    }, 500)
  }
  
  // ? ORCA 4 LOGIC **********
  function moveOrcaFour() {
    removeOrca(orcas[3].position)
    console.log(orcas[3].background)

    // if (orcas[3].position > 320 
    //   && orcas[3].position < 326) {
    //   orcas[3].position ++
    // } else if (orcas[3].position === 326 
    //   || orcas[3].position === 306
    //   || orcas[3].position === 286
    //   || orcas[3].position === 266) {
    //   orcas[3].position -= width
    // } else if (orcas[3].position > 241 
    //   && orcas[3].position <= 246) {
    //   orcas[3].position --
    // } else {
    //   orcas[3].position += width
    // }

    // ! attack logic
    if (orcas[3].background === 'orca') {
      if (sharkX > orcas[3].x && !checkIfWall(orcas[3].position + 1)) {
        orcas[3].position ++ // move east
      } else if (sharkY > orcas[3].y && !checkIfWall(orcas[3].position + width)) {
        orcas[3].position += width // move south
      } else if (sharkX < orcas[3].x && !checkIfWall(orcas[3].position - 1)) {
        orcas[3].position -- // move west
      } else if (sharkY < orcas[3].y && !checkIfWall(orcas[3].position - width)) {
        orcas[3].position -= width // move north
      } 
      orcas[3].x = orcas[3].position % width
      orcas[3].y = Math.floor(orcas[3].position / width)
      addOrca(orcas[3].position)
    } 
    // ? escape logic 
    if (orcas[3].background === 'octopus'){
      if (sharkX < orcas[3].x && !checkIfWall(orcas[3].position + 1)) {
        orcas[3].position ++ // move east
      } else if (sharkY < orcas[3].y && !checkIfWall(orcas[3].position + width)) {
        orcas[3].position += width // move south
      } else if (sharkX > orcas[3].x && !checkIfWall(orcas[3].position - 1)) {
        orcas[3].position -- // move west
      } else if (sharkY > orcas[3].y && !checkIfWall(orcas[3].position - width)) {
        orcas[3].position -= width // move north
      } 
      orcas[3].x = orcas[3].position % width
      orcas[3].y = Math.floor(orcas[3].position / width)
      addOrca(orcas[3].position)
    }
  }

  // ? RELEASE ORCA 4 ******
  function releaseOrcaFour() {
    let orcaFourTimer = setInterval(() => {
      // ! Keep this
      handleCollide()
  
    
      if (orcas[3].position === sharkPosition) {
        clearInterval(orcaFourTimer)
        setTimeout(() => {
          // orcas[3].position = 321
          removeOrca()
          orcas[3].background = 'orca'
          addOrca()
          console.log(orcas[3].background)
          orcaFourTimer = setInterval(() => {
              
            if (orcas[3].position === sharkPosition) {
              clearInterval(orcaFourTimer)
            }
            moveOrcaFour()
          }, 500) 
        }, 5000)
      }
      moveOrcaFour()
    }, 500) 
  }

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
    // release the killer whales
    handleStart()

    // add Shark-Man at new location
    addShark(sharkPosition, sharkClass)
    sharkX = sharkPosition % width
    sharkY = Math.floor(sharkPosition / width)

    // expect to pop up with the current score
    addPoints()

    // change all killer whales to octopuses
    becomeOcto()

    // check if player lost just now
    handleCollide()

    // check if player won just now
    handleWin()
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
      grid.innerHTML = 'You won!!!! 🏆'
    }
  }

  // ! COLLIDE/LOSE function **********
  function handleCollide() {
    orcas.forEach(orca => {
      if (sharkPosition === orca.position) {
        if (orca.background === 'octopus') {
          orca.background = 'octopus'
          removeOrca()
          totalScore += 150
        } else if (orca.background === 'orca' || grid.innerHTML !== 'You won!!!! 🏆') {
          grid.innerHTML = 'You lost! 😭'
        }  
      }
    })
  }

  // ? SCORING function **********
  function addPoints() {
    const sharkClassList = cells[sharkPosition].classList
    if (sharkClassList.contains(fishClass)) {
      totalScore += 20
    } else if (sharkClassList.contains(shellClass)) {
      totalScore += 50
    } 
    // else if (sharkClassList.contains('lobster')) {
    // totalScore += 100
    // }
    scoreDisplay.innerHTML = totalScore
  }

  // ? START GAME function **********
  function handleStart() {
    if (playing === false) {
      playing = true
      addShark(sharkPosition, sharkClass)
      releaseOrcaOne()
      releaseOrcaTwo()
      releaseOrcaThree()
      releaseOrcaFour()
    }
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