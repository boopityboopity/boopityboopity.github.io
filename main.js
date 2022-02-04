document.getElementById("StartRollThenPoem").addEventListener(
  "click", function () {
    const rickroll_element = document.getElementById("RickRoll")
    rickroll_element.style.display = "block"
    rickroll_element.setAttribute("src", "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")
    let sorry = document.createElement("p")
    sorry.innerHTML = "im sorry I RICKROLLED ON UR BDAY BSHAHAHHAA OKAY READ"
    setTimeout(function(){
      document.getElementById("Center").insertBefore(sorry, rickroll_element)
      rickroll_element.remove()
      setTimeout(function(){
        sorry.remove()
        document.getElementById("Poem").style.display = "flex"
        document.getElementById("StartRollThenPoem").remove()
      }, 2500)
    }, 5000)
  }
)

//Soundboard

function audioComfort () {
  let audio = new Audio('assets/comfort.mp3')
  audio.play();
}
function audioDateMe () {
  let audio = new Audio('assets/date me.mp3')
  audio.play();
}
function audioEncouragement () {
  let audio = new Audio('assets/encouragement.mp3')
  audio.play();
}
function audioGropeMe () {
  let audio = new Audio('assets/grope me.mp3')
  audio.play();
}
function audioTite () {
  let audio = new Audio('assets/tite.mp3')
  audio.play();
}
function audioLove () {
  let audio = new Audio('assets/love.mp3')
  audio.play();
}
function audioThoughts () {
  let audio = new Audio('assets/damn.mp3')
  audio.play();
}
