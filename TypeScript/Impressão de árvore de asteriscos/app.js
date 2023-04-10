"use strict";
function printTree(n) {
    let spaces = n - 1;
    let stars = 1;
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(spaces) + "*".repeat(stars));
        spaces--;
        stars += 2;
    }
}
printTree(10); 
