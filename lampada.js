const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken() {
  return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
  if (!isLampBroken()) {
    lamp.src = 'ligada.jpg'
  }
}

function lampOff() {
  if (!isLampBroken()) {
    if (lampOn) {
      lamp.src = 'desligada.jpg'
    } else {
      lamp.src = 'ligada.jpg'
    }
  }
}

function lampbroken() {
  lamp.src = 'quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampbroken)
