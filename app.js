



let friends = [
    'Heather', 'Kenneth', 'Caroline', 'Reid', 'Davis'
];


let num = 99;

let oneLess = (num - 1);


for (var i = 0; i < friends.length; i++) {
    for (var j = 0; j < 99; j++) {
        if (oneLess - j > 1) {
            console.log((num - j) + ' lines of code in the file, ' + (num - j) + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + ((oneLess) - j) + ' lines of code in the file.')
        } else if (oneLess - j == 1) {
            console.log((num - j) + ' lines of code in the file, ' + (num - j) + ' lines of code, ' + friends[i] + ' strikes one out, clears it all out, ' + ((oneLess) - j) + ' line of code in the file.')
        } else if (oneLess - j == 0) {
            console.log((num - j) + ' line of code in the file, '  + (num - j) + ' line of code, ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file.')
        }
    }
}















console.log('fail');