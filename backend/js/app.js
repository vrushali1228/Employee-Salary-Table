// JavaScript Document
var myApp = angular.module('myApp', [
    'ui.router',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    "ngMap",
    "internationalPhoneNumber",
    'ui.bootstrap',
    'ui.select',
    'ngAnimate',
    'toastr',
    'textAngular',
    'ngSanitize',
    'ngMap',
    'toggle-switch',
    'cfp.hotkeys',
    'ui.sortable'
]);

myApp.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider

        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/template.html",
            controller: 'DashboardCtrl',
        })

        .state('login', {
            url: "/login",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        })

        .state('page', {
            url: "/page/:id/{page:.*}/{keyword:.*}",
            templateUrl: "views/template.html",
            controller: 'PageJsonCtrl'
        })

        .state('loginapp', {
            url: "/login/:id",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        })

        .state('country-list', {
            url: "/country-list/{page:.*}/{keyword:.*}",
            templateUrl: "views/template.html",
            controller: 'CountryCtrl',
            params: {
                page: "1",
                keyword: ""
            }
        })

        .state('createcountry', {
            url: "/country-create",
            templateUrl: "views/template.html",
            controller: 'CreateCountryCtrl'
        })

        .state('editcountry', {
            url: "/country-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditCountryCtrl'
        })

        .state('schema-creator', {
            url: "/schema-creator",
            templateUrl: "views/template.html",
            controller: 'SchemaCreatorCtrl'
        })

        .state('excel-upload', {
            url: "/excel-upload/:model",
            templateUrl: "views/template.html",
            controller: 'ExcelUploadCtrl'
        })

        // .state('jagz', {
        //     url: "/jagz",
        //     templateUrl: "views/jagz.html",
        //     controller: 'JagzCtrl'


        // })
        .state('employee', {
            url: "/employee",
            templateUrl: "views/template.html",
            controller: 'empCtrl'
        })
        .state('employeedetails', {
            url: "/employeedetails",
            templateUrl: "views/template.html",
            controller: 'createEmployee'
        })
        .state('employeeEdit', {
            url: "/employeedetails/:id",
            templateUrl: "views/template.html",
            controller: 'editEmployee'
        })
        .state('salary', {
            url: "/salary",
            templateUrl: "views/template.html",
            controller: 'salaryCtrl'
        })
        // .state('salarydetails', {
        //     url: "/salarydetails",
        //     templateUrl: "views/template.html",
        //     controller: 'createSalary'
        // })
        .state('salaryEdit', {
            url: "/salarydetails/:id",
            templateUrl: "views/template.html",
            controller: 'editSalary'
        })

        .state('providentfund', {
            url: "/providentfund",
            templateUrl: "views/template.html",
            controller: 'providentfundCtrl'
        })

        .state('providentfundEdit', {
            url: "/providentfundEdit/:id",
            templateUrl: "views/template.html",
            controller: 'editProvidentfund'
        })
        .state('designation', {
            url: "/designation",
            templateUrl: "views/template.html",
            controller: 'designationCtrl'
        })
        .state('designationdetails', {
            url: "/designationdetails",
            templateUrl: "views/template.html",
            controller: 'createdesignationCtrl'
        });


    $urlRouterProvider.otherwise("/dashboard");
    $locationProvider.html5Mode(isproduction);
});

myApp.config(function ($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});