
console.log("WELCOME TO TODO");
import inquirer from "inquirer";
import { todo } from "node:test";
let todos: string []=[]
let loop = true;
while(loop){
    const answer :{
        TODO: string,
        addmore: boolean
    }= await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do want to add in your Todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want ot add more",
            default: false
    }        
           
    ])
    const {TODO, addmore} = answer;
    console.log(answer);
    loop = addmore
    if(TODO){
        todos.push(TODO)
    }else{
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0){
    console.log("Your Todo list :\n");
    todos.forEach(todo => {
        console.log(todo)
    })

}else {
    console.log("No TODOS Found");
}