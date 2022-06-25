// const { 
//   printMain, 
//   printFooter, printBody, 
//   printHead,
//   writingFile
// } = require('../src/methods');

import { printMain,  printFooter, printBody, printHead, writingFile } from '../src/methods'

// console.log(printMain())
// console.log(printHead())


// var generateEmptyTemplateComponent = require('../src/t/emptyTemplate');

// var generateTemplateComponent = require('../src/t/generateTemplate');


describe('test helpers', () => {


    // test('rendering head component', () => {

      // const string = printHead();

      // // console.log(string);

      // writingFile(string);
    // });
  
  //  test('rendering Empty Template', () => {

    //  const string = generateEmptyTemplateComponent();
    //  console.log(string);
  //  });


   test('rendering Main Component', () => {


       const string = printHead();

      //  if(!string) {
      //    console.log("HW!")
      //  }
      console.log(string)

       expect(printHead()).toBeDefined();
      //  console.log(string)

       writingFile(string);
       // expect(typeof string).toBe('string');

   });


});
