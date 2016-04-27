var translate = (function(translate) {
  var lexicon = {
    merry christmas: "feliz natal",
    Look to my coming, at first light, on the fifth day. At dawn, look to the East: "Espere minha chegada, na primeira luz, do quinto dia. Aõ amanhecer, olhe para o leste"
  }

translate.portuguese = function(inputWord) {
	return(lexicon[inputWord]);
}

return translate;
}(translate);