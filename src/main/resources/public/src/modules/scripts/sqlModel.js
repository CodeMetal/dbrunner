/**
 * Created by bhandr1 on 5/14/2016.
 */

(function () {

    angular
        .module('app.tapi')
        .service('SqlModel', SqlModel);

    function SqlModel(){
        var model = this;
       
        
        model.newSqlModel = function () {
        	return {
        		"sql": "" ,
        		"queryResult": "",
        		"resultMessage": ""
        	};
        };
        model.newSqlResult = function () {
        	return {
        		       		
        	};
        };

    }



})();