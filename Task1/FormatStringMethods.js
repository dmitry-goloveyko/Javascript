// JavaScript source code

var HyphenationByWord_String = function (formattedText, inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 1;
    var previousSpace = 0;

    var text = formattedText || inputText;

    for (var i = 0; i < text.length; i++) {
        if(text[i] === ' ')
            previousSpace = i;

        var currentLineSize = i - currentLineStart;
        if (currentLineSize === maxLineSize) {
            if (!(currentLineCount === maxLinesNumber)) {
                if (previousSpace !== 0) {
                    text = replaceAtIndex(text, previousSpace, '\n')
                    i = previousSpace;
                    currentLineStart = previousSpace + 1;
                }
                else {
                    text = insertAtIndex(text, previousSpace, '\n');
                    i = previousSpace;
                    currentLineStart = i;
                }
                currentLineCount++;
            }
            else {
                text = cutTextString(text, i);
                break;
            }
        }
    }

    return text;
}

var HyphenationByLetter_String = function (inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 0;
    var text = inputText;

    for (var i = 0; i < text.length; i++) {
        var currentLineSize = i - currentLineStart;
        if (currentLineSize === maxLineSize) {
            currentLineCount++;

            if (currentLineCount === maxLinesNumber) {
                text = cutTextString(text, i);
                break;
            }
            else {
                if (text[i].match(/^[a-zA-Z0-9]$/)) {
                    if (!(text[i + 1] === ' ')) {
                        text = insertAtIndex(text, ++i, '-\n');
                    }
                    else {
                        text = replaceAtIndex(text, ++i, '\n');
                    }
                    i++;
                }
                else {
                    text = replaceAtIndex(text, i, '\n');
                    i++;
                }

                currentLineStart = i;
                currentLinePosition = i;
                continue;
            }
        }
        currentLinePosition++;
    }

    return text;
}

var HyphenationBySentence_String = function (inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 0;
    var text = inputText;


    for (var i = 0; i < text.length; i++) {
        currentLinePosition++;

        if (text[i] === '.') {
            if (text[i + 1] === ' ') {
                currentLineCount++;
                text = replaceAtIndex(text, i++, '\n');
                currentLineStart = 0;
                currentLinePosition = 0;
                continue;
            }
        }

        if ((currentLinePosition - currentLineStart) == maxLineSize) {
            currentLineCount++;

            if (currentLineCount > maxLinesNumber - 1) {
                text = cutTextString(text, i);
                break;
            }
            else {
                text = replaceAtIndex(text, i, '\n');
                i++;
                currentLineStart = 0;
                currentLinePosition = 0;
                continue;
            }
        }
    }

    return text;
}