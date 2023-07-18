/*
Your function will be passed par and strokes arguments.
Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!" */

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes === 1) return names[0];

    else if ((strokes - par) <= -2) return names[1];

    else  if ((strokes -par) === -1) return names[2];

    else if (strokes === par) return names[3];

    else if ((strokes - par) === 1) return names[4];

    else if ((strokes - par) === 2) return names[5];

    else return names[6];
}


console.log(golfScore(5, 1))
