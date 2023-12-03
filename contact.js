var sidenav=document.getElementById("sidenav")
var menubar=document.getElementById("menubar")
var close=document.getElementById("close")

menubar.addEventListener("click",function(){
    sidenav.style.right=0
})
close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})