// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 * // a is done
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 * // 1- is done
 *      1. length(): returns the number of contacts within the list.
 *  
 * //2- is done     
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      
 * //3- done 
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      
 * //4- done  
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * //5- done 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

//return an object literal from makeContact() that has 3 keys
    //keys are id,nameFirst, nameLast and are set to match function input parameters 
//create an array called contacts to hold new contacts made by the makeContact function
    //array should be in global scope inside makeContactList() function
//create a function in makeContactList called addContact() that adds new contact to contacts array just made
    //addContact() has one parameter contact and uses the array.psuh() method to add contact to contacts array
//create a function findContact() with a parameter of fullname to return API that locates contact in contacts by fullName 
    //findContact() will utilize a for loop to iterate through contacts array and if input parameter fullName 
    //matches a concatnated string contacts[n].nameFirst + ' ' + contacts[n].nameLast then it will return that elmenet in the array
    //if not retur undefined 
//create a fucntion that finds a contact in the contacts array and then removes it from the array
    //removeContact will utilize the array indexOf() fucntion to search contacts array and return index of element that match contact name
    //once locate din array removeContact will use the array.splice method and the prviously returned element index to remove one element at that index
//ceate a fucntion that prints all names in contact list with '\n' symbol at end unless its the finale element in contacts array
    //create empty string literal to add concanated strings too
    //use a for loop to iterate through the elements of the contacts array, with incrementer e by 1 each loop
    //use an if/else statement to set the coniditons that adds elements to allContacts string literal with line break till contacts.length-2 and without line break at length -1
    //return string literal allContacts once iterator has completed loops through contacts array.

function makeContact(id, nameFirst, nameLast) {
        let contact = new Object();
            contact.id = id;
            contact.nameFirst = nameFirst;
            contact.nameLast = nameLast;
        return contact;
}


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    var fullNames = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        
        addContact: function(contact){
            contacts.push(contact);
        },
        
        findContact: function(fullName){
          for ( let n = 0; n < contacts.length; n++){
          if (fullName === (contacts[n].nameFirst + ' ' + contacts[n].nameLast)){
          return contacts[n];
          } else if (fullName !== (contacts[n].nameFirst + ' ' + contacts[n].nameLast))
              {return undefined;}
            }       
        },
        
        removeContact: function(contact){
            let deleteIndex = contacts.indexOf(contact);
            contacts.splice(deleteIndex,1);
        },
        
        
        printAllContactNames: function(){ 
            var allContacts = ""; 
            for (var e = 0; e < contacts.length; e++) { 
            if (e < contacts.length-1) {  
                allContacts += contacts[e].nameFirst + " " + contacts[e].nameLast + "\n"; 
            }  else {  allContacts += contacts[e].nameFirst + " " + contacts[e].nameLast; }
        }
            return allContacts; 
        }
        
       
        
    };
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}

