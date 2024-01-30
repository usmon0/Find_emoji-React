export function uniqalizeStr(str) {
 return [...new Set(str.split(' '))].join(" ")
}