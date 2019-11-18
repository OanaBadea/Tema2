function addTokens(input, tokens){
        //1

        if(typeof input!=='string')
        {
            throw new TypeError('Invalid input');
        }
    
    
        //2
        if(input.length<6)
    	{
    	    throw new Error('Input should have at least 6 characters');
    	}
    	
    	//3
    	for( var i=0;i<tokens.length;i++)
    	{
    	    if(typeof tokens[i].tokenName!=="string")
    	    {
    	        throw ("Invalid array format");
    	    }
    	}
    	
    	
    	//4+5
    	if(input.includes("..."))
    	{
    	    for(var i=0;i<tokens.length;i++)
    	    {
    	        input=input.replace("...","${"+tokens[i].tokenName+"}");
    	        return input;
    	    }
    	}
    	else return input;
   

}

const app = {
    addTokens: addTokens
}

module.exports = app;