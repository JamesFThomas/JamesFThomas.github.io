// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-jamesfthomas");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let filterOutput = _.filter(array, function(customerObj){//returns array of objects
        //filter out all of the male customers
        return customerObj.gender === "male"; //returns only custumer Object with "male" for gender property 
    })
    return filterOutput.length; //returns number of male customers
};

var femaleCount = function(array){
    //I: array of customer objs
    //O: number of female customers
   return _.reduce(array, function(prev, current){ //return the number value of the result of the function call reduce on input array
        //when to icrement our seed
            //++seed if customer Object has gender = female
                if(current.gender === "female"){
                    prev += 1;
                }
        //when to not increment our seed
            //dont ++seed if gener is NOT female 
            return prev;
    }, 0)
};


//Objective**: Find the oldest customer's name
//Input**: `Array`
//Output**: `String`

//creat empty array
//loop through list ---
//get all age key value ---
//push values to new array in order ---
//search for largest value in new array and return it's index
//use values index to id object index in given array 
//return object at index in given array

var oldestCustomer = function(list){
    let values = [];
    for (let i = 0; i < list.length; i++){
        values.push(list[i].age);
    }
    let objectIndex = values.indexOf(Math.max(...values));
    return list[objectIndex].name;
};

//Objective**: Find the youngest customer's name
//Input**: `Array`
//Output**: `String`

//creat empty array
//loop through list ---
//get all age key value ---
//push values to new array in order ---
//search for smallest value in new array and return it's index
//use values index to id object index in given array 
//return object at index in given array


var youngestCustomer = function(list){
    let values = [];
    for (let i = 0; i < list.length; i++){
        values.push(list[i].age);
    }
   let objectIndex = values.indexOf(Math.min(...values));
   return list[objectIndex].name;
};


/*
**Objective**: Find the average balance of all customers
**Input**: `Array`
**Output**: `Number`
**Constraints**:
*/

//-------steps -------//
//1 - loop through input array 
//2 - take all values at balance key and push to new array
//3 - reduce the new array in summ of all values
//4 - divide reduced value by array length
//5 - return average of all customer balances

var averageBalance = function(array){
let balances = [];
for (let i = 0; i < array.length; i++ ){
    let changedString = array[i].balance;
    let changeAgain = changedString.slice(1).split(',').join('')
    balances.push(parseFloat(changeAgain));
}
let sum = _.reduce(balances, function(previous,current){
    return previous += current;
});
//console.log(balances);
return (sum / balances.length); 
};



/*
**Objective**: Find how many customer's names begin with a given letter
 - **Input**: `Array`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
*/

//---------steps---------//
// 1 - create local empty array
// 2 - loop through array
// 3 - find object.name property with matching first char
// 4 - push object to local array
// return local array length 

var firstLetterCount = function(array, char){
    let names = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].name[0].toLowerCase() === char.toLowerCase()){
            names.push(array[i].name);
        }
    }
    return names.length;   
};


/*
**Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
*/
//declare unassigned variable to hold return value
//loop through array, find object with given name return that object
//reassign local variable to friend array
//match char with objects friends names first letter, reduce 
//
// return total

var friendFirstLetterCount = function(array, name, char){
    let friendsArray;
    for(let i = 0; i < array.length; i++){
        if (array[i].name === name){
            friendsArray = array[i].friends;
        }           
    }
    let total = 0;
    for(let i = 0; i < friendsArray.length; i++){
        if (friendsArray[i].name[0].toLowerCase() === char.toLowerCase()){
            total ++;
        }
    }
    return total;
};

/*
**Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:
 */
         ///-----------where I need to go-------------///
                //array[index]
                            //friends
                                    //name --> match with ---> "name"
                            
                //return array[i].name of object with name on friends list  
        
        
        ///-------What I need to do-----------///        

// 1--- create local array
// 2--- loop through input array checking each objects friends list
// ?--- loop again through friends list or use reduceto check list once there with loop
// 3--- match input "name" with names on objects friends list 
// 4--- (if) name is on object's friends list push object name to local array
// 5--- return objects name whom has 'name' on their friends list                
        
        ///-------------

var friendsCount = function(array, name){
  let friendsFriend = []; // step 1
  for (let i = 0; i < array.length; i++){ //step 2
      let friendsList = array[i].friends //accessing array variable we need to check and assigning to variable  
      for (let e = 0; e < friendsList.length; e++){ //loop through friendsList array/variable
          if(friendsList[e].name === name){ //match names on friedns list to input name
              friendsFriend.push(array[i].name); //push object name to local array if name matched on friends list
      }
    }
  } 
  return friendsFriend; //return object names that have given name on friends list
};

/*
**Objective**: Find the three most common tags among all customers' associated tags
 - **Input**: `Array`
 - **Output**: `Array`
 - **Constraints**:
*/
//---Doing---//
// .1> create locale array "alltags"
// 1-> use loop to search input array for object keys called "tags"
// 2--> access values and push them to local array "allTags"
// 3---> filter local array to one with no duplicate values "checkTags"
// 4---->use filtered array as checklist and tally number of occurens of each value in input array 
// 5----->return array of highest 3 values that appear in "allTags" array

//---Going--//


var topThreeTags = function(array){                     //set parms
    let allTags = [];                                   //created local array for tags values
    for (let i = 0; i < array.length; i++){             //looped through array to each object tags key
          let ptags = array[i].tags;                    //set tags keys array to value
          for (let e = 0; e < ptags.length; e++){       //loop through the tags array by looping variable 
              allTags.push(ptags[e]);                   //push tags values from each object to local array
          }
    }
    //now i need to tally each tag in array
    //console.log(allTags); //it works so far
    //use reduce- list - allTags, function - count strings in all tags, seed - array
    let tagsAndCounts = _.reduce(allTags, function(array, current){
        let found = false;                              //set variable to indicate if word exists in return array
        for (let i = 0; i < array.length; i++){         //loop through input array
            if (array[i].string === current){           //check to see current tag value is already in return array
                array[i].count++;                       // if so increase the count variable for the found string 
                found = true;                           //reassign found to true 
            }
        } 
        //i want this to run the current array object dosen't match accumlating value 
        if (found === false){                           //if string not found in retrun array then folllow below code block
            let tag = {};                               //create a new object for the unfound tag
            tag['string'] = current;                    //add a the current string to new object as the key name
            tag['count'] = 1;                           //add count value to key to indicate occurenec of tag in array
            array.push(tag);                            //push that new onbject to return array 
        }
        return array;                                   //return the array og objects with tag values and occurence count value
    },[])
    //console.log(tagsAndCounts);
    
    tagsAndCounts.sort(function (a, b) {                //sort to return array buy count value size 
        return b.count - a.count;                       //return reordered array of objects by count variable amount in descending order
    });
    
    return [tagsAndCounts[0].string, tagsAndCounts[1].string, tagsAndCounts[2].string]; //return top 3 most occuring strings only no count variable 
};


/*
 - **Objective**: Create a summary of genders, the output should be:
 - **Input**: `Array`
 - **Output**: `Object`
 - **Constraints**: Use `reduce`
example ;
```javascript
{
    male: 3,
    female: 4,
    non-binary: 1
}
```
*/

//---To do--//
// 1> pluck - gender value out of each object 
// 2--> reduce - gender array into single object with 3 keys 
            //male,female,non-binary
            //increase count value for each occurence 
// 3---> return object.


var genderCount = function(array){                  //set intial input parm
  let genders = _.pluck(array, "gender")            //pluck values at gender key in each object from input array and into seprate array called genders
  return _.reduce(genders, function(counts,sex){    //use reduce, on plucked "genders" array, "function" to increase the value representing the occurence of each vale 
      if(sex === "female"){                         //because the seed set with reduce is a premade object with each value we can use if else chain to increase value of each key    
          counts.female++;                          //if current value  === the string female increase the female key value in our seed object    
      }
      else if (sex === "non-binary"){               //if the current sex === "non-binary" increase the value of that key in seed object 
          counts["non-binary"]++;
      }
      else {                                        //finally if the current sex === "male"increase the value of that key in seed object 
          counts.male++;
      }
      return counts;                                // return the accumalted value which is this case is counts with updated values for each gender value from the inot array of objects  
  },{male: 0,female: 0,'non-binary': 0})
 
};


///=================don't forget i'm good code========//////
//firstLetterCount

//     return _.reduce(array, function(total, currentCustomer){
//      if(currentCustomer.name[0].toLowerCase() === char.toLowerCase()){
//           total++;
//      }
//      return total;
//   },0)

//// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^/////

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
