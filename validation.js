function submit(){

    form = document.getElementById("contact-us").value
    names = document.getElementById("names").value
    email = document.getElementById("emails").value
    phone = document.getElementById("phone").value
    ramen = document.getElementById("ramen")
    dryRamen = document.getElementById("dry-ramen")
    newsletter = document.getElementById("newsletter")


    if (names == ""){
        alert("Name must be filled");
        return false;
    } 
    else if (email == ""){
        alert("Email must be filled");
        return false;
    } 
    else if(!email.endsWith("@gmail.com")){
        alert("Email must end with '@gmail.com'")
    } 
    else if(phone == ""){
        alert("Phone number must be filled");
        return false;
    }
    else if(!validatePhone(phone)){
        alert("Phone number is not valid")
    }
    else if(!ramen.checked && !dryRamen.checked){
        alert("Preference must be selected!")
        return;
    }
    else if(!newsletter.checked){
        alert("You must agree to receive the newsletter!")
    }
    else{
        alert("Successful!");
        form.submit()
    }
    
    console.log("CLICK")
}

validatePhone = (phone) => {
    phonePattern = /(\+62|0)8[1-9][0-9]{6,9}$/

    if(phone.length < 10){
        return false;
    }
    else if(!phone.match(phonePattern)){
        return false;
    }
    else return true
}