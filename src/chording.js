// all chords must be in alphabetical order
// otherwise they wont be found
// example: a,h
const chords = {
    global: {
        " ": " ", // Space
        " ,e": "Backspace",
        " ,h": "\n", // Enter

        " ,s": "LayerText",
        " ,t": "LayerPunctuation",
        " ,r": "LayerNumber"
    },
    text: {
        "n": "n",
        "r": "r",
        "t": "t",
        "s": "s",
        "i": "i",
        "e": "e",
        "a": "a",
        "h": "h",
        
        "a,h": "g",
        "e,i": "y",
        "n,r": "o",
        "s,t": "u",
        "r,t": "d",
        "a,e": "l",
        "h,i": "c",
        "n,s": "k",
        "h,t": "m",
        "h,r,t": "v",
        "e,h": "w",
        "a,i": "f",
        "r,s": "p",
        "n,t": "b",
        "a,e,h": "j",
        "r,s,t": "q",
        "a,e,i": "x",
        "n,r,t": "z"
    },
    punctuation: {
        "n": ";",
        "r": ":",
        "t": "'",
        "s": "\"",
        "i": "!",
        "e": "?",
        "a": ",",
        "h": "."
    },
    number: {
        "n": "5",
        "r": "6",
        "t": "7",
        "s": "8",
        "i": "1",
        "e": "2",
        "a": "3",
        "h": "4",

        "e,i": "0",
        "a,h": "9"
    }
};

let chord_settings = {
    punct_oneshot: true, // if the punctuation layer is oneshot
    space_return: true // should it return to the text layer when space is pressed
};
let current_layer = "text";
let current_chord = [];

function chordKeyDown(key) {
    current_chord.push(key);
}

function chordKeyUp(key) {
    if (current_chord.length === 0) { return; }
    
    chordPress(current_chord);
    current_chord = [];
}

function chordPress(chord) {
    chord = chord.sort().toString();
    
    key = chords[current_layer][chord];
    
    if (chord in chords["global"]) {
        key = chords["global"][chord];
    }
    
    if (key === undefined) { return; }
    
    if (chord_settings.punct_oneshot) { layer = "text"; }
    if (chord_setting.space_return && key === " ") { layer = "text"; }
    
    switch (key) {
        case "LayerText":
            layer = "text"
            break;
        case "LayerPunctuation":
            layer = "punctuation";
            break;
        case "LayerNumber":
            layer = "number";
            break;
        default:
            document.dispatchEvent(
                new CustomEvent(
                    { key: key }
                )
            );
            break;
    }
}