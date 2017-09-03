/**
 * Created by bhandr1 on 5/14/2016.
 */

(function () {

    angular
        .module('app.tapi')
        .service('SqlConstant', SqlConstant);
    
    SqlConstant.$inject = [];
    
    function SqlConstant(){
        var constant = this;
        
        
        constant.UPSERT_URI="/api/sql/upsert";
        constant.DDL_URI="/api/sql/ddl";
        constant.QUERY_URI="/api/sql/query";
        
    }
    
})();
    
    