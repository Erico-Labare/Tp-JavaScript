function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
    
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("dog", "god"));
console.log(isAnagram("hello", "world"));
console.log(isAnagram("anagram", "nag a ram"));
console.log(isAnagram("Test", "tset"));