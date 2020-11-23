const HashMap = require('./HashMap');
const {HashMapChain} = require('./HashMapChain');

/* ============== 1.LOTR Function ================ */
function main() {
    const lotr = new HashMap();

    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3; 

    lotr.set("Hobbit", "Bilbo");
    lotr.set("Hobbit", "Frodo");
    lotr.set("Wizard", "Gandalf");
    lotr.set("Human", "Aragorn");
    lotr.set("Elf", "Legolas");
    lotr.set("Maiar", "The Necromancer");
    lotr.set("Maiar", "Sauron");
    lotr.set("RingBearer", "Gollum");
    lotr.set("LadyOfLight", "Galadriel");
    lotr.set("HalfElven", "Arwen");
    lotr.set("Ent", "Treebeard");

    console.log("LOTR", lotr); //length is 9, there are collisions in the data under "Hobbit" and "Maiar" 
    console.log(lotr.get("Maiar"));  // we currently don't have code to resolve collisions
    console.log(lotr.get("Hobbit")); // same reason as above- no code to resolve collisions 
    console.log(lotr._capacity); // 24, since we exceed the initial length of 8 we must multiply by size ratio to accomodate, 8 x 3. 
}


/* ================= 2.WhatDoesThisDo ================== */

//this intentionally creates  collision and 
//overwrites previous data values on 
//any duplicate keys found? 

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}


/* ======= 3. Demonstrate understanding of Hash maps =======*/
//You don't need to write code for the following 
//two drills. use any drawing app or simple pen and paper

//3(1)Show your hash map after the insertion of keys 10, 22, 31, 4, 15, 28, 17, 88, 59 
//into a hash map of length 11 using open addressing and a hash function k 
//mod m, where k is the key and m is the length.

//3(2)2) Show your hash map after the insertion of the keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
//into the hash map with collisions resolved by separate chaining. Let 
//the hash table have a length m = 9, and let the hash function be k mod m.


// Figma sketches : https://www.figma.com/file/nBhoQpIPf9LjpDnE88WVc5/Hash-Maps?node-id=0%3A1

//had to look this one up
/* =============== 4.Remove Duplicates ============ */

function removeDuplicates(string) {
    // create a new map class to hold key/value pairs
    const map = new Map();

    // declare new var for string output 
    let newString = "";

    /* split string parameter by indiv. character, loop through each character in string in map. if map already has letter, skip.
    if map does not, add it to the map and as part of the newString output variable. */
    string.split("").forEach(letter => {
        if (!map.has(letter)) {
            map.set(letter, "");
            newString += letter;
        }
    });
    return newString;
}

console.log(removeDuplicates("goggles google doggies"));