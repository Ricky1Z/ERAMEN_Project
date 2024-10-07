ramen = document.getElementById('ramen-category-button')
dryRamen = document.getElementById('dryramen-category-button')
tempura = document.getElementById('tempura-category-button')

ramen.addEventListener("click", ramenFunction)
dryRamen.addEventListener("click", dryRamenFunction)
tempura.addEventListener("click", tempuraFunction)

function ramenFunction(){

    console.log("tes")
    document.getElementById('ramen-category').style.display = "flex"
    document.getElementById('ramen-category').style.flexDirection = "column"
    document.getElementById('dryramen-category').style.display = "none"
    document.getElementById('tempura-category').style.display = "none"

    document.getElementById('ramen-category-button').style.backgroundColor = "#E2211C"
    document.getElementById('ramen-category-button').style.color = "white"
    document.getElementById('ramen-category-button').style.border = "none"

    document.getElementById('dryramen-category-button').style.backgroundColor = "transparent"
    document.getElementById('dryramen-category-button').style.color = "black"
    document.getElementById('dryramen-category-button').style.border = "1px solid #73777B"
    
    document.getElementById('tempura-category-button').style.backgroundColor = "transparent"
    document.getElementById('tempura-category-button').style.color = "black"
    document.getElementById('tempura-category-button').style.border = "1px solid #73777B"
}

function dryRamenFunction(){
    document.getElementById('ramen-category').style.display = "none"
    document.getElementById('dryramen-category').style.display = "flex"
    document.getElementById('dryramen-category').style.flexDirection = "column"
    document.getElementById('tempura-category').style.display = "none"

    document.getElementById('dryramen-category-button').style.backgroundColor = "#E2211C"
    document.getElementById('dryramen-category-button').style.color = "white"
    document.getElementById('dryramen-category-button').style.border = "none"

    document.getElementById('ramen-category-button').style.backgroundColor = "transparent"
    document.getElementById('ramen-category-button').style.color = "black"
    document.getElementById('ramen-category-button').style.border = "1px solid #73777B"
    
    document.getElementById('tempura-category-button').style.backgroundColor = "transparent"
    document.getElementById('tempura-category-button').style.color = "black"
    document.getElementById('tempura-category-button').style.border = "1px solid #73777B"
    
}

function tempuraFunction(){

    document.getElementById('ramen-category').style.display = "none"
    document.getElementById('dryramen-category').style.display = "none"
    document.getElementById('tempura-category').style.display = "flex"
    document.getElementById('tempura-category').style.flexDirection = "column"

    document.getElementById('tempura-category-button').style.backgroundColor = "#E2211C"
    document.getElementById('tempura-category-button').style.color = "white"
    document.getElementById('tempura-category-button').style.border = "none"

    document.getElementById('dryramen-category-button').style.backgroundColor = "transparent"
    document.getElementById('dryramen-category-button').style.color = "black"
    document.getElementById('dryramen-category-button').style.border = "1px solid #73777B"
    
    document.getElementById('ramen-category-button').style.background = "transparent"
    document.getElementById('ramen-category-button').style.color = "black"
    document.getElementById('ramen-category-button').style.border = "1px solid #73777B"
    
}