var settingsmenu = document.querySelector(".settings-menu");

var darkBattun = document.getElementById("dark-battun");


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");
}
darkBattun.onclick =function(){
    darkBattun.classList.toggle("dark-battun-on");
    document.body.classList.toggle("dark-theme");
    
    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBattun.classList.remove("dark-battun-on");
    document.body.classList.remove("dark-theme");
}
 else if(localStorage.getItem("theme") == "dark"){
    darkBattun.classList.add("dark-battun-on");
    document.body.classList.add("dark-theme");

 }
else{
    localStorage.setItem("theme", "light");
}