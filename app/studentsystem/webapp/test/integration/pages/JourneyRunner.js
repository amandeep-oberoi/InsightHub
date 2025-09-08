sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"studentsystem/test/integration/pages/StudentServiceList",
	"studentsystem/test/integration/pages/StudentServiceObjectPage"
], function (JourneyRunner, StudentServiceList, StudentServiceObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('studentsystem') + '/index.html',
        pages: {
			onTheStudentServiceList: StudentServiceList,
			onTheStudentServiceObjectPage: StudentServiceObjectPage
        },
        async: true
    });

    return runner;
});

