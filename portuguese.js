var translate = function(translate) {

  var lexicon = {
    "merry christmas": "feliz natal",
    "happy new year": "feliz Ano Novo"
  };

translate.portuguese = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);