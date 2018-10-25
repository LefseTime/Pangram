// Also store whether change numbers were changed last round (boolean)?
// Separate letters that are not contained in any number words we would reasonably reach (abcdjkmpqz) and those that are (efghilnorstuvwxy)
let noChangeNumbers = { a: 0, b: 0, c: 0, d: 0, j: 0, k: 0, m: 0, p: 0, q: 0, z: 0 };
let changeNumbers = { e: 0, f: 0, g: 0, h: 0, i: 0, l: 0, n: 0, o: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0 };

// Sentence template for initial counting of fixed letters
let sentence = `The solution to the CATS
problem contains precisely ${noChangeNumbers.a} 'a's, ${noChangeNumbers.b} 'b's,
${noChangeNumbers.c} 'c's, ${noChangeNumbers.d} 'd's, ${changeNumbers.e} 'e's, ${changeNumbers.f} 'f's, ${changeNumbers.g} 'g's, ${changeNumbers.h} 'h's, ${changeNumbers.i}
'i's, ${noChangeNumbers.j} 'j's, ${noChangeNumbers.k} 'k's, ${changeNumbers.l} 'l's, ${noChangeNumbers.m} 'm's, ${changeNumbers.n} 'n's, ${changeNumbers.o} 'o's,
${noChangeNumbers.p} 'p's, ${noChangeNumbers.q} 'q's, ${changeNumbers.r} 'r's, ${changeNumbers.s} 's's, ${changeNumbers.t} 't's, ${changeNumbers.u} 'u's,
${changeNumbers.v} 'v's, ${changeNumbers.w} 'w's, ${changeNumbers.x} 'x's, ${changeNumbers.y} 'y's, and ${noChangeNumbers.z} 'z's.`;

// Convert to lowercase to avoid a bunch of "or" statements
let babySentence = sentence.toLowerCase();

// Count noChangeNumbers letters
for (let position = 0; position < babySentence.length; position++) {
    if (babySentence[position] === 'a') {
        noChangeNumbers.a++;
    }
    else if (babySentence[position] === 'b') {
        noChangeNumbers.b++;
    }
    else if (babySentence[position] === 'c') {
        noChangeNumbers.c++;
    }
    else if (babySentence[position] === 'd') {
        noChangeNumbers.d++;
    }
    else if (babySentence[position] === 'j') {
        noChangeNumbers.j++;
    }
    else if (babySentence[position] === 'k') {
        noChangeNumbers.k++;
    }
    else if (babySentence[position] === 'm') {
        noChangeNumbers.m++;
    }
    else if (babySentence[position] === 'p') {
        noChangeNumbers.p++;
    }
    else if (babySentence[position] === 'q') {
        noChangeNumbers.q++;
    }
    else if (babySentence[position] === 'z') {
        noChangeNumbers.z++;
    }
};

// Re-usable function to convert numerals into written-out numbers
function numeralConversion(currentObject) {
    Object.keys(currentObject).forEach(key => {
        if (currentObject[key] === 1) {
            currentObject[key] = "one"
        }
        else if (currentObject[key] === 2) {
            currentObject[key] = "two"
        }
        else if (currentObject[key] === 3) {
            currentObject[key] = "three"
        }
        else if (currentObject[key] === 4) {
            currentObject[key] = "four"
        }
        else if (currentObject[key] === 5) {
            currentObject[key] = "five"
        }
        else if (currentObject[key] === 6) {
            currentObject[key] = "six"
        }
        else if (currentObject[key] === 7) {
            currentObject[key] = "seven"
        }
        else if (currentObject[key] === 8) {
            currentObject[key] = "eight"
        }
        else if (currentObject[key] === 9) {
            currentObject[key] = "nine"
        }
        else if (currentObject[key] === 10) {
            currentObject[key] = "ten"
        }
        else if (currentObject[key] === 11) {
            currentObject[key] = "eleven"
        }
        else if (currentObject[key] === 12) {
            currentObject[key] = "twelve"
        }
        else if (currentObject[key] === 13) {
            currentObject[key] = "thirteen"
        }
        else if (currentObject[key] === 14) {
            currentObject[key] = "fourteen"
        }
        else if (currentObject[key] === 15) {
            currentObject[key] = "fifteen"
        }
        else if (currentObject[key] === 16) {
            currentObject[key] = "sixteen"
        }
        else if (currentObject[key] === 17) {
            currentObject[key] = "seventeen"
        }
        else if (currentObject[key] === 18) {
            currentObject[key] = "eighteen"
        }
        else if (currentObject[key] === 19) {
            currentObject[key] = "nineteen"
        }
        else if (currentObject[key] === 20) {
            currentObject[key] = "twenty"
        }
        else {
            currentObject[key] = "THIS ONE IS TOO BIG FIX IT"
        }
    });
};

// Convert noChangeNumbers numerals into written-out numbers
numeralConversion(noChangeNumbers);

// NOCHANGENUMBERS FIXED

// Initial count of letters that are contained in number words we will reach, including letter-ized noChangeNumbers numbers
for (let position = 0; position < sentence.length; position++) {
    if (sentence[position] === 'e') {
        changeNumbers.e++;
    }
    else if (sentence[position] === 'f') {
        changeNumbers.f++;
    }
    else if (sentence[position] === 'g') {
        changeNumbers.g++;
    }
    else if (sentence[position] === 'h') {
        changeNumbers.h++;
    }
    else if (sentence[position] === 'i') {
        changeNumbers.i++;
    }
    else if (sentence[position] === 'l') {
        changeNumbers.l++;
    }
    else if (sentence[position] === 'n') {
        changeNumbers.n++;
    }
    else if (sentence[position] === 'o') {
        changeNumbers.o++;
    }
    else if (sentence[position] === 'r') {
        changeNumbers.r++;
    }
    else if (sentence[position] === 's') {
        changeNumbers.s++;
    }
    else if (sentence[position] === 't') {
        changeNumbers.t++;
    }
    else if (sentence[position] === 'u') {
        changeNumbers.u++;
    }
    else if (sentence[position] === 'v') {
        changeNumbers.v++;
    }
    else if (sentence[position] === 'w') {
        changeNumbers.w++;
    }
    else if (sentence[position] === 'x') {
        changeNumbers.x++;
    }
    else if (sentence[position] === 'y') {
        changeNumbers.y++;
    }
};

// Add pseudoletterized number counts to counts of existing letter (only adding, subsequent rounds will subtract)
Object.keys(changeNumbers).forEach(key => {
    if (changeNumbers[key] === 1) {
        //changeNumbers[key] = "one"
        changeNumbers.o++;
        changeNumbers.n++;
        changeNumbers.e++;
    }
    else if (changeNumbers[key] === 2) {
        //changeNumbers[key] = "two"
        changeNumbers.t++;
        changeNumbers.w++;
        changeNumbers.o++;
    }
    else if (changeNumbers[key] === 3) {
        //changeNumbers[key] = "three"
        changeNumbers.t++;
        changeNumbers.h++;
        changeNumbers.r++;
        changeNumbers.e = changeNumbers.e + 2;
    }
    else if (changeNumbers[key] === 4) {
        //changeNumbers[key] = "four"
        changeNumbers.f++;
        changeNumbers.o++;
        changeNumbers.u++;
        changeNumbers.r++;
    }
    else if (changeNumbers[key] === 5) {
        //changeNumbers[key] = "five"
        changeNumbers.f++;
        changeNumbers.i++;
        changeNumbers.v++;
        changeNumbers.e++;
    }
    else if (changeNumbers[key] === 6) {
        //changeNumbers[key] = "six"
        changeNumbers.s++;
        changeNumbers.i++;
        changeNumbers.x++;
    }
    else if (changeNumbers[key] === 7) {
        //changeNumbers[key] = "seven";
        changeNumbers.s++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.v++;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 8) {
        //changeNumbers[key] = "eight";
        changeNumbers.e++;
        changeNumbers.i++;
        changeNumbers.g++;
        changeNumbers.h++;
        changeNumbers.t++;
    }
    else if (changeNumbers[key] === 9) {
        //changeNumbers[key] = "nine"
        changeNumbers.n = changeNumbers.n + 2;
        changeNumbers.i++;
        changeNumbers.e++;
    }
    else if (changeNumbers[key] === 10) {
        //changeNumbers[key] = "ten"
        changeNumbers.t++;
        changeNumbers.e++
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 11) {
        //changeNumbers[key] = "eleven"
        changeNumbers.e = changeNumbers.e + 3;
        changeNumbers.l++;
        changeNumbers.v++;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 12) {
        //changeNumbers[key] = "twelve"
        changeNumbers.t++;
        changeNumbers.w++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.l++;
        changeNumbers.v++;
    }
    else if (changeNumbers[key] === 13) {
        //changeNumbers[key] = "thirteen"
        changeNumbers.t = changeNumbers.t + 2;
        changeNumbers.h++;
        changeNumbers.i++;
        changeNumbers.r++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 14) {
        //changeNumbers[key] = "fourteen"
        changeNumbers.f++;
        changeNumbers.o++;
        changeNumbers.u++;
        changeNumbers.r++;
        changeNumbers.t++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 15) {
        //changeNumbers[key] = "fifteen"
        changeNumbers.f = changeNumbers.f + 2;
        changeNumbers.i++;
        changeNumbers.t++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 16) {
        //changeNumbers[key] = "sixteen"
        changeNumbers.s++;
        changeNumbers.i++;
        changeNumbers.x++;
        changeNumbers.t++;
        changeNumbers.e = changeNumbers.e + 2;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 17) {
        //changeNumbers[key] = "seventeen"
        changeNumbers.s++;
        changeNumbers.e = changeNumbers.e + 4;
        changeNumbers.v++;
        changeNumbers.n = changeNumbers.n + 2;
        changeNumbers.t++;
    }
    else if (changeNumbers[key] === 18) {
        //changeNumbers[key] = "eighteen"
        changeNumbers.e = changeNumbers.e + 3;
        changeNumbers.i++;
        changeNumbers.g++;
        changeNumbers.h++;
        changeNumbers.t++;
        changeNumbers.n++;
    }
    else if (changeNumbers[key] === 19) {
        //changeNumbers[key] = "nineteen"
        changeNumbers.n = changeNumbers.n + 3;
        changeNumbers.i++;
        changeNumbers.e = changeNumbers.e + 3;
        changeNumbers.t++;
    }
    else if (changeNumbers[key] === 20) {
        //changeNumbers[key] = "twenty"
        changeNumbers.t = changeNumbers.t + 2;
        changeNumbers.w++;
        changeNumbers.e++;
        changeNumbers.n++;
        changeNumbers.y++;
    }
    else {
        changeNumbers[key] = "THIS ONE IS TOO BIG FIX IT"
    }
});

numeralConversion(changeNumbers);

sentence = `The solution to the CATS
problem contains precisely ${noChangeNumbers.a} 'a's, ${noChangeNumbers.b} 'b's,
${noChangeNumbers.c} 'c's, ${noChangeNumbers.d} 'd's, ${changeNumbers.e} 'e's, ${changeNumbers.f} 'f's, ${changeNumbers.g} 'g's, ${changeNumbers.h} 'h's, ${changeNumbers.i}
'i's, ${noChangeNumbers.j} 'j's, ${noChangeNumbers.k} 'k's, ${changeNumbers.l} 'l's, ${noChangeNumbers.m} 'm's, ${changeNumbers.n} 'n's, ${changeNumbers.o} 'o's,
${noChangeNumbers.p} 'p's, ${noChangeNumbers.q} 'q's, ${changeNumbers.r} 'r's, ${changeNumbers.s} 's's, ${changeNumbers.t} 't's, ${changeNumbers.u} 'u's,
${changeNumbers.v} 'v's, ${changeNumbers.w} 'w's, ${changeNumbers.x} 'x's, ${changeNumbers.y} 'y's, and ${noChangeNumbers.z} 'z's.`;


console.log(sentence);