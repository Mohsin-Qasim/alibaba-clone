  // Show the second navbar on scroll
  window.addEventListener('scroll', () => {
    const secondNavbar = document.getElementById('second-navbar');
    if (window.scrollY > 150) { // Adjust scroll value as needed
      secondNavbar.style.display = 'block';
    } else {
      secondNavbar.style.display = 'none';
    }
  });

  //login page
  
  //Sign Up page
  
//   let passwordInput = document.getElementById("passwordInput");
  

//   document.getElementById("submitbtn").addEventListener("click", function (e) {
//     e.preventDefault()
//     let isvalid = true


//  let productSelect = document.getElementById("productSelect") 
//  let countryError = document.getElementById("Country-error")
//     if(productSelect.value == ""  || productSelect.value === undefined  ){
//     countryError.classList.add("text-danger")
//     countryError.innerHTML = "please select country"
//     isvalid=false 
//    }
//    else{
//     countryError.className= "border-success"
  

//    }

//   let fname = document.getElementById("enterfname");
//   let errorname =document.getElementById("error-name")

//    if (fname.value =="" || fname.value === undefined) {
//     errorname.style.color ="red"
//     errorname.innerHTML="please input name"
//       isvalid = false 
//       }
//    else if(fname.value.length <=6) {
//     errorname.style.color = "red"
//     errorname.innerHTML = "character must be 6"
//     errorname.className= "border-success"
  
//    }
//   });
  let submit = document.getElementById("submitbtn");

submit.addEventListener("click", function (e) {
  e.preventDefault()
    let fullNameInput = document.getElementById("enterfname");
    let fullName = fullNameInput.value;
    let nameResult = document.getElementById("nameError");

    let patternName = /^[A-Za-z]{6,}$/;
    if (patternName.test(fullName)) {
        nameResult.innerHTML = "Name is valid";
        nameResult.classList.add("text-success");
        nameResult.classList.remove("text-danger");

        // Border Green
        fullNameInput.classList.remove("border-danger");
        fullNameInput.classList.add("border-success");
    } else {
        nameResult.innerHTML = "Character must be 6";
        nameResult.classList.add("text-danger");

        // Border Red
        fullNameInput.classList.remove("border-success");
        fullNameInput.classList.add("border-danger");

        
    }

    let emailInput = document.getElementById("email");
    let email = emailInput.value;
    let emailResult = document.getElementById("emailError");

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        emailResult.innerHTML = "Email is valid";
        emailResult.classList.add("text-success");
        emailResult.classList.remove("text-danger");

      
        emailInput.classList.remove("border-danger");
        emailInput.classList.add("border-success");

        console.log("go");
    } else {
        emailResult.innerHTML = "Email is not valid";
        emailResult.classList.add("text-danger");

        // Border Red
        emailInput.classList.remove("border-success");
        emailInput.classList.add("border-danger");
    }

    let productSelect = document.getElementById("productSelect").value;
 let countryError = document.getElementById("Country-error");
 if (productSelect==="" || productSelect== undefined) {
  countryError.className= "text-danger"
  countryError.innerHTML = "Select a Country "
  

 }
else{ countryError.textContent=""}
});

