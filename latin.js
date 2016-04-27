//**********//LATIN//**********//

//AUGMENTING IIFE FOR LATIN TRANSLATIONS//
var translate = function(translate) {

	var lexicon = {
		"merry christmas": "felicem natalem Christi",
    "happy new year": "anni beatum"
	};

translate.latin = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);
