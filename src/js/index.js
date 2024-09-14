'use strict'

const differentVariables = () => {
    for (let i = 0; i < 1; i++) {
        //temporal dead zone starts for let & const;!not for var!
        var isVar = 'var' //no temporal dead zone;hoisting to top of function;initial as undefined
        let isLet = 'let' //end of temporal dead zone;initialized
        const isConst = 'const' //end of temporal dead zone;initialized
        console.log(isVar) // function scope , works well;
        console.log(isLet) // block scope , works well;
        console.log(isConst) // block scope , works well;
    }
    console.log(isVar) // visible outside of loop,function scope,works well anyway
    console.log(isLet) // visible only inside the loop,block scope,reference error
    console.log(isConst) // visible only inside the loop,block scope,reference error
}
differentVariables()

console.log(isVar) // not visible out of function;function scope;reference error
