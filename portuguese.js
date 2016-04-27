//**********//PORTUGUESE//**********//

//AUGMENTING IIFE FOR PORTUGUESE TRANSLATIONS//
var translate = function(translate) {

  var lexicon = {
    "merry christmas": "feliz natal",

    "happy new year": "feliz ano novo"
  };

translate.portuguese = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);