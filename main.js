document.getElementById("translateButton").addEventListener("click", function(event) {
 	if(event.target.parentNode.querySelector("#englishInput").value !== "") {
 	document.getElementById("outputDiv").innerHTML = 
 		`<h2>${translate[event.target.parentNode.querySelector("#outputLanguageSelect").value.toLowerCase()]
 			(event.target.parentNode.querySelector("#englishInput").value.toLowerCase())}</h2>`;
 	}
});
document.getElementById("englishInput").addEventListener("keypress", function(event) {
  if (event.which === 13 || event.keycode === 13) {
  	if(event.target.parentNode.querySelector("#englishInput").value !== "") {
  	document.getElementById("outputDiv").innerHTML = 
  		`<h2>${translate[event.target.parentNode.querySelector("#outputLanguageSelect").value.toLowerCase()]
  			(event.target.parentNode.querySelector("#englishInput").value.toLowerCase())}</h2>`;
  	};
  };
});