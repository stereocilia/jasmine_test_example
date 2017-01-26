/**
 * File: FileToBeTested.js
 *
 * This file has the code that will be tested by jasmine.
 * It's also a demonstration in javascript scope, which must essential to understanding how to write code that can
 * be tested.
 */


//This is considered 'global' because it can be access from anywhere in the script, as well as any scripts that are include
//after this one
var myGlobalVariable = "Hi, I'm global and can be accessed from anywhere";  //QUESTION: Why can this be accessed from anywhere?

//This is called a self executing anonymous function. It's anonymous because it doesn't have a name, and it's self exectuing
//because the () at the end cause the function to execute. We use this structure to control the scope of the variables defined
//withing the function
(function(root){    //root refers to the `window` variable passed into the function. we call it root instead of window because we want to enforce that all variables in this function only apply to this scope

    var myLocalVariable = "I can only be accessed within this function";    //QUESTION: Why can't I access this outside of the anonymous function?
    var variableToExpose = "I'm defined locally, but can be exposed globally";

    //QUESTION: Why can I access `myExposedVariable` from anywhere?
    root.myExposedVariable = variableToExpose; //we can expose a variable by setting it to a property on the root object
    root.getMyLocalVariable = getMyLocalVariable;    //expose the function we've defined below

    function getMyLocalVariable(){
        //This function can access myLocalVariable because it is defined in the same scope
        return myLocalVariable; //QUESTION: Why can this function access the local variable?
    }


})(window); // `window` is a special variable that is equivalent to the global namespace. Any property added to the window object
//can be accessed as though it were global.