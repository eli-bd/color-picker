# color-picker
A Color Picker that is based on colors you pre-define 

## How to use
Add the color picker to your html: 
```html
<head>
    <link rel="stylesheet" type="text/css" href="color-picker.css">
</head>
<body>
<div id="color-well1" class="color-well" onclick="colorPicker1.toggleShowPalette()"></div>
<div id="palette"></div>
<h3 id="sample-text">A Color picker with pre-selected colors</h3>
</body>
<script src="color-picker.js"></script>
<script>
  const colorPicker1 = new ColorPicker('color-well1', '#3CB990')
  document.addEventListener('colorPicked', (event) => {
    document.getElementById('sample-text').style.color = event.detail
  })
</script>
</html>

```