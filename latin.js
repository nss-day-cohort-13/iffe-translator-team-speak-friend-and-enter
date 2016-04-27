var translate = function(translate) {

	var lexicon = {
		Merry Christmas: "felicem natalem Christi",
		In the morning, look west. An old guy in a white dress will come over the hill or something.  -Joe Shepherd: "Mane , occidentem respicit . Guido vetus vestis candida vel veniet super collem.  -Joe pastor"
	}

translate.latin = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);