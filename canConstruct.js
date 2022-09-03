const canconstruct = (target, words, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") return true;

  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      console.log(suffix);
      if (canconstruct(suffix, words, memo) === true) {
        memo[suffix] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canconstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
// console.log(canconstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",["e", "eeeeee", "eeeeeeeeeeeeeee","eeeeeeeeeeeeeeeeeeeeee","eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"]))
