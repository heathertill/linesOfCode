// generate list o 99-1
let num = 99;

for (var i = 0; i < 3; i++) {
    console.log(num - i);
}

// generates lyrics to song with line count (not adjusting)
console.log(lineCount[0] + ' ' + 'lines of code in the file, ' + lineCount[0] + ' ' + 'lines of code;' + ' ' + friends[1] + ' strikes one out, clears it all out, ' + lineCount[1] + ' lines of code in the file');



// array of friends + correct count of lines with adjusting


let friends = [
    'Heather', 'Kenneth', 'Caroline', 'Reid', 'Davis'
];



for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < 99; j++) {
        console.log((99 - j) + ' lines of code in the file, ' + (99 - j) + ' lines of code; Heather ' + ' strikes one out, clears it all out, ' + (98 - j++) + ' lines of code in the file.')
    }
}


for (var i = 0; i < 99; i++) {
    console.log((99 - i) + ' lines of code in the file, ' + (99 - i) + ' lines of code; Heather ' + ' strikes one out, clears it all out, ' + (98 - i++) + ' lines of code in the file.')
}



let num = 99;
let oneLess = num - 1;

for (var i = 0; i < 3; i++) {

    for (var j = 0; j < 4; j++) {
        console.log((num - i) + ' lines of code in the file, ' + (num - i) + ' lines of code;' + ' ' + friends[0] + ' strikes one out, clears it all out, ' + (oneLess - i++) + ' lines of code in the file.')
    }
}





let pals = ['ann', 'bill', 'sam', 'ed']



function songLyrics(friends) {

    var lyrics = "";

    for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < 5; j++) {
            if (oneLess - j > 1) {
                lyrics += ((num - j) + ' lines of code in the file, ' + ' takes..., ' + ((oneLess) - j) + ' lines of code in the file.'
            
            )
            } else if (oneLess - j == 1) {
                lyrics += ((num - j) + ' lines of code in the file, ' + ' takes..., ' + ((oneLess) - j) + ' line of code in the file.'
            
            )
            } else if (oneLess - j == 0) {
                lyrics += ((num - j) + ' lines of code in the file, ' + ' takes..., no more lines of code in the file.')
            } 
        } 
        return lyrics;
    }

}

console.log(songLyrics(friends[0]));