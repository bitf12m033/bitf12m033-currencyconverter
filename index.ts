#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"

const sleep = () => {
    return new Promise((res)=> {
        setTimeout(res,2000)
    })
}
async function welcome() {
    let title = chalkAnimation.rainbow('Welcome to Currency Converter');
    await sleep();
    title.stop();
}
await welcome();

async function askQuestion() {
    const answer = await inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type:"number",
            name:"amount",
            message:"Enter your Amount (PKR)"
        },
        {
            type:"list",
            name:"currency",
            message:"Choose Currency \n",
            choices:[
                {
                    name:"USD",
                    value:250
                },
                {
                    name:"AED",
                    value:60
                },
                {
                    name:"INR",
                    value:2.5
                }
            ]
        }
    ])
    
    const {amount , currency} = answer;
   console.log(amount / currency);
   

}

async function restart() {
    do {
        
        await askQuestion();
        var inp = await inquirer.prompt([
            {
                type:"input",
                name:"choice",
                message:"Do you want to start again? enter y/n"
            }
        ])
    }while(inp.choice === 'y');
}
restart();