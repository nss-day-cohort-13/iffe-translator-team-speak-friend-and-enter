var translate = function(translate) {
	
	var lexicon = {
		keyone: 'PORTUGUESE_1',
		keytwo: 'PORTUGUESE_2',
		keythree: 'PORTUGUESE_3'
	};

translate.portuguese = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);