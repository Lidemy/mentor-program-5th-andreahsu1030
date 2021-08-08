/* eslint-disable */
function capitalize(str) {
  var ans = ''
  var firstWord = str.charCodeAt(0) 
    if (firstWord >= 65 && firstWord <= 91){
      firstWord+=32
      ans += String.fromCharCode(firstWord)
    }else if (firstWord <= 123 && firstWord >= 97){
      firstWord-=32
      ans += String.fromCharCode(firstWord)
    }else{
      return str
    }
  for(var i=1; i<str.length;i++){
  ans+=  str[i]
  }
return ans
}
console.log(capitalize('hello'));
