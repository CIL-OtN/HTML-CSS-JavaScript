
let aset = new Set ([200, 700, 50, 100]);
aset.delete (700);
console.log (aset);

aset.add(150);
console.log (aset);

console.log(aset.has(150)); // true
console.log(aset.has(70)); // false


let arr = [117, 14, 228, 92, 92, 117, 18, 22, 117, 19, 92];
let set = new Set (arr);

console.log ('Array size', arr.length);
console.log ('Set size', set.size);


// Schnittmenge zweier Arrays -> gemeinsame Werte
let newArr = ["Hund", "Katze", "Maus", "Pferd", "Ochse", "Esel"];
let newBrr = ["Adler", "Huhn", "Maus", "Esel"];

const schnittmenge = (a, b) => {
    return a.filter( item => b.includes(item))
}

console.log("Array Schnittmenge: " , schnittmenge(newArr, newBrr))


// Schnittmenge zweier Sets -> gemeinsame Werte
let a = new Set(["Hund", "Katze", "Maus", "Pferd", "Ochse", "Esel"])
let b = new Set(["Adler", "Huhn", "Maus", "Esel"])

let intersect = new Set([...a].filter( i => b.has(i)) )

console.log("Set Schnittmenge: " , intersect)

