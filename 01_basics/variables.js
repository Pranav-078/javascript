const accId =123                //can't change valve once declared
let accEmail="pranav@gmail.com" // This one is use to declare variable rather than var why?
var accCity= "Belgaum"          //usually never used
accType ="Saving"               //works but not a good practice

let accBalance                  //give undefined

console.log([accId,accEmail,accCity,accType,accBalance]);

//why ans 
/*
let is used instead of var because let is safer. It stays only inside the block where it is 
declared, so it avoids accidental bugs. var is old and can leak outside the block. 
That’s why modern JavaScript prefers let.

CHATGPT
let creates a block-scoped variable (safer, fewer bugs), while var is function-scoped 
(older, can cause accidental overwrites). So modern JavaScript uses let instead of var.
*/
