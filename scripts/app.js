function init() {
  const grid = document.querySelector('.grid')
  const cells = []

  const width = 20
  const cellCount = width * width

  // make div in css


  // make grid using JS
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.innerHTML = i
    grid.appendChild(cell)
    cells.push(cell)
  }

  // lightly style board
  // make obvious what everything is with classes and semantic html tags
  // add wall and fish styling as borders and background images





































// ! DO NOT EDIT below this line !
}

window.addEventListener('DOMContentLoaded', init)