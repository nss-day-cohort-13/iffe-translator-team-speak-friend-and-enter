//**********//MAIN//**********//

//EVENT LISTENER FOR CLICK ON TRANSLATE BUTTON//
document.getElementById("translateButton").addEventListener("click", function(event) {
	//IF STATEMENT FILTERS OUT BLANK INPUTS//
 	if(event.target.parentNode.querySelector("#englishInput").value !== "" &&
	  		event.target.parentNode.parentNode.querySelector("#outputLanguageSelect").value !== "Select Language") {
	 		//SETS INNER HTML OF OUTPUT DIV TO BE THE RESULT OF TRANSLATE FUNCTION//
		 	document.getElementById("outputDiv").innerHTML = 
		 		`<h2>${translate[event.target.parentNode.querySelector("#outputLanguageSelect").value.toLowerCase()]
		 			(event.target.parentNode.querySelector("#englishInput").value.toLowerCase())}</h2>`;
 	}
});
//EVENT LISTENER FOR KEYPRESS IN ENGLISH INPUT//
document.getElementById("englishInput").addEventListener("keypress", function(event) {
  	//IF STATEMENT FILTERS OUT KEYPRESSES THAT ARE NOT ENTER//
  	if(event.which === 13 || event.keycode === 13) {
  		//IF STATEMENT FILTERS OUT BLANK INPUTS//
	  	if(event.target.parentNode.querySelector("#englishInput").value !== "" &&
	  		event.target.parentNode.parentNode.querySelector("#outputLanguageSelect").value !== "Select Language") {
	  			//SETS INNER HTML OF OUTPUT DIV TO BE THE RESULT OF TRANSLATE FUNCTION//
		  		document.getElementById("outputDiv").innerHTML = 
		 		`<h2>${translate[event.target.parentNode.parentNode.querySelector("#outputLanguageSelect").value.toLowerCase()]
		 			(event.target.parentNode.querySelector("#englishInput").value.toLowerCase())}</h2>`;
	  	};
  	};
});