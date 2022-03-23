// Calling API 
const fetchPokemon = () => {

    const pokeName = document.getElementById('poke-name');
    const pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`

    fetch( url )
        .then(( res ) => {
        
            if( res.status != '200' ) { console.log( res ); alert( 'There is not result' ); }
            else if( pokeInput === '' ) { alert( 'Please insert a search first' ); }
            else { return res.json() }

        })
        .then( ( data ) => {
            
            console.log( data );
            // Getting name
            const pokeName = data.name;
            pokemonName( pokeName );

            // Getting experience
            const pokeExperience = data.base_experience;
            experience( pokeExperience );

            // Getting weight
            const pokemonWeight = data.weight;
            pokeWeight( pokemonWeight );

            // Getting height
            const pokemonHeight = data.height;
            pokeHeight( pokemonHeight );

            // Getting pokemon images
            const pokeImg = data.sprites.other['official-artwork'].front_default;
            pokeImage( pokeImg );

            // Getting out id // Temporal
            const pokeId = data.id;
            id( pokeId )

            // Getting pokemon statistics
            const statsArray = data.stats;
            statistics( statsArray );

            // Getting pokemon Movements
            const movesArray = data.moves;
            moves( movesArray );    

        })
}

// FetchPokemon Image
const pokeImage = ( value ) => {
    const pokeImage = document.getElementById('poke-img');
    pokeImage.src = value;
}

// Fetching Statistics
const statistics = ( value ) => {   
    const statisticsArray = document.querySelectorAll('.statistic-item');

    for (let i in value) {
        statisticsArray[i].textContent =`${value[i].base_stat}`;
    }
}

// Fetching Moves
const moves = ( value ) => {

    for ( let i in value ) {
        console.log( value[i].move.name )
    }

}

// Fetching name 
const pokemonName = ( value ) => {
    const pokemonName = document.querySelector('#name');
    pokemonName.textContent = value.toUpperCase();
}

// Fetching Pokemon Id
const id = ( value ) => {
    const pokemonId = document.getElementById('id');
    document.getElementById('pre-id').textContent = "# "

    pokemonId.textContent = value;
}

// Fetching experience
const experience = ( value ) => {
    const pokeExperience = document.getElementById('experience');
    pokeExperience.textContent = 'Exp: ' + value;
}

// Fetching weight
const pokeWeight = ( value ) => {
    const pokemonWeight = document.getElementById('weight');
    pokemonWeight.textContent = 'Weight: ' +  value;
}

// Fetching height
const pokeHeight = ( value ) => {
    const pokemonWeight = document.getElementById('height');
    pokemonWeight.textContent = 'Height: ' +  value;
}




// Fix it
const nextPokeButton = document.querySelector('#top');
nextPokeButton.addEventListener('click', ()=> {

    const pokeInput = document.getElementById('poke-name');

    let pokemonId = document.getElementById('id');
    let newPoke = parseInt(pokemonId.textContent);
    newPoke = newPoke + 1;

    console.log(newPoke)

    pokeInput.textContent = newPoke.toString();
    if(!pokemonId) {
        //        
    }
    fetchPokemon()
})