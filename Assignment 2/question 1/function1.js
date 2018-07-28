let checkLogin = (email = "", password = "", allUsers = []) =>{
	let isUserFound = false
	let passwordCorrect = false

	for(currentUser of allUsers){
		console.log(currentUser)

		if(currentUser.email == email){

			if(currentUser.password == password){
				isUserFound = true
				passwordCorrect = true
				break
			} else {
				isUserFound = true
				passwordCorrect =false
				break
			}

		} else{
			isUserFound = false
		}
	}// end of loop

	if(isUserFound == true && passwordCorrect == true) {
		alert(`You are logged in`)
	} else if (isUserFound == true && passwordCorrect == false) {
		alert(`You have provided incorrect password`)
	} else{
		alert(`No user with this email found`)
	}
}