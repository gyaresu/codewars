function validBraces(braces){
    var pairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    var stack = [];

    for (var i = 0; i < braces.length; ++i)
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{')
            stack.push(braces[i]);
        else if (stack[stack.length-1] === pairs[braces[i]])
            stack.pop();
        else
            return false; // catchall

    return stack.length === 0;

}