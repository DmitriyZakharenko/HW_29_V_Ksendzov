let Q = prompt("How old are you?")
const checkAge = function(age) {
    let age_2 = 18
    let age_3 = 60
    if (typeof(age) === "string"){
        agestring = parseInt(age)
        if (isNaN(agestring)){ 
                 alert("Error")
             }
            else if (agestring < age_2){
                alert("You don’t have access cause your age is", age, "It’s less then")
            } 
            else if (agestring >= age_2 && age < age_3){
                alert("Welcome!")
            } 
            else if (agestring > age_3){
                alert("Keep calm and look Culture channel")
            } 
            else {
                alert("Technical work")
            }
    }
    else if (typeof(age) != "number"){
        alert("Error")
    }   
    else {
            if (age < age_2){
                alert("You don’t have access cause your age is", age, "It’s less then")
            } 
            else if (age >= age_2 && age < age_3){
                alert("Welcome!")
            } 
            else if (age > age_3){
                alert("Keep calm and look Culture channel")
            } 
            else {
                alert("Technical work")
            }
        }
    }
checkAge(Q)
