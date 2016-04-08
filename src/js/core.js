var app = angular.module('kansiApp', [
    'ngResource',
    'angularUtils.directives.dirPagination',
    'ui.router'
]).config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('../bower_components/angular-utils-pagination/dirPagination.tpl.html');
});