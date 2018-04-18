const colors = [
  '#228b22','#5CB85C','#5EB97C','#B2D139',
  '#F16831','#F79321','#F3CD00','#FFC403',
  '#d9534f','#3A3A3A','#42526D','#167890',
  '#428bca','#679BCC','#00AFF0','#5bc0de',
  '#B80082','#A64D8D','#D64D9B','#B87FA8',
  '#FAF3D7','#F4F5F7'
]

let paletteElement = document.getElementById('palette')

function onPageLoad() {
  setPaletteSize()
  renderColorBoxes()
  paletteElement.style.display = 'none'
}

function setPaletteSize() {
  const colorBoxSize = 25
  const margin = 2
  const padding = 6
  const numRows = Math.ceil(colors.length / 4)
  const width = (4 * colorBoxSize) + (4 * margin) + (2 * padding) - 4
  //console.log(`width=${width} colorBoxSize=${colorBoxSize} margin=${margin} padding=${padding}`)
  const height = (numRows * colorBoxSize) + (numRows * margin * 2) + (2 * padding)
  paletteElement.style.width = width + 'px'
  paletteElement.style.height = height + 'px'
}

function renderColorBoxes() {
  const paletteElement = document.getElementById('palette')
  let tags = ''
  for(let i=0; i<colors.length; i++) {
    tags += `<div id="${i}" class="color-box" style="background-color: ${colors[i]};" onclick="onSelectColor(this.id)"></div>`
  }
  paletteElement.innerHTML = tags
}

function onSelectColor(id) {
  paletteElement.style.display = 'none'
  document.getElementById('color-well').style.backgroundColor = colors[id]
}

function toggleShowPalette() {
  if (paletteElement.style.display === 'none') {
    paletteElement.style.display = 'flex'
  } else {
    paletteElement.style.display = 'none'
  }
}