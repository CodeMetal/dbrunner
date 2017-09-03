/**
 * Created by bhandr1 on 5/13/2016.
 */


(function () {
    angular.module('app.tapi').controller('SqlController',SqlController);

    function SqlController($scope,SqlModel,SqlFactory,$sessionStorage,$state){

    	init();

        function init() {
            initModels();
           
           
        }

        function initModels() {
            
        	
        	$scope.sqlModel = SqlModel.newSqlModel();
        	$scope.queryResult = SqlModel.newSqlResult();
        }
        function reset() {
        	$scope.name = "";
        }

        function formatResult(errorCode, errorMessage){
        	return "Statement execution failed" + ' Error Code: ' + errorCode + ' Error Message: ' + errorMessage; 
        }
        
        
        
        $scope.runUpsertStatement = function () {
        	//$state.go('createTestCase');
        	console.log("In Upsert:  "+ $scope.sqlModel.sql);
        	
        	SqlFactory.runUpsertStatement($scope.sqlModel).then(success, error);
        	function success(response) {
        		console.log("Upsert Success");
        		$scope.sqlModel.resultMessage = "Statement executed Successfully";
            	
            }
            function error(response) {
            	$scope.sqlModel.resultMessage = formatResult(response.data.errorCode, response.data.message);
            	console.log($scope.sqlModel.resultMessage );
            }
        };
        
        $scope.runDDLStatement = function () {
        	console.log("In DDL" + $scope.sql);
        	SqlFactory.runDDLStatement($scope.sqlModel).then(success, error);
        	function success(response) {
        		$scope.sqlModel.resultMessage = "Statement executed Successfully";
        		console.log("DDL Success");
            }
            function error(response) {
            	console.log("DDL Failure");
            	$scope.sqlModel.resultMessage = formatResult(response.data.errorCode, response.data.message);
            }
        };
        
        $scope.runQuery = function () {
        	console.log("In Query" + $scope.sqlModel.sql);
        	SqlFactory.runQuery($scope.sqlModel).then(success, error);
        	function success(response) {
        		$scope.sqlModel.queryResult = response.data.result;
        		console.log("Query Success result: "+$scope.queryResult);
            }
            function error(response) {
            	console.log("Query Failure");
            	$scope.sqlModel.resultMessage = formatResult(response.data.errorCode, response.data.message);
            }
        };
        
        
        
        
    }
    SqlController.$inject = ['$scope','SqlModel','SqlFactory','$sessionStorage','$state'];

})();

