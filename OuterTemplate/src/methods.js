import { writeHTML, generateTemplateName } from 'markup-generator'




// import DisplayMain from './display/displayMain';
// import DisplayHead from './display/displayHead';
// import DisplayFooter from './display/displayFooter';


// import DisplayBody from './display/displayBody';




// instead of importhing these methods we can run displayXXX.checks[xxx]

// import { checkingTitle,
//   checkingBodyContent,
//   checkingPreviewText 
// } from './t/display'

// import footer from './templates/footer'






// not working anymore
const printMain = () => {

  

  
  return displayMain();
  // return mainComponent("xxx", "xxx");
//   mainComponent(head, bodyComponent);
}

// ------------------------

// not working anymore
// const printFooter = () => {


//   return footer("","","","",);
//   //
// }

// ------------------------

// not working anymore
// const printBody = () => {
//   return EmailTemplateBodyComponent(footer, "", "");
//   //EmailTemplateBodyComponent(footer, logoTop, logoBottom)
// }

// ------------------------

// not working anymore
// const printHead = () => {
//   return displayHead("Ziba Zyaba Zoooo");
//   // return headComponent("Ziba Zyaba Zoooo", "xxx", "xxx");
// }

// ------------------------


// const writingFile = (content) => {

//   // const content  = generateEmptyTemplateComponent();
//   const fileName = generateTemplateName('lit-empty');

//   writeHTML(fileName, content);
// }



export { 
  printMain, 
  
  // printFooter, printBody,
  // printHead,


  // writingFile
 }
