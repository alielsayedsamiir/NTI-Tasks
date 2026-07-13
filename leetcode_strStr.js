function strStr(haystack, needle) {
    let haystackLength = haystack.length;
    let needleLength = needle.length;

    if (needleLength === 0) {
        return 0;
    }

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let matched = true;

        for (let j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                matched = false;
                break;
            }
        }

        if (matched) {
            return i;
        }
    }

    return -1;
}

console.log(strStr("sadbutsad", "sad")); 
console.log(strStr("leetcode", "leeto"));  
console.log(strStr("hello", "ll"));      
console.log(strStr("a", "a"));   
