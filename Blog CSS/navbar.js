/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
function makeChildInBody(tagName, text, Class, id, styles){
    let element = document.createElement(tagName)
    element.innerText = text
    document.getElementsByTagName("body")[0].appendChild(element)
    if(!tagName){
        throw new Error("Tag name is not define!")
        return
    }
    if(!text){
        throw new Error("Text is not define!")
        return
    }
    if(Class){
        element.classList.add(Class)
    }
    if(id){
        element.setAttribute("id", id)
    }
    if(styles){
        element.style.cssText = styles
    }
}
function openNav2() {
    document.getElementById("mySidenav3").style.width = "100%";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav2() {
    document.getElementById("mySidenav3").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
