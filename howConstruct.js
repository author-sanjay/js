const countConstruct = (target, words, memo = {}) => {
  if (target in memo) return memo[target];
  if (target == "") return 1;

  let totalsum = 0;
  for (let word of words) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const result = countConstruct(suffix, words, memo);

      totalsum = totalsum + result;
    }
  }

  memo[target] = totalsum;
  return totalsum;
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(
  countConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    [
      "e",
      "eeeeee",
      "eeeeeeeeeeeeeee",
      "eeeeeeeeeeeeeeeeeeeeee",
      "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ]
  )
);
