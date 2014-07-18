// JavaScript source code

var removeHyphenationSymbols = function (inputText) {
    var text = inputText;

    text = text.replace(/\n/g, ' ');

    return text;
};

var replaceAtIndex = function (text, index, character) {
    return text.substr(0, index) + character + text.substr(index + character.length);
};

var insertAtIndex = function (text, index, string) {
    if (index > 0) {
        return text.substring(0, index) + string + text.substring(index, text.length);
    }
    else
        return string + text;
};

var getDataFromTextareas = function () {
    var data = {
        inputText: document.getElementById('Revision').value,
        maxLineSize: (+document.getElementById('MaxStringSize').value),
        maxLinesNumber: +document.getElementById('MaxLinesAmount').value,
        formattingType: document.getElementById("FormattingType").selectedIndex
    }

    data.maxLineSize--;

    if (data.maxLineSize < 0 || data.maxLineSize === NaN) {
        data.maxLineSize = 0;
    }

    if (data.maxLinesNumber < 0 || data.maxLinesNumber === NaN) {
        data.maxLinesNumber = 0;
    }

    var formattedTextString = textFormatterString(data);
    var formattedTextStringArray = textFormatterStringArray(data);

    setElementTextByID(formattedTextString, 'FormattedTextString');
    setElementTextByID(formattedTextStringArray, 'FormattedTextArray');

    return;
};

var setElementTextByID = function (text, id) {
    document.getElementById(id).value = text;
};

var cutTextString = function (text, i) {
    text = text.slice(0, i - 3);
    text += '...';
    return text;
};

var cutTextStringArray = function (textArray, maxLineSize) {
    if (textArray.length === undefined || textArray.length === 0) {
        textArray[textArray.length] = '...';
    }
    else {
        textArray[textArray.length - 1] = textArray[textArray.length - 1].slice(0, maxLineSize - 3);
        textArray[textArray.length - 1] += '...';
    }

    return textArray;
};