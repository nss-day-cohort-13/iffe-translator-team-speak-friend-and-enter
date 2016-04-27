var translate = function(translate) {
	
	var lexicon = {
		keyOne: 'valueOne',
		keyTwo: 'valueTwo',
		keyThree: 'valueThree'
	};

translate.portuguese = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);