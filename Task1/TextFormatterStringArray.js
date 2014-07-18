// JavaScript source code

var textFormatterStringArray = function (data) {

    var inputText = data.inputText;
    var maxLineSize = data.maxLineSize;
    var maxLinesNumber = data.maxLinesNumber;
    var formattingType = data.formattingType;
    var outputTextStringArray;

    switch (formattingType) {
        case 0: {
            outputTextStringArray = HyphenationByWord_StringArray(undefined, inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 1: {
            outputTextStringArray = HyphenationByLetter_StringArray(inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 2: {
            outputTextStringArray = HyphenationBySentence_StringArray(inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 3: {
            outputTextStringArray = HyphenationByWord_StringArray(removeHyphenationSymbols(inputText), inputText, maxLineSize, maxLinesNumber);
            break;
        }
    }

    return outputTextStringArray;
};