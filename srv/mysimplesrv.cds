using {InsightHub.hrMs as hrMs} from '../db/Students';



service mysrvdemo {
    @readonly
    entity StudentService as projection on hrMs.Students;
    
    function myfoobar(firstName:String, lastName:String) returns String;
    function myfoobar2() returns String;

}