// JavaScript source code

var textFormatterString = function (data) {

    var inputText = data.inputText;
    var maxLineSize = data.maxLineSize;
    var maxLinesNumber = data.maxLinesNumber;
    var formattingType = data.formattingType;
    var outputTextString;

    switch (formattingType) {
        case 0: {
            outputTextString = HyphenationByWord_String(undefined, inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 1: {
            outputTextString = HyphenationByLetter_String(inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 2: {
            outputTextString = HyphenationBySentence_String(inputText, maxLineSize, maxLinesNumber);
            break;
        }

        case 3: {
            outputTextString = HyphenationByWord_String(removeHyphenationSymbols(inputText), inputText, maxLineSize, maxLinesNumber);
            break;
        }
    }

    return outputTextString;
};