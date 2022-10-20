function getComputerChoice()
{
	let result = 1 + Math.floor(Math.random() * 3); 
	if (result === 1)
	{
		return "Rock";
	}
	
	else if (result === 2)
	{
		return "Scissors";
	}

	else 
	{
		return "Paper";
	}
}

function getPlayerChoice ()
{
	return "rOCK";
}

function capitalizeFirstLetter(string) 
{
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function playSingleRound(ps, cs)
{
	let playerSelection = capitalizeFirstLetter(ps.toLowerCase());
	let computerSelection = capitalizeFirstLetter(cs.toLowerCase());

	console.log("Player selection: " + playerSelection);
	console.log("Computer selection: " + computerSelection)
	
	console.log("Final outcome:")
	if (playerSelection == computerSelection)
	{
		return "Draw";
	}

	else if (playerSelection == "Scissors" && computerSelection == "Paper")
	{
		return "You won!";
	}

	else if (playerSelection == "Paper" && computerSelection == "Rock")
	{
		return "You win!";
	}

	else if (playerSelection == "Rock" && computerSelection == "Scissors")
	{
		return "You won!";
	}

	else
	{
		return "You lose!";
	}

}

console.log(playSingleRound(getPlayerChoice(), getComputerChoice()));