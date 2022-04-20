
const checkAge = function(age) {
    let age_2 = 18
    let age_3 = 60
    if (typeof(age) === "string"){
        agestring = parseInt(age)
        if (isNaN(agestring)){ 
            console.log ("Error")
             }
            else if (agestring < age_2){
            console.log ("You don’t have access cause your age is", age, "It’s less then")
            } 
            else if (agestring >= age_2 && age < age_3){
            console.log("Welcome!")
            } 
            else if (agestring > age_3){
            console.log("Keep calm and look Culture channel")
            } 
            else {
            console.log("Technical work")
            }
    }
    else if (typeof(age) != "number"){
        console.log ("Error")
    }   
    else {
            if (age < age_2){
            console.log ("You don’t have access cause your age is", age, "It’s less then")
            } 
            else if (age >= age_2 && age < age_3){
            console.log("Welcome!")
            } 
            else if (age > age_3){
            console.log("Keep calm and look Culture channel")
            } 
            else {
            console.log("Technical work")
            }
        }
    }
checkAge (17)
checkAge (18)
checkAge (61)
checkAge ("2")
checkAge ("24")
checkAge ("sdf12")
checkAge ("sadf")
checkAge (19241924124n)
