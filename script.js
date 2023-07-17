 async function dogImages(){
    try{
        const images = await Promise.all([
            fetch('https://dog.ceo/api/breeds/image/random'),
            fetch('https://dog.ceo/api/breeds/image/random'),
            fetch('https://dog.ceo/api/breeds/image/random')
        ]);

        for(let image of images){
            if(image.ok){
               const result = await image.json();
               displayResult(result);
            }else{
                console.log(error)
            }
        }
    }
    catch(error){
        console.log(error)
    }
} 

async function catFacts(){
    try{
        const facts = await Promise.all([
            fetch('https://meowfacts.herokuapp.com'),
            fetch('https://meowfacts.herokuapp.com'),
            fetch('https://meowfacts.herokuapp.com')
        ]);

        for(let fact of facts){
            if(fact.ok){
                const result2 = await fact.json();
                displayFacts(result2)
            }else{
                console.log(error)
            }
        }
    }

    catch(error){
        console.log(error)
    }
}


function displayResult(result){
    const img = document.createElement('img');
    const imageContainer = document.getElementById('imageContainer');
    console.log(imageContainer)
    img.src = result.message;
    imageContainer.appendChild(img)
} 

 function displayFacts(result2){
    const factContainer = document.getElementById('factContainer');
    result2.data.forEach(fact => {
        const factElement = document.createElement('p');
        factElement.innerText = fact;
        factContainer.appendChild(factElement);
      });
}

dogImages();
catFacts(); 



