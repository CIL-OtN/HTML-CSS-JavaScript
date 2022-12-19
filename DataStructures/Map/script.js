
const named = new Map([
    ["15.09.1987", "Waldemar Schneider"],
    ["15.09.1988", "Nina Schneider"],
    ["15.09.1989", "Alexander Schneider"],
])

//          element , index
named.forEach((value, key) => {
    console.log("Am " + key + " Datum ist " + value + " geboren!")
})