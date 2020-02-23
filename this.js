let user ={
    name: "JOHN"
    ,age: 38,
    hi(){
        alert(this.name);
    },
    bye(){
        alert('bye');
    }
}
user.name=="JOHN"?user.hi():user.bye();