function parent(){
	var skill = "o";

	function child(){
		var skill = "ye";
		var otherSkill = "chi";
	}

	console.log(skill);
	console.log(otherSkill); //undefined
}

parent(); //will return "o", because child element has not returned a value. 