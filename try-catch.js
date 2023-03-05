function checkAge(){
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error')
    try{
        const age = parseInt(ageText);
        if(isNaN(age)){
            throw "Please enter a number";
        }
        else if(age < 18){
            throw "too young, Not allowed"
        }
        else if(age > 30){
            throw "Too old, not allowed"
        }
        errorTag.innerHTML = '';
        
    }
    catch(err){
        console.log('Error: ', err);
        errorTag.innerHTML = 'Error:' + err;
    }
    finally{
        console.log('All done');
    }
    console.log(11111);
}