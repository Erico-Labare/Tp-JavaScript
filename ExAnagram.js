function isAnagram(str1, str2) {
    const compare = str => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    
    return compare(str1) === compare(str2);
}

console.log(isAnagram("dog", "god"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("anagram", "nag a ram"));
console.log(isAnagram("Test", "tset"));
console.log(isAnagram("Test", "csCC"));