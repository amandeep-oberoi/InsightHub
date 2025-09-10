using {InsightHub.hrMs as hrMs} from '../db/Students.cds';
using mysrvdemo from './mysimplesrv.cds';


extend service mysrvdemo with @(path:'mynewservice',impl:'srv/mynewsrv.js'){
    @readonly
    entity CustomGetStudent as Select from hrMs.Students{
        *,
        firstName||' '||lastName as fullName:String
    } excluding{
        dateSignUp
    }
}
