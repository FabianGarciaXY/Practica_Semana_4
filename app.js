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
            name( pokeName )

            // Getting pokemon images
            const pokeImg = data.sprites.other.home.front_default;
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
        statisticsArray[i].textContent = ` ${value[i].base_stat}`
    }
}

// Fetching Moves
const moves = ( value ) => {

    for ( let i in value ) {
        console.log( value[i].move.name )
    }

}

// Fetching name 
const name = ( value ) => {
    const pokemonName = document.querySelector('#name');
    pokemonName.textContent = value;
}

// Fetching Pokemon Id
const id = ( value ) => {
    const pokemonId = document.getElementById('id');
    pokemonId.textContent = " #" + value;
}