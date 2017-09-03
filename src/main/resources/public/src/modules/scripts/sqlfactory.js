/**
 * Created by bhandr1 on 5/14/2016.
 */
(function () {
    angular.module('app.tapi').factory('SqlFactory',SqlFactory);

    SqlFactory.$inject = ["RestHelper","SqlConstant"];

    function SqlFactory(RestHelper,SqlConstant) {

        return {
        	runUpsertStatement: runUpsertStatement,
        	runDDLStatement: runDDLStatement,
        	runQuery: runQuery
        };

       
       
        
        function runUpsertStatement(data){
        	return RestHelper.post("",SqlConstant.UPSERT_URI,data);
        }
        
        function runDDLStatement(data){
        	console.log("data:" + data);
        	return RestHelper.post("",SqlConstant.DDL_URI, data);
        }
        function runQuery(data){
        	console.log("data:" + data);
        	return RestHelper.post("",SqlConstant.QUERY_URI, data);
        }
        


    }
})();
