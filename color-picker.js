class ColorPicker {
  constructor(colorWellId, selectedColor) {
    this.colors = [
      '#228b22','#5CB85C','#3CB990','#B2D139',
      '#d9534f','#FFCC01','#FFC403','#3A3A3A',
      '#42526D','#167890','#428bca','#00AFF0',
      '#B80082','#A64D8D','#D64D9B','#B87FA8'
    ]
    this.wellElement = document.getElementById(colorWellId)
    this.paletteElement = document.getElementById('palette')
    this.wellElement.style.backgroundColor = selectedColor

    this.setPaletteSize()
    this.setPalettePos()
    this.renderColorBoxes()
    this.paletteElement.style.display = 'none'
  }

  setPaletteSize() {
    const colorBoxSize = 25
    const margin = 2
    const padding = 6
    const numRows = Math.ceil(this.colors.length / 4)
    const width = (4 * colorBoxSize) + (4 * margin) + (2 * padding)
    //console.log(`width=${width} colorBoxSize=${colorBoxSize} margin=${margin} padding=${padding}`)
    const height = (numRows * colorBoxSize) + (numRows * margin * 2) + (2 * padding)
    this.paletteElement.style.width = width + 'px'
    this.paletteElement.style.height = height + 'px'
  }

  setPalettePos() {
    const rect = this.wellElement.getBoundingClientRect();
    this.paletteElement.style.left = `${rect.left}px`
    const top = rect.bottom + 2
    this.paletteElement.style.top = `${top}px`
    console.log(rect)
  }

  renderColorBoxes() {
    let tags = ''
    for(let i=0; i<this.colors.length; i++) {
      tags += `<div id="${i}" class="color-box" style="background-color: ${this.colors[i]};" onclick="colorPicker1.onSelectColor(this.id)"></div>`
    }
    this.paletteElement.innerHTML = tags
  }

  onSelectColor(id) {
    this.paletteElement.style.display = 'none'
    this.wellElement.style.backgroundColor = this.colors[id]
    let event = new CustomEvent('colorPicked', { detail: this.colors[id] });
    document.dispatchEvent(event)
  }

  toggleShowPalette() {
    if (this.paletteElement.style.display === 'none') {
      this.paletteElement.style.display = 'flex'
    } else {
      this.paletteElement.style.display = 'none'
    }
  }
}
