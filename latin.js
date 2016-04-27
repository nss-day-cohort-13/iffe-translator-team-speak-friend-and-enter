var translate = function(translate) {
	
	var lexicon = {
		keyone: 'LATIN_1',
		keytwo: 'LATIN_2',
		keythree: 'LATIN_3'
	};

translate.latin = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);
