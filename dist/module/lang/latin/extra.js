import{regex,replace,collapse}from"../../common.js";import encoder_advanced from"./advanced.js";const soundex_b=regex("p"),soundex_s=regex("z"),soundex_k=regex("[cgq]"),soundex_m=regex("n"),soundex_t=regex("d"),soundex_f=regex("[vw]"),regex_vowel=regex("[aeiouy]"),regex_pairs_extra=[soundex_b,"b",soundex_s,"s",soundex_k,"k",soundex_m,"m",soundex_t,"t",soundex_f,"f",regex_vowel,""];export default function(a){if(!a)return a;if(a=encoder_advanced(a,!0),1<a.length){a=a.split(" ");for(let b=0;b<a.length;b++){const c=a[b];1<c.length&&(a[b]=c[0]+replace(c.substring(1),regex_pairs_extra))}a=a.join(" "),a=collapse(a)}return a}