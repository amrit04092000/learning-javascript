let salaries = {
    john : 100,
    Ann : 160,
    Pete : 130
};
let sum = 0;
for(let prop in salaries)
{
    sum+=salaries[prop];
}
alert(sum);
function multiplyNumeric(salaries){
    for(let key in salaries){
        if(typeof salaries[key]=='number'){
            salaries[key]*=2;
            alert(salaries[key]);
        }
    }
}


