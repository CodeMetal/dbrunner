/**
 * Created by bhandr1 on 5/13/2016.
 */


(function () {
    angular.module('app.tapi').controller('TestSuiteController',TestSuiteController);

    function TestSuiteController($scope,TestSuiteBasicModel,TestSuiteBasicFactory,$sessionStorage,$state){

        init();

        function init() {
            initModels();
           
            	$scope.testSuitesList = [];
            	
            	TestSuiteBasicFactory.getAllTestSuites().then(success,error);
            	function success(response) {
            		$scope.testSuitesList = response.data;
                }
                function error(response) {
                	
                }
                
            
        }

        function initModels() {
            
        	$scope.testSuiteModel = TestSuiteBasicModel.newTestSuiteModel();
        	$scope.testSuiteList = TestSuiteBasicModel.newTestSuiteModel();
        	
        }
        function reset() {
        	$scope.name = "";
        	$scope.testSuitesList = "";
        }

        
        $scope.createTestSuite = function () {
            $state.go('createTestSuite');
            
        };
        
        
        
        $scope.saveTestSuite = function () {
        	 $scope.testSuiteModel.name = $scope.name;
        	 TestSuiteBasicFactory.createTestSuiteData($scope.testSuiteModel).then(success, error);
             function success(response) {
             	reset();
             	$state.go('viewTestSuite');
             }
             function error(response) {
             	reset();
             }
            
            
        };
        
    
        $scope.testSuiteList = function () {
        	$state.go('viewTestSuite');
        	$scope.testSuitesList = [];
        	
        	
        	TestSuiteBasicFactory.getAllTestSuites().then(success,error);
        	function success(response) {
        		$scope.testSuitesList = response.data;
            }
            function error(response) {
            	
            }
            
        }
  
        
    }
    TestSuiteController.$inject = ['$scope','TestSuiteBasicModel','TestSuiteBasicFactory','$sessionStorage','$state'];

})();

