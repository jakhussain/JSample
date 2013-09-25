var SILLY = (function(modules){

	modules.DoIt = function(resultObject){
		resultObject.prepend(Date() + '<br/>');
	};

return modules;
}(SILLY || {}));