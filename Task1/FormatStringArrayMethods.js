// JavaScript source code

var HyphenationByWord_StringArray = function (formattedText, inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 0;
    var previousSpace = 0;
    var textArray = [];

    var text = formattedText || inputText;

    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ')
            previousSpace = i;

        var currentLineSize = i - currentLineStart;
        if (currentLineSize === maxLineSize) {
            if (!(currentLineCount === maxLinesNumber)) {
                if (previousSpace !== 0) {
                    text = replaceAtIndex(text, previousSpace, '\n')
                    var buf = text.slice(currentLineStart, previousSpace);
                    buf += '\n';
                    textArray.push(buf);
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
        }
    }

    textArray = cutTextStringArray(textArray, maxLineSize);

    textArray = textArray.join('');

    return textArray;
}

var HyphenationByLetter_StringArray = function (inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 0;
    var text = inputText;
    var textArray = [];


    for (var i = 0; i < text.length; i++) {
        
        if ((currentLinePosition - currentLineStart) === maxLineSize) {
            currentLineCount++;

            if (currentLineCount === maxLinesNumber + 1) {
                textArray = cutTextStringArray(textArray, maxLineSize);
                break;
            }
            else {
                if (text[i].match(/^[a-zA-Z0-9]$/)) {
                    if (!(text[i + 1] === ' ')) {
                        text = insertAtIndex(text, ++i, '-\n');
                        var buf = text.slice(currentLineStart, ++i);
                        textArray.push(buf);
                    }
                    else {
                        text = replaceAtIndex(text, ++i, '\n');
                        var buf = text.slice(currentLineStart, ++i);
                        textArray.push(buf);
                    }
                }
                else {
                    text = replaceAtIndex(text, i, '\n');
                    var buf = text.slice(currentLineStart, ++i);
                    textArray.push(buf);
                }

                currentLineStart = i;
                currentLinePosition = i;
                continue;
            }

        }
        currentLinePosition++;

    }

    textArray = textArray.join('');

    return textArray;
}

var HyphenationBySentence_StringArray = function (inputText, maxLineSize, maxLinesNumber) {
    var currentLineStart = 0;
    var currentLinePosition = 0;
    var currentLineCount = 0;
    var text = inputText;
    var textArray = [];


    for (var i = 0; i < text.length; i++) {
        currentLinePosition++;

        if (text[i] === '.') {
            currentLineCount++;

            text = replaceAtIndex(text, i++, '\n');

            var buf = text.slice(currentLineStart, i);
            textArray.push(buf);

            currentLineStart = i;
            currentLinePosition = i;

            continue;
        }

        if ((currentLinePosition - currentLineStart) == maxLineSize) {
            currentLineCount++;

            if (currentLineCount > maxLinesNumber) {
                var buf = text.slice(currentLineStart, i - 3);
                buf += '...';
                textArray.push(buf);
                break;
            }
            else {
                text = insertAtIndex(text, i++, '\n');

                var buf = text.slice(currentLineStart, i);
                textArray.push(buf);
                currentLineCount++;

                currentLineStart = i;
                currentLinePosition = i;

                continue;
            }
        }
    }

    textArray = textArray.join('');

    return textArray;
}