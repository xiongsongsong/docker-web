var dockerApp = angular.module('dockerApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    controller: 'homeCtrl',
                    controllerAs: 'home'
                })
                .when('/create', {
                    templateUrl: '/create.html',
                    controller: 'createCtrl',
                    controllerAs: 'create'
                })
                .when('/create/:name', {
                    templateUrl: '/config.html',
                    controller: 'configCtrl',
                    controllerAs: 'config'
                })
            // configure html5 to get links working on jsfiddle
            $locationProvider.html5Mode(true);
        }])
    .controller('homeCtrl', ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function () {
            $('#nav').show()
            $('#create').hide()
        })
    }])
    .controller('createCtrl', function ($scope, $routeParams, $location) {
        var self = this
        $scope.$on('$routeChangeSuccess', function () {
            $('#nav').hide()
            $('#create').show()
        })

    })
    .controller('configCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http) {
        var self = this
        var name = $routeParams.name
        self.title = name

        $scope.run = function () {
            self.info = '启动中'

            $http.post('/run', {
                name: name,
                _csrf: csrfToken
            }).success(function (data, status, headers) {
                self.info = '启动完成'
                $scope.$apply()
                console.log(data, status, headers)
            })
        }
    }])
