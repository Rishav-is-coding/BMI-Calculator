let form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "please inter a valid height"
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'please inter a valid weight'
    }else{
        result.innerHTML =  (weight / ((height * height) / 10000)).toFixed(2)
    }

    if(result.innerHTML < 18.60){
        result.innerHTML = `${result.innerHTML} </br> under weight`
    }else if(result.innerHTML > 18.60 && result.innerHTML < 24.90){
        result.innerHTML = `${result.innerHTML} </br> normal`
    }else if(result.innerHTML > 24.90){
        result.innerHTML = `${result.innerHTML} </br> over weight`
    }
    
})