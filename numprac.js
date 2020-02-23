function readNumber(){
    let num;
    while(!isFinite(num)){
        num= prompt("Enter a number ",0);
    };
    if(num==null||num==' '){
        return null;
    }
    return +num;
}
alert(`read: ${readNumber()}`);