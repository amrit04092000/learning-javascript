/*let num= prompt("enter number","");
if(num>0)
{
    alert("1");
}
else if(num<0)
{
    alert('-1');
}
else
{
    alert('0');
}
let a= prompt("enter 'a' ","");
let b= prompt("enter'b'","");
let result=(a + b < 4)?Below:Over*/
let login= prompt("enter user ","");
let message;
message=(login=='employee')?'welcome':(login=='manager')?'Greeting':(login=='')?'no user login':''
alert(message)