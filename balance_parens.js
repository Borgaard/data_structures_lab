/* 
  Today, we learned about stacks and queues. You'll have to use one of these data structures to answer the following question:

  Create a function that will return true if a string contains balanced parentheses. 

  sample input: balanceParens("(())")
  sample output: true

  sample input: balanceParens("()()")
  sample output: true

  sample input: balanceParens("()(")
  sample output: false

  (What's the relevance? Imagine how an interpreter knows that this is a syntax error: function() {)
*/

var balanceParens = function(string) {
  var result = [],
      pairs  = {
        "(": ")"
      },
      popped = "";
  for(var i = 0; i < string.length; i++) {
    
    if (string[i] !== ")") {
      result.push(string[i]);
    } else {
      popped = result.pop() //popped already defined error in repl.it?

      if (pairs[popped] !== string[i]) {
        return "Unbalanced";
      }
    }
  }
  //double bang "[]" is either(?) -> true -> false
  return !!result; //if result is null, force either true or false};
}
