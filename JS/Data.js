var app=angular.module('demo',['ngRoute','ng-fusioncharts']);


//Router configurations

app.config(function($routeProvider){
$routeProvider
.when('/',{
templateUrl:'main.html',
controller:'myController'
})

.when('/barchart',{
	templateUrl:'barchart.html',
	controller:'myController'
})
.when('/main',{
	templateUrl:'main.html',
	controller:'myController'
})
	});


app.controller('myController',function($scope,$location){
	
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
            { "label": "Correct", "value": "4" },
            { "label": "Incorrect", "value": "0" }
			
		   
        ]
    };

	
	
	$scope.Question1="Google launched the latest version of the Android operating system, It is names as";
	$scope.Question2="Which team has won the 2018 Cotif Cup football tournament?";
	$scope.Question3="With which country India collaborate to strengthen sectors of agriculture, health & environment?";
	$scope.Question4="Which rice got the geographical indication (GI) status recently?";
	$scope.ans=[{ques:""},
					{ques:"Pie"},
					{ques:"Glosette"},
					{ques:"Bounty"},
					{ques:"Happy Hippo"}];
	$scope.ans1=[{ques:""},
					{ques:"Venezuela"},
					{ques:"Mauritania"},
					{ques:"India"},
					{ques:"Russia"}];	
	$scope.ans2=[{ques:""},
					{ques:"Singapore"},
					{ques:"Russia"},
					{ques:"Israel"},
					{ques:"Germany"}];	
	$scope.ans3=[{ques:""},
					{ques:"Aromatic rice"},
					{ques:"Japonica Rice"},
					{ques:"Thai Fragrant Rice"},
					{ques:"Gobindobhog rice"}];	
    function answer(){
			var Field1=$scope.requiredField1;
			var Field2=$scope.requiredField2;
			var Field3=$scope.requiredField3;
			var Field4=$scope.requiredField4;
			if(($scope.requiredField1)=="Pie"){
				 document.getElementById("obj0").innerHTML = "correct";
				 document.getElementById("obj1").style.color = "blue";
			}else {
				document.getElementById("obj0").innerHTML = "incorrect";
				document.getElementById("obj1").style.color = "red";
			}
           	if(($scope.requiredField2)=="India"){
				 document.getElementById("obj00").innerHTML = "correct";
				 document.getElementById("obj2").style.color = "blue";
			}else {
			
				document.getElementById("obj00").innerHTML = "incorrect";
				document.getElementById("obj2").style.color = "red";
			}
            if(($scope.requiredField3)=="Israel"){
				document.getElementById("obj000").innerHTML = "correct"; 
				 document.getElementById("obj3").style.color = "blue";
			}else {
				document.getElementById("obj000").innerHTML = "incorrect";
				document.getElementById("obj3").style.color = "red";
			} 
				if(($scope.requiredField4)=="Gobindobhog rice"){
				 document.getElementById("obj0000").innerHTML = "correct";
				 document.getElementById("obj4").style.color = "blue";
			}else {
				document.getElementById("obj0000").innerHTML = "incorrect";
				document.getElementById("obj4").style.color = "red";
			}
   }
   function answer1(){
			var Field1=$scope.requiredField1;
			var Field2=$scope.requiredField2;
			var Field3=$scope.requiredField3;
			var Field4=$scope.requiredField4;
			if($scope.requiredField1=="Pie" && $scope.requiredField2=="India" && $scope.requiredField3=="Israel" && $scope.requiredField4=="Gobindobhog rice"){
				//alert('successful');
				$location.path('/barchart');
			}else {
				alert('All answers are not correct OR You have not answered for all');
			}
           	
   }
   $scope.login=function(){
   answer();
   answer1();
   }
$scope.back=function(){
	$location.path('/main');
}
});
