let friends = [
    'Heather', 'Kenneth', 'Caroline', 'Reid', 'Davis'
];

let num = 5;

let oneLess = (num - 1);


for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < 5; j++) {
        if (oneLess - j > 1) {
            console.log((num - j) + ' lines of code in the file, ' + ' takes..., ' + ((oneLess) - j) + ' lines of code in the file.')
        } else if (oneLess - j == 1) {
            console.log((num - j) + ' lines of code in the file, ' + ' takes..., ' + ((oneLess) - j) + ' line of code in the file.')
        } else if (oneLess - j == 0) {
            console.log((num - j) + ' lines of code in the file, ' + ' takes..., no more lines of code in the file.')
        }
    }
}


function songLyrics(friends) {

    var lyrics = "";

    for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < 5; j++) {
            if (oneLess - j > 1) {
                lyrics += ((num - j) + ' lines of code in the file, ' + ' takes..., ' + ((oneLess) - j) + ' lines of code in the file.'
            
            )
            } else if (oneLess - j == 1) {
                lyrics += ((num - j) + ' lines of code in the file, ' + friends[0] + ' takes..., ' + ((oneLess) - j) + ' line of code in the file.'
            
            )
            } else if (oneLess - j == 0) {
                lyrics += ((num - j) + ' lines of code in the file, ' + ' takes..., no more lines of code in the file.')
            } 
        } 
        return lyrics;
    }

}

console.log(songLyrics(friends[0]));