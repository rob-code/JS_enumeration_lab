// Your task is to write your own functions which implement the following built-in enumeration methods:

// * `find()`
// * `map()`
// * `filter()`
// * `some()`
// * `every()`

// Bonus points:

// * `reduce()`
// * Write your own `forEach()` function and use it in your other enumeration methods. (There is no test for this!)

// You will be given start code and some tests ( `./specs/enumeration_specs.js` ) and all you have to do is make them pass!

var Enumeration = function() {}

Enumeration.prototype = {

  find: function(array, callback){
    
    for (var i = 0; i < array.length; i++){
        var trueOrFalse = callback(array[i]);
        if (trueOrFalse) {
          return array[i];
        }
    }    

      return undefined;

  },

  map: function(array, callback){
    var newArray = [];
    for (var i = 0; i < array.length; i++){
      newArray.push(callback(array[i]));
    }
      return newArray
  },

  filter: function(array, callback){
      var filteredArray = [];
      for (var object of array){
        if (callback(object)){
          filteredArray.push(object)
          }
        }
        return filteredArray;
  }






}

module.exports = Enumeration;