 /// <reference path="C:\Users\Dheeraj_Thodupunuri\Desktop\Angular custom service\Script.js" />
app.factory("StringService" , function() {
return {
processString : function(input) {
if(!input) {
	
	return input;
}
var output = "";
for(let i=0; i<input.length ; i++) {
	
	if(i>0 && input[i] == input[i].toUpperCase()) {
	 
		output = output + " ";	
}
		output = output + input[i];
}
		return output;
}
}
});