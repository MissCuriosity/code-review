// function foo (x) {
//  switch (x) {
//         case '1':
//             console.log(111);
//             break;
//         case '2':
//             console.log(222);
//             break;
//         default:
//             console.log(333);
//             break;
//     }
// }

// function foo1() {}

// var foo = () => {};

function foo(a, b, c) {
    console.log("value of the second a:", a);
}

var bar = function (a, b, c) {
    console.log("value of the second a:", a);
};

// console.log(foo(y));

// ash bash zsh
// "lint": "files=$(git diff --cached --name-only | grep -v '.jsx$' | grep '.js$' | tr '\\n' ' ');  if [[ -n \"$files\" ]]; then eslint --config ./.eslintrc.js --quiet $files || (git reset HEAD; exit 1); else exit 0; fi",
