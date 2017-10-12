angular.module('sampleApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/admin/basic-info');
    
    $stateProvider
        .state('admin', {
            url: '/admin',
            templateUrl: './partials/admin/admin.html',
            controller: 'AdminController'
        })
        .state('admin.basicInfo', {
            url: '/basic-info',
            templateUrl: './partials/admin/basicInfo.html'
        })
        .state('admin.facilityTags', {
            url: '/facility-tags',
            templateUrl: './partials/admin/facilityTags.html'
        })
        .state('admin.addons', {
            url: '/addons',
            templateUrl: './partials/admin/addons.html'
        })
        .state('admin.engineInfo', {
            url: '/engine-info',
            templateUrl: './partials/admin/engineInfo.html'
        })
        .state('admin.configuration', {
            url: '/configuration',
            templateUrl: './partials/admin/configuration.html'
        })
        .state('admin.timings', {
            url: '/timings',
            templateUrl: './partials/admin/timings.html'
        })
        .state('admin.policies', {
            url: '/policies',
            templateUrl: './partials/admin/policies.html'
        })
        .state('admin.promotions', {
            url: '/promotions',
            templateUrl: './partials/admin/promotions.html'
        })
        .state('admin.complete', {
            url: '/complete',
            templateUrl: './partials/admin/complete.html'
        })
});