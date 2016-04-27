var translate = function(translate) {
	
	var lexicon = {
		keyone: 'GERMAN_1',
		keytwo: 'GERMAN_2',
		keythree: 'GERMAN_3'
	};
translate.german = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);
