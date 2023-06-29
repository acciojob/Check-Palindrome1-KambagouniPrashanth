// complete the given function

function palindrome(str){
	return str == str.split("").reverse().join(""); let new_arr=str.split("")
    // console.log(new_arr)
    new_arr.reverse();
    // console.log(new_arr)
    let s=new_arr.join("")

    // console.log(s)
    // console.log(str==s)

	return str==s;

}
module.exports = palindrome
