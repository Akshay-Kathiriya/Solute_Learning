const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// 1. MAP 
// 1.1 Get an array of all names
const names = characters.map((item)=>item.name)  
// console.log(names)

// 1.2 Get an array of all heights
const heights = characters.map((item)=>item.height)
// console.log(heights)

// 1.3 Get an array of objects with just name and height properties
const details = characters.map((item)=>[item.name,item.height])
// console.log(...details);


// 2. Reduce
// 2.1 Get the total height of all characters
const mass = characters.reduce((result, item)=>{
    result+Number(item.mass)
},0)

// console.log(mass)

// 2.2 Get the total number of characters in all the character names
const totalCharacter = characters.reduce((sum, item)=>sum+=item.name.length,0)
// console.log(totalCharacter) 

// 2.3 Get the total number of characters by eye color
const total_chararacter = characters.reduce((eyeColorChar , obj)=>{
    if(eyeColorChar[obj.eye_color])
        eyeColorChar[obj.eye_color]+=1;
    else
        eyeColorChar[obj.eye_color]=1;
    return eyeColorChar
},{})
// console.log(total_chararacter)

// 3. filter

// 3.1 Get characters with height less than 200
const heights_lt200 = characters.filter((item)=>item.height<200)
// console.log(heights_lt200)

// 3.2 Get all male characters
const males = characters.filter((item)=>(item.gender==='male'))
// console.log(...males)

// 3.3 Get all female characters
const Females = characters.filter((item)=>(item.gender==='female'))
// console.log(...Females)


// 4.Sort

// 4.1 Sort by name
const name_sort = characters.sort((detail1, detail2)=>{
    if (detail1.name > detail2.name) return 1;
    else if(detail1.name < detail2.name) return -1;
    return 0;
})
// console.log(...name_sort)

// 4.2 Sort by mass
const sortByMass = characters.sort((a,b)=>{
    return a.mass-b.mass;
});
// console.log(sortByMass);

// 4.3 Sort by height
const sortByHeight = characters.sort((a,b)=>a.height-b.height)
// console.log(sortByHeight)


// 5.Every

// 5.1 Does every character have blue eyes?
const blueEyes = characters.every((item)=>item.eye_color==='blue')
// console.log(blueEyes)

// 5.2 Does every character have mass more than 40?
const mass_gt40 = characters.every((item)=>item.mass>40)
// console.log(mass_gt40)

// 5.3 Is every character shorter than 200?
const height_lt200 = characters.every((character)=>character.height<200)
// console.log(height_lt200)


// 6.Some

// 6.1 Is there at least one male character?
const male_character = characters.some((character)=>character
.gender==='male')
// console.log(male_character)

// 6.2 Is there at least one character with blue eyes?
const blue_eyes = characters.some((character)=>character.eye_color==='blue')
// console.log(blue_eyes)

// 6.3 Is there at least one character taller than 200?
const character_taller200 = characters.some((character)=>character.height>200)
// console.log(character_taller200)


// flat

function flatten(arr, depth=0){
    return arr.flat(depth);
}

// console.log(flatten([1, [2], [3, [[4]]],[5,6]]),1);

