namespace InsightHub.lms;

using {
    cuid,
    managed
} from '@sap/cds/common';

entity Enrollments : cuid, managed {
    student : Association to Students;
    course  : Association to Courses;

}

entity Courses : cuid, managed {
    course_name      : String(100);
    course_duration  : DecimalFloat;
    course_price     : Decimal(5, 2);
    published_status : Boolean;
    enrollment       : Association to many Enrollments
                           on enrollment.course = $self;
    content          : Association to many Contents
                           on content.course = $self;
}

entity Students : cuid, managed {
    email        : String(50);
    first_name   : String(40);
    last_name    : String(40);
    date_sign_up : type of managed : createdAt;
    enrollment   : Association to many Enrollments
                       on enrollment.student = $self;
}

entity Contents : cuid, managed {
    url          : String(2048);
    date_managed : type of managed : createdAt;
    content_type : String(20);
    course       : Association to Courses;

}
