var a=prompt('nhap chuoi');

function isPalindrome(){
if(toString(a[0]) === toString(a.length-1)){
    return true;
} else {
    return false;
}
}
alert(isPalindrome());


for(var i=0,j=1;i<j;i++,j++)
if(toString(a[i]) === toString(a.length-j)){
    if(a[i]===0){
        continue;
    }else {
    alert('a');
    break;
    }
} else {
    alert('b');
    break;
}
