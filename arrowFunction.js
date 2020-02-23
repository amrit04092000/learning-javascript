let ask = (question,yes,no)=>{
    if (confirm(question)){
        return yes();
    }
    else {
        no();
    }
};
ask(
    "Do you agree?",
    ()=>{ alert("You agreed."); },
    ()=>{ alert("You canceled the execution."); }
  );
