define(['common', 'constant', 'utilities', 'moment', 'socket.io'], function (angularAMD, CONSTANT, UTILITIES, moment, io) {
    'use strict';
    var app = angular.module('CheerHiBusiness', ['ui.router', 'ngResource', 'ngMaterial', 'ngFileUpload', 'angular-loading-bar', 'btford.socket-io', 'ngMessages', 'ngAnimate']).constant('CONSTANT', CONSTANT);

    app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', '$mdThemingProvider', 'cfpLoadingBarProvider', '$mdDateLocaleProvider', function ($httpProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider, cfpLoadingBarProvider, $mdDateLocaleProvider) {

        // THEME
        $mdThemingProvider.theme('default').primaryPalette('light-blue');

        $stateProvider.state('order', angularAMD.route({
                //订单管理
                url: '/order',
                templateUrl: 'views/order/order.html',
                controllerUrl: '../js/controllers/order/order'
            }))
            .state('order.bookConfirm', angularAMD.route({
                //预订确认
                url: '/book-confirm',
                /*地址栏上显示的地址*/
                templateUrl: 'views/order/book-confirm.html',
                controllerUrl: '../js/controllers/order/bookConfirm'
            }));

        //$urlRouterProvider.otherwise('/order');

        $httpProvider.interceptors.push(function (cfpLoadingBar) {
            return {
                'request': function (config) {
                    cfpLoadingBar.start();
                    return config;
                },
                'response': function (response) {
                    cfpLoadingBar.complete();

                    var logout = function () {
                        UTILITIES.sessionUtilities().clearUserInfo();
                        location.href = CONSTANT.LOGIN_PAGE;
                    }

                    if (response.data !== undefined) {
                        if (response.data.code !== undefined) {
                            if (response.data.code == 1) {
                                logout();
                            } else {
                                return response;
                            }
                        } else {
                            return response;
                        }
                    }

                }
            };
        });

        // 日期格式化md-datepicker
        $mdDateLocaleProvider.shortDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
        $mdDateLocaleProvider.shortMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('YYYY-MM-DD');
        };

    }]);

    /**********************DIRECTIVES**************************/

    return angularAMD.bootstrap(app);
});

// test