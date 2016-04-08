app.controller('PostListCtrl', [
    '$scope',
    '$resource',
    function ($scope,
              $resource) {

        var _this = this,
            Api = $resource('http://jsonplaceholder.typicode.com/posts');

        this.posts = [];
        this.httpError = false;

        this.getPosts = function() {
            Api.query(function(data) {
                _this.posts = data;
                _this.httpError = false;
            }, function(error) {
                _this.httpError = true;
            });
        }();

    }]);