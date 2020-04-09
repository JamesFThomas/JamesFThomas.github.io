/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */
//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    var animal = {};//declare a variable "animal" and assign it a empty object literal
        animal.species = 'Tiger';//using dot notation add a species property 
        animal['name'] = 'Tony';//using bracket notation give object name property
        animal.noises = [];//using either notation make a noises property and set to an array.
        //console.log(animal);
//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    var noises = []; // create a variable "noises" and assing it to empty array literal
        noises[0] = "Greeeeeeat";//use bracket notation to give array 1st element a sound it will make
        noises.push("Growl");// use array fucntion push() to add 2nd element to end of array
        noises.unshift("Snarl");//use another array function "unshift" to add another element ot front of array 
        noises[noises.length] = "Roar";//use bracket syntax to a 3rd element to the end of array 
        console.log(noises.length);//log array length 
        console.log(noises.length-1);// log last element in array
        console.log(noises);//log entire array. 
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
   animal['noises'] = noises; //use bracket syntax to add noises array to object property "noises"
   animal['noises'].push('snore');//using any syntax add an additional noise to array in object 
   //noises.push("snore");
   console.log(animal);//log animal and inspect 
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  You can utilize bracket as well as dot notation to access object key:value pairs
 * 2. What are the different ways of accessing elements on arrays?
 *  You can use bracket notation utlizing indecies, or built in object methods like push, pop, shift, and unsfit.
 * *******************************************************************
 */
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! : * *******************************************************************
 */
//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
    var animals = [];// decalre a variable "animals" and assign it to empty array literal 
        animals.push(animal); //use push() to add animal objects to animals array. 
          console.log(animals);//log the animals array
    var duck = {};// create an object literay "duck" with 3 properties species, name, and noises and array of sounds
    duck.species = 'duck';//adding species key and value
    duck.name = 'Jerome';//adding name key and value
    duck.noises = ['quack', 'honk', 'sneeze', 'woosh'];//adding noises array and sounds elements
    animals.push(duck);//push new duck object to animals array
      console.log(animals);
     var dog = {};// create dog object 
    dog.species = 'dog';//add species property to dog object
    dog.name = 'Gizmeaux';//add name to daog object with value
    dog.noises = ['bark', 'squeak', 'whine', 'woof'];//add noises array to dog with sounds 
     var bird = {};//creat object lietral "bird"
    bird.species = 'bird'; //add species key to object
    bird.name = 'Tucker'; //add name key to bird object
    bird.noises = ['chirp', 'peep', 'squawk', 'crow']; // add noises array and sounds to object
    animals.push(dog, bird);//add bird and dog objects to animals array
    console.log(animals);// log and check animals array
    console.log(animals.length); //log length of animals array 
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
    var friends = [];//I like arrays better than objects because they have an index so we choose the array 
    
    function getRandom(animals){ //declare a function called get randonm with 1 parameter
        return animals[Math.floor(Math.random() * animals.length-1)];//hahve function returns a random number that reps index of random animal in animals array
    }; 
    
    //console.log(getRandom(animals)); //
    
    var randomIndex = getRandom(animals);//set randowm number returned from fucntion to a variable to be reused
       
       friends.push(randomIndex.name);
      
     //console.log(friends);
    
    animals[2].friends = friends; //using brackett notation and friends array as property to one of the animal objects  
    
    console.log(animals[2]);//log that animal and check to see if freinds property appeared. 
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}

console.log(animals);
