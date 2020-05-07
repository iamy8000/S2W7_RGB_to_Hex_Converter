(function () {

  const container = document.getElementById('container')
  const forms = document.getElementsByClassName('needs-validation')
  const rInput = document.getElementById('inputR')
  const gInput = document.getElementById('inputG')
  const bInput = document.getElementById('inputB')
  const hexInput = document.getElementById('hexInput')
  const showHex = document.getElementById('showHEX')

  //取得RGB值
  let hexIndex = ''
  let colorCodeR = ''
  let colorCodeG = ''
  let colorCodeB = ''


  window.addEventListener('load', function () {
    let validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          colorCodeR = Number(rInput.value)
          colorCodeG = Number(gInput.value)
          colorCodeB = Number(bInput.value)
          rgbToHex(colorCodeR, colorCodeG, colorCodeB)
          showRGBcolor(colorCodeR, colorCodeG, colorCodeB)
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  function showRGBcolor(indexR, indexG, indexB) {
    document.getElementById('colorR').style.background = `rgb(${indexR},0,0)`
    document.getElementById('colorG').style.background = `rgb(0,${indexG},0)`
    document.getElementById('colorB').style.background = `rgb(0,0,${indexB})`
  }

  function rgbToHex(indexR, indexG, indexB) {
    let hexR = indexR.toString(16)
    let hexG = indexG.toString(16)
    let hexB = indexB.toString(16)
    //補0
    if (indexR < 16) {
      hexR = '0' + hexR
    }
    if (indexG < 16) {
      hexG = '0' + hexG
    }
    if (indexB < 16) {
      hexB = '0' + hexB
    }

    hexIndex = (`#${hexR}${hexG}${hexB}`).toUpperCase()
    hexInput.innerText = hexIndex
    showHex.style.backgroundColor = hexIndex
  }

})()