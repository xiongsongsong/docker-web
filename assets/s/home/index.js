var dockerApp = angular.module('dockerApp', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    controller: 'homeCtrl',
                    controllerAs: 'home'
                })
                .when('/create/:name?', {
                    templateUrl: '/create.html',
                    controller: 'createCtrl',
                    controllerAs: 'create'
                })
            // configure html5 to get links working on jsfiddle
            $locationProvider.html5Mode(true);
        }])
    .controller('homeCtrl', ['$scope', '$route', '$routeParams', '$location', function ($scope, $route, $routeParams, $location) {
        $scope.$on('$routeChangeSuccess', function () {
            $('#nav').show()
        })
    }])
    .controller('createCtrl', function ($scope, $routeParams, $location) {
        $('#nav').hide()
        $('#create').show()
        $('#create').on('click', 'a[type]', function (ev) {
            var $a = $(ev.currentTarget)
            var $all = $(ev.currentTarget).siblings('a')
            $a.removeClass('close')
            $all.addClass('close')
            $a.css({border: "solid 5px red"})
        })
    })
    .controller('ChapterCtrl', ['$routeParams', function ($routeParams) {
        this.name = "ChapterCtrl";
        this.params = $routeParams;
    }]);
