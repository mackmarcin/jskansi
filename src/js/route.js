app.config(['$stateProvider',
    function($stateProvider) {
        $stateProvider
            .state('posts', {
                url: '/posts',
                templateUrl: 'list.html',
                controller: 'PostListCtrl as ctrl'
            })
            .state('post_details', {
                url: '/posts/{id}',
                templateUrl: 'details.html',
                controller: 'PostDetailCtrl as ctrl'
            });
    }]);