//check if a string is "" or not

function checkstring(str1, str2){
	return new Promise((resolve, reject) => {
		let lowercasestr1 = str1.toLowerCase();
		let arr1 = lowercasestr1.split("");
		arr1.sort();
		let newstr1 = arr1.join("");

		let lowercasestr2 = str2.toLowerCase();
		let arr2 = lowercasestr2.split("");
		arr2.sort();
		let newstr2 = arr2.join("");

		if(newstr1 === newstr2){
			resolve("success");
		}else{
			reject("failure");
		}
	})
}

checkstring("openai", "Aiopen").then(()=>{
	console.log("success");
}).catch(
	()=>{
		console.log("failure");
	}
)
