
var myApp = angular.module('myApp', ['ng-fusioncharts']);
myApp.controller('MyController', ['$scope', function($scope){
    $scope.myDataSource = {
        "chart": {
            "caption": "Quize",
            "subCaption": "",
            "xAxisName": "",
            "yAxisName": "values in number",
            "numberSuffix": "%",
            "theme": "fusion",
			
        },
        "data": [
            { "label": "Correct", "value": "2" },
            { "label": "Incorrect", "value": "0" }
			
		   
        ]
    };
	
}]);