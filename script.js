let dog = {
  name: "Steve",
  age: 1,
  location: "Japan",
  profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
  bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
  backgroundColor: "#00FFFF",
  stats: {
      followers: "1.2M",
      likes: "8M",
      posts: "2K"
  }
}


// how do i access the dom?
// how do i update the dom?
function changeToDog() {
  

document.getElementById("name").innerText= dog.name;
document.getElementById("age").innerText = dog.age;
document.getElementById("location").innerText = dog.location;
document.getElementsByClassName("profile")[0].src = dog.profileImg;
document.getElementsByClassName("top-pattern")[0].style.backgroundImage = dog.bannerImg;

document.getElementsByClassName("stats")[0].firstChild.innerText = dog.stats.followers;
document.getElementsByClassName("stats")[1].firstChild.innerText = dog.stats.likes;
document.getElementsByClassName("stats")[2].firstChild.innerText = dog.stats.posts;

for (let x in dog.stats) {
  if(x == 'followers'){
    document.getElementsByClassName("stats")[0].lastChild.innerText = x;
  } else if(x == 'likes'){
    document.getElementsByClassName("stats")[1].lastChild.innerText = x;
  } else if(x == 'posts'){
    document.getElementsByClassName("stats")[2].lastChild.innerText = x;
  }
}

let dogColor = dog.backgroundColor;

document.body.style.backgroundColor = dogColor;
}


// why is the backgroundColor or style not loading in DOM
// why cant we use it in a heirarchy

  
  document.getElementById("name").addEventListener("click", function(){
    if(document.getElementById("name").style.color== "red"){
      document.getElementById("name").style.color = "blue";
    } else{
    document.getElementById("name").style.color = "red";
    }
  })
  
  let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: "https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: "url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {
        return "meow meow"
    }
}

function changeToCat() {
  

  document.getElementById("name").innerText= cat.name;
  document.getElementById("age").innerText = cat.age;
  document.getElementById("location").innerText = cat.location;
  document.getElementsByClassName("profile")[0].src = cat.profileImg;
  document.getElementsByClassName("top-pattern")[0].style.backgroundImage = cat.bannerImg;
  
  document.getElementsByClassName("stats")[0].firstChild.innerText = cat.stats.followers;
  document.getElementsByClassName("stats")[1].firstChild.innerText = cat.stats.likes;
  document.getElementsByClassName("stats")[2].firstChild.innerText = cat.stats.posts;
  
  for (let x in cat.stats) {
    if(x == 'followers'){
      document.getElementsByClassName("stats")[0].lastChild.innerText = x;
    } else if(x == 'likes'){
      document.getElementsByClassName("stats")[1].lastChild.innerText = x;
    } else if(x == 'posts'){
      document.getElementsByClassName("stats")[2].lastChild.innerText = x;
    }
  }
  
  let catColor = cat.backgroundColor;
  
  document.body.style.backgroundColor = catColor;
  }

document.getElementById("btn").addEventListener("click", function() {
  if(document.getElementById("name").innerText== "Nabilah Wahab"){
    changeToDog();
  } else if(document.getElementById("name").innerText == dog.name){
    changeToCat();
  }else if(document.getElementById("name").innerText == cat.name){
    changeToDog();
  }
})

