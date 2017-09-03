/**
 * Created by bhandr1 on 5/14/2016.
 */

(function () {

    angular
        .module('app.tapi')
        .service('TestSuiteBasicModel', TestSuiteBasicModel);

    function TestSuiteBasicModel(){
        var model = this;
  
        model.newTestSuiteModel = function () {
        	return {
        		"sql": ""
        	};
        };
        
       

    }



})();