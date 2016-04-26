var englishInput = ""
var translateButton = ""
var outputDiv = ""
var outputLanguageSelect = ""

translateButton.addEventListener("click", function(event)) {
  translate.outputLanguageSelect(englishInput.value);
}
englishInput.addEventListener("keyup", function(event) {
  if (event.which === 13 || event.keycode === 13) {
    if(englishInput.value !== "") {
      translate.outputLanguageSelect(englishInput.value);
    }
  }
});
