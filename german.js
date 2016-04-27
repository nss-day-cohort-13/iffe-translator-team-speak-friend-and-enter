//**********//GERMAN//**********//

//AUGMENTING IIFE FOR GERMAN TRANSLATIONS//
var translate = function(translate) {

	var lexicon = {
		"merry christmas": "Fröhliche Weihnachten",
    "happy new year": "Frohes neues Jahr"
	};

translate.german = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);
