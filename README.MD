# Jasmine Unit Testing Example

This is an overview of how this example project was created.    

  0. Go to the jasmine github report and download a zip of the latest release.
  In this case, the latest release is 2.5.2.
  0. Extract the files into the this directory. In my version, I ended up with
  these files:
    - `lib/`
    - `spec/`
    - `src`
    - `MIT.LICENSE`
    - `README.MD`
    - `SpecRunner.html`
  0. I created a file named `jsunit-test.html` and:
    0. Added `link` elements to reference:  
        - `lib/jasmine-2.5.2/jasmine_favicon.png`
        - `lib/jasmine-2.5.2/jasmine.css`
    0. Added `script` elements to reference:  
        - `lib/jasmine-2.5.2/jasmine.js`
        - `lib/jasmine-2.5.2/jasmine-html.js`
        - `lib/jasmine-2.5.2/boot.js`
  0. Load the page in my browser at `http://localhost:8080/jasmine_test_example/jsunit-tests.html`
  to ensure that the libraries and css are loaded correctly. The page should show `No specs found`.
  0. Created a file to be tested (`src/FileToBeTested.js`)
  0. Add a script element to reference `src/FileToBeTested.js`.
  0. Refresh `http://localhost:8080/jasmine_test_example/jsunit-tests.html` to load the new file.
  You can now open the developer console (`Alt + Shift + J`) and try the following:
    - In the console, type `myGlobalVariable` and press enter to see the value of the variable.
    - In the console, type `myExposedVariable` and press enter to see the value of the variable.
    - In the console, type `myLocalVariable` and press enter to see an error, because it's not in the
    global scope.
  0. Next, we'll use jasmine to write some test that will assert the results we just experienced in the
  console.
  0. Create a spec file to test `src/FileToBeTested.js` (`spec/FileToBeTested_Spec.js`)
  0. Add a script element to reference `spec/FileToBeTested_Spec.js`. This is the jasmine code that will
  run our test code.
  0. Refresh `http://localhost:8080/jasmine_test_example/jsunit-tests.html` to run the tests.
  Everything should pass!