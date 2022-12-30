// In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// * With input 'a'
// * Your function should return: ['a']
// * With input 'ab'
// * Your function should return ['ab', 'ba']
// * With input 'aabb'
// * Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// The order of the permutations doesn't matter.

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function genPerms(chars, left, right, set) {
  if (left === right) {
    set.add(chars.join(""));
  } else {
    for (let i = left; i <= right; i++) {
      swap(chars, left, i);
      genPerms(chars, left + 1, right, set);
      swap(chars, left, i);
    }
  }
}

function permutations(string) {
  const N = string.length;
  const chars = string.split("");
  const set = new Set();
  genPerms(chars, 0, N - 1, set);
  return Array.from(set);
}
