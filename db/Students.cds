namespace InsightHub.hrMs; //primarily used to categorized diff categories
using { cuid,managed  } from '@sap/cds/common';


entity Students : cuid,managed{
     email : String;
     firstName: String;
     @cds.api.ignore
     lastName : String;
     dateSignUp : Date;
}

// annotate Students with @(
//     UI:{
//         LineItem  : [
//             {
//                 Label : 'Student ID',
//                 Value : ID,

//             },

//             {
//                 Label:'Email',
//                 Value : email,
//             },
//              {
//                 Label:'First Name',
//                 Value : firstName,
//             },
//              {
//                 Label:'Last Name',
//                 Value : lastName,
//             },
//              {
//                 Label:'Joining Date',
//                 Value : dateSignUp,
//             }
            
//         ],
//     }
// );
