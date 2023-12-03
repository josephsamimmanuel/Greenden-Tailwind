var sidenav=document.getElementById("sidenav")
var menubar=document.getElementById("menubar")
var close=document.getElementById("close")

menubar.addEventListener("click",function(){
    sidenav.style.right=0
})
close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

var productcontainer=document.getElementById("productcontainer")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")


search.addEventListener("keyup",function(){
    var enteredvalue=this.value.toUpperCase()
    // console.log(enteredvalue)

    // var name="Apple"
    // console.log(name.indexOf("A"))

    for(i=0;i<productlist.length;i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"
        }
    }
})