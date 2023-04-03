function areBracketsBalanced(expression) {
    let stack = [];

    for (let i = 0; i < expression.length; i++) {
        let x = expression[i];
        if (x == '(' || x == '[' || x == '{') {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;


        }
    }
    return (stack.length == 0);

}

let expression = "([{}])";

if (areBracketsBalanced(expression))
    console.log("Balanced");
else
    console.log("UnBalanced");

