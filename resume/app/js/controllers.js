var bookStoreCtrls = angular.module('bookStoreCtrls', []);

bookStoreCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
        $scope.pageClass="hello";
    }
]);

bookStoreCtrls.controller('BookListCtrl', ['$scope',
    function($scope) {
        $scope.books = [{
            title: "《javascript权威指南》",
            author: "淘宝团队翻译"
        }, {
            title: "《图解CSS3》",
            author: "大漠"
        }, {
            title: "《用AngularJS开发下一代WEB应用》",
            author: "大漠穷秋"
        }, {
            title: "《nodejs高级编程》",
            author: "Pedro Teixeira"
        }, {
            title: "《用AngularJS开发下一代WEB应用》",
            author: "大漠穷秋"
        }, {
            title: "《AngularJS权威教程》",
            author: "Ari Lerner"
        }, {
            title: "《HTML,CSS,JS网页制作》",
            author: "刘西杰，柳林"
        }, {
            title: "《HTTP权威指南》",
            author: "David Gourly,Brian Totty"
        }
        ];
        $scope.pageClass="list";
    }
]);

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */
