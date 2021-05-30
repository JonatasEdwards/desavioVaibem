const marvel = {
    render: () =>{
        
        const urlAPI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=2075720b6fef328e52932ea1ac22dc28&hash=f9afd056822756c87b3aa84752adc32a&limit=100';
        const container = document.querySelector('#content');
        let contentHTML = "";
 
        fetch(urlAPI)
           .then(res => res.json())
           .then((json) =>{
     
            contentHTML+= "<div class='Heroes'> ";
                for(const hero of json.data.results){
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                    <div class="HeroesCard" onclick="GetHeroById(${hero.id})">
                        <img class="HeroesCard__Img" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    <h3 class="HeroesCard__Title">${hero.name}</h3>
                    
                    </div> `;
                }
            contentHTML+= "</div>";
            container.innerHTML = contentHTML;
                
            })
        }
};
marvel.render();

function GetHeroById(id){
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=2075720b6fef328e52932ea1ac22dc28&hash=f9afd056822756c87b3aa84752adc32a`
    console.log(url);
    const content = document.querySelector('#content');
    let contentHTML = "";
    

    fetch(url)
        .then(res => res.json())
        .then((json) =>{
            const hero = json.data.results[0]
            contentHTML += `
            
            <div class='Heroes'>
                <div class="HeroesCardDescription">
                <img class="HeroesCard__ImgDescription" src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                <h3 class="HeroesCard__Title">${hero.name}</h3>
                <h2 class="HeroesCard__Description">${hero.description}</h2>
                </div> 
            </div>
            `;
            
        
            content.innerHTML = contentHTML;
            
        })
}
function back(){
    marvel.render();
}

