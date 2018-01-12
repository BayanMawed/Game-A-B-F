var container = document.getElementById("main")
var stats = document.getElementById("stats")
var pic = document.getElementById("pic")


var story_start = function(){
  stats.innerHTML = "<h2>  A little child is going to buy a bar of chocolate from the supermarket.<br> There are three roads. <br> she can choose one to arrive to the supermarket.</h2>" +" <img id='' src= '/home/bayan/Desktop/Game/1.jpeg'>"
  container.innerHTML = 
    "<br>"+
    "<div>Do you want to help</div>"+
    "<button id='a'>yes</button>"+
    "<button id='b'>no</button>"
  document.getElementById("a").addEventListener("click",asktochoose)
  document.getElementById("b").addEventListener("click",sayno)
}

var asktochoose = function(){
  stats.innerHTML = "Choose one road from the three"+" <img id='' src= '/home/bayan/Desktop/Game/3.jpeg'>"
  container.innerHTML = 
    "<button id='c'>Road1</button>"+
    "<button id='d'>Road2</button>"+
    "<button id='e'>Road3</button>"
  document.getElementById("c").addEventListener("click",Road1)
  document.getElementById("d").addEventListener("click",Road2)
  document.getElementById("e").addEventListener("click",Road3)
  
}

var Road1= function(){
    stats.innerHTML = 
      "This is the correct way!"+" <img id='' src= '/home/bayan/Desktop/Game/8.jpeg'>"+" <img id='' src= '/home/bayan/Desktop/Game/9.jpg'>"
    // pic.style.background-image =
    // pic.stylesheet.insertRule("background-image: url(https://cdn.hyperdev.com/drag-in-files.svg?1477153069954)")
    // pic.style = 
    //   "background-image: url(https://cdn.hyperdev.com/drag-in-files.svg?1477153069954)"
    container.innerHTML = 
      "<button id='f'>play again</button>"
      document.getElementById("f").addEventListener("click",story_start)
      
  
}

var Road2 = function(){
    stats.innerHTML ="The dog will bite her :("+" <img id='' src= '/home/bayan/Desktop/Game/4.jpeg'>"
    container.innerHTML = 
      "<button id='f'>play again</button>"
        document.getElementById("f").addEventListener("click",story_start)
}
var Road3 = function(){
    stats.innerHTML ="A stranger will stole the money from her"+" <img id='' src= '/home/bayan/Desktop/Game/6.jpeg'>"
    container.innerHTML = 
      "<button id='f'>play again</button>"
      document.getElementById("f").addEventListener("click",story_start)
}
var sayno = function(){
    stats.innerHTML = "<h1>You are so cruel</h1>"+" <img id='' src= '/home/bayan/Desktop/Game/10.jpeg'>"
    container.innerHTML = 
      "<button id='f'>play again</button>"
      document.getElementById("f").addEventListener("click",story_start)
}

story_start()
