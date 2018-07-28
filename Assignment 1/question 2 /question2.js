let chooseFunction = prompt(" Enter 1 to find details of pokemon \n Enter 2 to find previous evolution 	\n Enter 3 to find pokemons with particular weakness type")


let detailsOfPokemon =  (pokemonNameTemp) =>{
	for(let i=0 ; i< pokemonData.pokemon.length;i++)
	{
		if(pokemonData.pokemon[i].name == pokemonNameTemp)
		{
			let previousEvolution = getPreviousEvolution(pokemonData.pokemon[i])
			let nextEvolution = getNextEvolution(pokemonData.pokemon[i])

			alert("id : " + pokemonData.pokemon[i].id + "\n"+
				  "number : " + pokemonData.pokemon[i].num +"\n"+
					"name : "+ pokemonData.pokemon[i].name +"\n"+
				    "img : "+ pokemonData.pokemon[i].img +"\n"+
				    "type: " + pokemonData.pokemon[i].type.toString() +"\n"+
				    "height : "+ pokemonData.pokemon[i].height +"\n"+ 
				    "weight : "+ pokemonData.pokemon[i].weight +"\n"+
				    "candy : "+ pokemonData.pokemon[i].candy +"\n"+
				    "candy_count: "+ pokemonData.pokemon[i].candy_count +"\n"+
				    "egg : "+ pokemonData.pokemon[i].negg +"\n"+
				    "spawn_chance: "+ pokemonData.pokemon[i].spawn_chance +"\n"+
				    "avg_spawns: "+ pokemonData.pokemon[i].avg_spawns +"\n"+
				    "spawn_time: "+ pokemonData.pokemon[i].spawn_time +"\n"+
				    "multipliers: "+ pokemonData.pokemon[i].multipliers +"\n"+
				    "weaknesses: "+ pokemonData.pokemon[i].weaknesses.toString() +"\n"+
				    "prev_evolution: "+ previousEvolution+"\n"+
				    "next_evolution: "+ nextEvolution
				    )
			console.log(pokemonData.pokemon[i])
			break
		}
	console.log(pokemonData.pokemon[i].name)
	}
}// function to take out details of pokemon.

let getPreviousEvolution = (currentPokemon) =>{
	let tempArray = []
	if(currentPokemon.prev_evolution != undefined){
		for(let i=0; i<currentPokemon.prev_evolution.length;i++){
			tempArray.push(currentPokemon.prev_evolution[i].name)
		}
		return tempArray.toString()
	}else{
		return null
	}
}// function to give previous evolution

let getNextEvolution = (currentPokemon) =>{
	let tempArray = []
	if(currentPokemon.next_evolution != undefined)
	{
		for(let i=0; i<currentPokemon.next_evolution.length;i++)
		{
			tempArray.push(currentPokemon.next_evolution[i].name)
		}
		return tempArray.toString()
	}else
	{
		return null
	}
}//function to give next evolution

let previousPokemonEvolution = (pokemonName) =>{
	let previousEvolution = []
	for(let i=0 ; i< pokemonData.pokemon.length;i++)
	{
		if(pokemonData.pokemon[i].next_evolution != undefined)
		{
			for(let j=0 ; j< pokemonData.pokemon[i].next_evolution.length ; j++)
			{
				if(pokemonData.pokemon[i].next_evolution[j].name == pokemonName)
				{
					previousEvolution.push(pokemonData.pokemon[i].name)
				}
			}
		}
	}
	console.log(previousEvolution)
	alert(previousEvolution.toString())
}//function to find out which all pokemon have this name in their next evolution.


let weaknessOfPokemon = (weakness) =>{
	let pokemons = []
	for(let i=0;i<pokemonData.pokemon.length;i++)
	{
		if(pokemonData.pokemon[i].weaknesses != undefined)
		{
			for(let j=0; j< pokemonData.pokemon[i].weaknesses.length; j++)
			{
				if(pokemonData.pokemon[i].weaknesses[j] == weakness)
				{
					pokemons.push(pokemonData.pokemon[i].name)
				}
			}
		}
	}
	alert(pokemons.toString())
}//function to take out pokemon with a particular type of weakness

if(chooseFunction == 1)
{
	let tempPokemonName = prompt("Enter pokemon name")
	detailsOfPokemon(tempPokemonName.toString())
} else if(chooseFunction == 2)
{
	let tempPokemonName2 = prompt("Enter pokemon name")
	previousPokemonEvolution(tempPokemonName2.toString())
}else if(chooseFunction == 3)
{
	let weaknessType = prompt("Enter name of the weakness")
	weaknessOfPokemon(weaknessType.toString())
}else
{
	alert("Please fill vaild choice")
}// Asking user to choose with function to run.
