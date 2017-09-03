/**
 * Created by bhandr1 on 5/14/2016.
 */
(function () {
    angular.module('app.tapi').factory('TestSuiteBasicFactory',TestSuiteBasicFactory);

    TestSuiteBasicFactory.$inject = ["RestHelper","TestSuiteConstant"];

    function TestSuiteBasicFactory(RestHelper,TestSuiteConstant) {

        return {
            createTestSuiteData: createTestSuiteData,
            getAllTestSuites: getAllTestSuites
         
        };

       
        function createTestSuiteData(data){
        	return RestHelper.post("",TestSuiteConstant.TESTSUITE_BASIC_APP_URL_BASE,data)
        }
        
       
        function getAllTestSuites(){
        	return RestHelper.get("",TestSuiteConstant.TESTSUITE_BASIC_APP_URL_BASE + "/list")
        }
        
        

    }
})();
