function isValid(s) {
    let stack = [];
    let top = -1;

    for (let char of s) {
        if (char === "(" || char === "[" || char === "{") {
            top = top + 1;
            stack[top] = char;
        } else if (char === ")" || char === "]" || char === "}") {
            if (top === -1) {
                return false; 
            }

            let lastOpen = stack[top];
            top = top - 1;

            if (char === ")" && lastOpen !== "(") {
                return false;
            }
            if (char === "]" && lastOpen !== "[") {
                return false;
            }
            if (char === "}" && lastOpen !== "{") {
                return false;
            }
        }
    }

    return top === -1; 
}

// ---------- Test Cases ----------
console.log(isValid("()"));     
console.log(isValid("()[]{}"));  
console.log(isValid("(]"));      
console.log(isValid("([)]")); 
console.log(isValid("{[]}"));
