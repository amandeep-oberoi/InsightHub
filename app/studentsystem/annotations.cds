using lmsAppService as lmsAppService from '../../srv/lmsappsrv.cds';
annotate lmsAppService.GetStudent with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'firstName',
                Value : first_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'lastName',
                Value : last_name,
            },
            {
                $Type : 'UI.DataField',
                Label:'dateSignUp',
                Value : date_sign_up,
            }
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem:[
        {
                $Type : 'UI.DataField',
                Label : 'Email',
                Value : email,
            },
            {
                $Type : 'UI.DataField',
                Label : 'First name',
                Value : first_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'Last name',
                Value : last_name,
            },
            {
                $Type : 'UI.DataField',
                Label:'Sign-Up date',
                Value : date_sign_up,
            }
    ]
);


