/**
 * Created by samsuj on 29/10/15.
 */


'use strict';

/* App Module */

var mentalmarksman = angular.module('mental_marksman', ['ui.router','angularValidator','ngCookies','ui.bootstrap','ngFileUpload','youtube-embed']);

mentalmarksman.run(['$rootScope', '$state',function($rootScope, $state){

    $rootScope.$on('$stateChangeStart',function(){
        $rootScope.stateIsLoading = true;
    });


    $rootScope.$on('$stateChangeSuccess',function(){
        $rootScope.stateIsLoading = false;
    });

}]);

mentalmarksman.config(function($stateProvider, $urlRouterProvider,$locationProvider) {

// For any unmatched url, redirect to /state1
    $urlRouterProvider
        .otherwise("/index");

//
    // Now set up the states
    $stateProvider
        .state('index',{
            url:"/index",
            views: {

                'loader': {
                    controller: 'index'
                },

            }
        }
    )
        .state('home',{
            url:"/home",
            views: {

                'header': {
                    templateUrl: 'partial/header.html' ,
                    controller: 'header'
                },
                'footer': {
                    templateUrl: 'partial/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partial/home.html' ,
                    controller: 'home'
                },

            }
        }
    )

        .state('login',{
            url:"/login",
            views: {

                'content': {
                    templateUrl: 'partial/login.html' ,
                    controller: 'login'
                },

            }
        }
    )
        .state('logout',{
            url:"/logout",
            views: {

                 'loader': {
                     controller: 'logout'
                },

            }
        }
    )
        .state('signup',{
            url:"/sign-up",
            views: {

                'header': {
                    templateUrl: 'partial/header.html' ,
                    controller: 'header'
                },
                'footer': {
                    templateUrl: 'partial/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partial/signup.html' ,
                    controller: 'signup'
                },

            }
        }
    )
        .state('thankyou',{
            url:"/thank-you",
            views: {

                'header': {
                    templateUrl: 'partial/header.html' ,
                    controller: 'header'
                },
                'footer': {
                    templateUrl: 'partial/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partial/thankyou.html' ,
                    controller: 'thankyou'
                },

            }
        }
    )
        .state('contactus',{
            url:"/contact-us",
            views: {

                'header': {
                    templateUrl: 'partial/header.html' ,
                    controller: 'header'
                },
                'footer': {
                    templateUrl: 'partial/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partial/contactus.html' ,
                    controller: 'contactus'
                },

            }
        }
    )
        .state('memberportal',{
            url:"/member-portal",
            views: {

                'header': {
                    templateUrl: 'partial/header.html' ,
                    controller: 'header'
                },
                'footer': {
                    templateUrl: 'partial/footer.html' ,
                    controller: 'footer'
                },
                'content': {
                    templateUrl: 'partial/memberportal.html' ,
                    controller: 'memberportal'
                },

            }
        }
    )

        .state('dashboard',{
            url:"/dashboard",
            views: {

                'header': {
                    templateUrl: 'partial/admin_header.html' ,
                    controller: 'admin_header'
                },
                'left': {
                    templateUrl: 'partial/admin_left.html' ,
                    controller: 'admin_left'
                },
                'footer': {
                    templateUrl: 'partial/admin_footer.html' ,
                    controller: 'admin_footer'
                },
                'content': {
                    templateUrl: 'partial/dashboard.html' ,
                    controller: 'dashboard'
                },

            }
        }
    )

        .state('customerlist',{
            url:"/customer-list",
            views: {

                'header': {
                    templateUrl: 'partial/admin_header.html' ,
                    controller: 'admin_header'
                },
                'left': {
                    templateUrl: 'partial/admin_left.html' ,
                    controller: 'admin_left'
                },
                'footer': {
                    templateUrl: 'partial/admin_footer.html' ,
                    controller: 'admin_footer'
                },
                'content': {
                    templateUrl: 'partial/customerlist.html' ,
                    controller: 'customerlist'
                },

            }
        }
    )

        .state('addvideo',{
            url:"/addvideo",
            views: {

                'header': {
                    templateUrl: 'partial/admin_header.html' ,
                    controller: 'admin_header'
                },
                'left': {
                    templateUrl: 'partial/admin_left.html' ,
                    controller: 'admin_left'
                },
                'footer': {
                    templateUrl: 'partial/admin_footer.html' ,
                    controller: 'admin_footer'
                },
                'content': {
                    templateUrl: 'partial/addvideo.html' ,
                    controller: 'addvideo'
                },

            }
        }
    )

        .state('videolist',{
            url:"/video-list",
            views: {

                'header': {
                    templateUrl: 'partial/admin_header.html' ,
                    controller: 'admin_header'
                },
                'left': {
                    templateUrl: 'partial/admin_left.html' ,
                    controller: 'admin_left'
                },
                'footer': {
                    templateUrl: 'partial/admin_footer.html' ,
                    controller: 'admin_footer'
                },
                'content': {
                    templateUrl: 'partial/videolist.html' ,
                    controller: 'videolist'
                },

            }
        }
    )


    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        hashPrefix:'!'
    });

});

mentalmarksman.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.ngEnter, {$event:event});
                });
                event.preventDefault();
            }
        });
    };
});

mentalmarksman.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$rootScope,$http,$cookieStore) {

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.addYtVideo = function(item){
        $uibModalInstance.dismiss('cancel');
        $scope.form.videoId = (item.id.videoId);

    }

});

mentalmarksman.controller('index', function($scope,$state,$cookieStore) {
    $state.go('home');
    return
});

mentalmarksman.controller('header', function($scope,$state,$cookieStore) {
    $scope.loggedinstatus = 0;

    if(typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid')>0){
        $scope.loggedinstatus = 1;
    }
});

mentalmarksman.controller('footer', function($scope,$state,$cookieStore) {

});

mentalmarksman.controller('home', function($scope,$state,$cookieStore,$http,$rootScope) {



});
mentalmarksman.controller('login', function($scope,$state,$cookieStore,$rootScope,$http) {

    $scope.login = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'/customuser/login',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;
            if(data.status == 'success'){
                $cookieStore.put('userid',data.userdetails.id);
                if(typeof (data.userdetails.roles[4]) != 'undefined')
                    $cookieStore.put('userrole',4);
                if(typeof (data.userdetails.roles[5]) != 'undefined')
                    $cookieStore.put('userrole',5);

                $state.go('dashboard');
                return


            }else{
                $scope.errormsg = data.msg;
            }

        });
    }

});
mentalmarksman.controller('signup', function($scope,$state,$cookieStore,$rootScope,$http) {
    $scope.passwordValidator = function(password) {

        if (!password) {
            return;
        }
        else if (password.length < 6) {
            return "Password must be at least " + 6 + " characters long";
        }
        else if (!password.match(/[A-Za-z]/)) {
            return "Password must have at least one letter";
        }
        else if (!password.match(/[0-9]/)) {
            return "Password must have at least one number";
        }

        return true;
    };

    $scope.monthList = [
        {
            'id':1,'name':'January'
        },
        {
            'id':2,'name':'Febuary'
        },
        {
            'id':3,'name':'March'
        },
        {
            'id':4,'name':'April'
        },
        {
            'id':5,'name':'May'
        },
        {
            'id':6,'name':'June'
        },
        {
            'id':7,'name':'July'
        },
        {
            'id':8,'name':'August'
        },
        {
            'id':9,'name':'September'
        },
        {
            'id':10,'name':'October'
        },
        {
            'id':11,'name':'November'
        },
        {
            'id':12,'name':'December'
        },
    ];

    var yearList = [];
    for(var i=0;i<20;i++) {
        yearList.push({'id':2016+i,'name':2016+i});
    }
    $scope.yearList = yearList;

    $scope.form={
        live_attendent:0,
        other_training:0,
        own_firearm:0,
        shooting_facility:0,
    }
    $scope.updatename = function($event){
        var nameoncard = { 'nameoncard' : $event.target.value }
        angular.extend($scope.form, nameoncard)

    }

$scope.register = function(){
    $rootScope.stateIsLoading = true;
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'/customuser/register',
        data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $rootScope.stateIsLoading = false;
        if(data.status == 'error'){
            var myEl = angular.element( document.querySelector( '#emailgroup' ) );
            myEl.find('.errormsg').remove();
            myEl.append('<span class="errormsg has-error validationMessage">'+data.msg+'</span>');
        }else{
            $state.go('thankyou');
            return
        }

    });
}
});
mentalmarksman.controller('thankyou', function($scope,$state,$cookieStore,$rootScope,$http) {

});
mentalmarksman.controller('logout', function($scope,$state,$cookieStore,$rootScope,$http) {
    $cookieStore.remove('userid');
    $cookieStore.remove('userrole');

    $state.go('home');
    return

});

mentalmarksman.controller('contactus', function($scope,$state,$cookieStore,$rootScope,$http) {

    $scope.monthList = [
        { 'id':1,'name':'January' },
        { 'id':2,'name':'Febuary' },
        { 'id':3,'name':'March' },
        { 'id':4,'name':'April' },
        { 'id':5,'name':'May' },
        { 'id':6,'name':'June' },
        { 'id':7,'name':'July' },
        { 'id':8,'name':'August' },
        { 'id':9,'name':'September' },
        { 'id':10,'name':'October' },
        { 'id':11,'name':'November' },
        { 'id':12,'name':'December' },
    ];

    var classN = [];
    for(var i=1;i<=10;i++) {
        classN.push(i);
    }
    $scope.classN = classN;

    $scope.form = {
        is_interested : 0
    }

    $scope.contactus = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'/contactus',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = false;

            $state.go('home');
            return
        });
    }

});

mentalmarksman.controller('admin_header', function($scope,$state,$cookieStore,$rootScope,$http) {

    if(typeof($cookieStore.get('userid')) != 'undefined' && $cookieStore.get('userid')>0){
        $rootScope.userid = $cookieStore.get('userid');
        $rootScope.userrole = $cookieStore.get('userrole');
    }else{
        $state.go('home');
        return;
    }

});

mentalmarksman.controller('admin_footer', function($scope,$state,$cookieStore,$rootScope,$http) {
});

mentalmarksman.controller('admin_left', function($scope,$state,$cookieStore,$rootScope,$http) {
});

mentalmarksman.controller('dashboard', function($scope,$state,$cookieStore,$rootScope,$http) {

    $state.go('customerlist');
    return;

});

mentalmarksman.controller('customerlist', function($scope,$state,$cookieStore,$rootScope,$http) {
    $scope.currentPage=1;
    $scope.perPage=10;
    $scope.begin=0;

    $scope.predicate = 'created';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
    };
    $scope.searchkey = '';
    $scope.search = function(item){

        if ( (item.fullname.indexOf($scope.searchkey) != -1) || (item.mail.indexOf($scope.searchkey) != -1) ){
            return true;
        }
        return false;
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.userlistP = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'/alluserlist',
        //data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.userlist = data;
        $scope.userlistP = $scope.userlist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    });

});

mentalmarksman.controller('addvideo', function($scope,$state,$cookieStore,$rootScope,$http,$uibModal) {

    $scope.form = {
        videoId : ''
    };

    $scope.videoValidator = function(videoId) {

        if (videoId == '') {
            return "Please Search & Add Youtube Video";
        }

        return true;
    };

    $scope.youtubeSearch = function(event){
        if(event.type == 'keydown'){
            var searchval = event.currentTarget.value;
            if(searchval != ''){
                var dataurl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+searchval+'&maxResults=10&key=AIzaSyANefU-R8cD3udZvBqbDPqst7jMKvB_Hvo';

                $rootScope.stateIsLoading = true;

                $http.get(dataurl).success(function(data){

                    $scope.vids = [];

                    angular.forEach(data.items, function(value, key){
                        if(typeof (value.id.videoId) != 'undefined'){
                            $scope.vids.push(value);
                        }
                    });
                    $rootScope.stateIsLoading = false;

                    $uibModal.open({
                        animation: true,
                        templateUrl: 'videoList.html',
                        controller: 'ModalInstanceCtrl',
                        size: 'lg',
                        scope: $scope
                     });

                });
            }
        }
    };

    $scope.addvideo = function(){
        $rootScope.stateIsLoading = true;
        $http({
            method  : 'POST',
            async:   false,
            url     : $scope.adminUrl+'/addvideo',
            data    : $.param($scope.form),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        }) .success(function(data) {
            $rootScope.stateIsLoading = true;

            $state.go('videolist');
            return;
        });
    }

    $rootScope.showYoutubevdo = function(id,value){
        angular.element( document.querySelector( '#youtubeBody'+id ) ).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+value+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }

});

mentalmarksman.controller('videolist', function($scope,$state,$cookieStore,$rootScope,$http) {
    $scope.currentPage=1;
    $scope.perPage=3;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.videolistP = $scope.videolist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'/videolist',
        //data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.videolist = data;
        $scope.videolistP = $scope.videolist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    });

    $rootScope.showYoutubevdo = function(id,value){
        angular.element( document.querySelector( '#youtubeBody'+id ) ).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+value+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }
});

mentalmarksman.controller('memberportal', function($scope,$state,$cookieStore,$rootScope,$http) {
    $scope.currentPage=1;
    $scope.perPage=6;
    $scope.begin=0;

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function(){
        $scope.begin=parseInt($scope.currentPage-1)*$scope.perPage;
        $scope.videolistP = $scope.videolist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    }
    $http({
        method  : 'POST',
        async:   false,
        url     : $scope.adminUrl+'/videolist',
        //data    : $.param($scope.form),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
    }) .success(function(data) {
        $scope.videolist = data;
        $scope.videolistP = $scope.videolist.slice($scope.begin, parseInt($scope.begin+$scope.perPage));
    });

    $rootScope.showYoutubevdo = function(id,value){
        angular.element( document.querySelector( '#youtubeBody'+id ) ).html('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/'+value+'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    }
});



