app.controller('PostDetailCtrl', [
    '$resource',
    '$stateParams',
    function ($resource,
              $stateParams) {

        var _this = this,
            PostApi = $resource('http://jsonplaceholder.typicode.com/posts/:id', {id: $stateParams.id}),
            UserApi = $resource('http://jsonplaceholder.typicode.com/users/:id'),
            PostCommentsApi = $resource('http://jsonplaceholder.typicode.com/posts/:id/comments', {id: $stateParams.id});

        this.post = {};
        this.httpError = {
            post: false,
            comments: false,
            user: false
        };

        this.getCommentsPost = function() {
            PostCommentsApi.query(function(data) {
                _this.post.comments = data;
                _this.httpError.comments = false;
            }, function(error) {
                _this.httpError.comments = true;
            });
        };

        this.getUser = function(userId) {
            UserApi.get({id: userId}, function(data) {
                _this.post.user = data;
                _this.httpError.user = false;
            }, function(error) {
                _this.httpError.user = true;
            });
        };

        this.getPost = function() {
            PostApi.get(function(data) {
                _this.post = data;
                _this.getCommentsPost();
                _this.getUser(_this.post.userId);
                _this.httpError.post = false
            }, function(error) {
                _this.httpError.post = true;
            });
        }();
        
    }]);