 //Pass in DOM element paramater to establish if the value is blank
 //issues alert if the value is blank.
 //code obtained from Open University Module TT284-16J Block 2 Part 3 The Client Side.

 function isNotEmptyValue(value, name)
  {
    if (value == null || value == "")
    {
      alert("Error " + name + " must be given a value");
      return false;
    }
    else return true;
  }


  	//match against a regular expression - the information in here can be adapted
  	//to suit the need of the expression requirements.
   function showMatches()
  {
    var pattern = /.h./g;            //'g' (global) means find all matches.
    var string = "hi there how are you today harold";
    var matches = new Array(string.match(pattern));
    var matches1 = string.match(pattern);
    document.write(matches1);
  }

  //Function to remove blank spaces from a string should it be the case that the 
  //entry has been made as a space, or the entry has trailing spaces

	function trim(str)
    {
      return str.replace(/^\s+|\s+$/g, '');
    }


	//provides the length of the  string is between 2 values entered as parameters
     function checkLength(value, min, max)
    {
      if (value.length >= min && value.length <= max) 
      {
        return true;
      }
      else
      {
        alert("Please enter between " +min+ " and " +max+ " characters");
        return false;
      }
    }