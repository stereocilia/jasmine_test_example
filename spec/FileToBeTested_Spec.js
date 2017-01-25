describe("Our global variable", function() {
    it("is defined and set", function() {
        expect(myGlobalVariable).not.toBeUndefined();  //test if the global variable is defined
        expect(myGlobalVariable).toBeTruthy();  //test if the global variable has a value
    });
    it("is a property of the window object", function(){
        expect(window.myGlobalVariable).not.toBeUndefined();
    });
});

describe("Our exposed variable", function() {
    it("is defined and set", function() {
        expect(myExposedVariable).not.toBeUndefined();  //test if the exposed variable is defined
        expect(myExposedVariable).toBeTruthy();  //test if the exposed variable has a value
    });
    it("is a property of the window object", function(){
        expect(window.myExposedVariable).not.toBeUndefined();
    });
});

describe("Our local variable", function() {
    it("cannot be accessed globally", function() {
        expect(window.myLocalVariable).toBeUndefined();  //test if the local variable is undefined. it should not be accessible to this test code
    });
    it("can be retrieved using our 'getter' function", function() {
        expect(window.getMyLocalVariable()).toBeTruthy();
    });
});