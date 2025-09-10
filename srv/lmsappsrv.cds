using {InsightHub.lms as lms} from '../db/Schema.cds';

service lmsApp {
    @readonly
    entity GetStudent as projection on lms.Students;

    @readonly
    entity GetEnrollment as projection on lms.Enrollments;

    @readonly
    entity GetCourse as projection on lms.Courses;

    @readonly
    entity GetContent as projection on lms.Contents;


}
