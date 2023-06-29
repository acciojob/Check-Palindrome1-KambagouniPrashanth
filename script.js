// complete the given function

function palindrome(str){
	let result=str.toLowerCase()
    let new_arr=str.split("")
    // console.log(new_arr)
    new_arr.reverse();
    // console.log(new_arr)
    let s=new_arr.join("")
    let result2=s.toLowerCase()

    // console.log(s)
     return result==result2


}
module.exports = palindrome
