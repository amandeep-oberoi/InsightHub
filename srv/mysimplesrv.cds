using {InsightHub.hrMs as hrMs} from '../db/Students';


service mysrvdemo {
    @readonly
    entity GetStudent as projection on hrMs.Students;

    @updateOnly
    entity UpdateStudent as projection on hrMs.Students;

    @insertonly
    entity CreateStudent as projection on hrMs.Students;

    action deleteStudent(email:String) returns Boolean;


    

    function myfoobar(firstName: String, lastName: String) returns String;
    function myfoobar2() returns String;




//new service added in new Service file
// extend service mysrvdemo with{
//     entity GetCustomStudent as select from hrMs.Students{
//         email,
//         firstName,
//         lastName,
//         firstName||' '||lastName as fullName:String
//     }
// }



}
