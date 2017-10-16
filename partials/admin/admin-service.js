angular.module('AdminServiceModule', []).factory('AdminService', AdminService);

function AdminService(){
    var service = {
        menuItems : [
            {text: 'Basic Info'},
			{text: 'Facility & Tags'},
			{text: 'Add-ons'},
			{text: 'Engine Info'},
			{text: 'Configuration'},
			{text: 'Timings'},
			{text: 'Policies'},
			{text: 'Promotions'},
			{text: 'Complete'}
		],
        routes : [
            'admin.basicInfo',
            'admin.facilityTags',
            'admin.addons',
            'admin.engineInfo',
            'admin.configuration',
            'admin.timings',
            'admin.policies',
            'admin.promotions',
            'admin.complete'
        ]
    }
    
    return service;
}
