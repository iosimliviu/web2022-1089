const input = "Hello ${name} from the other ${surname}.";
const tokens = [
    {
        tokenName: "name",
        tokenValue: "John"
    },
    {
        tokenName: "surname",
        tokenValue: "Doe"
    }
];
const wrongInput = 55;
const wrongTokens = [
    {
        tokenName: 5,
        tokenValue: 6
    },
    {
        tokenValue: 7,
        tokenValuee: 8
    }
];

function textProcessor(input, tokens){
	if(typeof input !== "string"){
		 throw new Error("Input should be a string");
	}
	if(input.length < 6){
		 throw new Error("Input should have at least 6 characters");
	}
	tokens.forEach(token=>{
		 if(typeof token.tokenName !== "string" || typeof token.tokenValue !== "string"){
			  throw new Error("Invalid array format");
		 }
	});
	if(!input.includes("$")){
		 return input;
	} else {
		 tokens.forEach(token=>{
			  input = input.replace("${"+token.tokenName+"}",token.tokenValue);
		 })
		 return input;
	}
}

console.log(textProcessor(input, tokens))