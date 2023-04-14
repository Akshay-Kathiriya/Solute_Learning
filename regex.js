// let reg = new RegExp("pattern","flags");
// console.log(reg);


// console.log('I love Html'.replace(/HTML/i,'$& and javascript.'))

// console.log('I love Html'.replace(/HTML/i,'$` and javascript.'))

// console.log('I love Html'.replace(/HTML/i,"$' and javascript."))

// console.log((/LOvE/i).test('I love javascript'));

// const str = "+7(903)-123-45-67";
let regex = /\d/g;
// console.log(str.match(regex).join(''));

// console.log("I love HTML5!".match(/\s\w\w\w\w\d/)); 

// console.log(str.replace(/\D/g,""));
// let c = null
// console.log(Object.prototype.toString.call(c))

// let str1 = "A ბ ㄱ";

// console.log(str1.match(/\p{L}/gu));
// console.log(str1.match(/\p{L}/g));

// let str2 = `Winnie: 1
// Piglet: 2
// Eeyore: 3`;

// console.log( str2.match(/\d$/gm) ); // 1,2,3

// console.log( "Hello, Java!".match(/\bJava\b/));

// let str3 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let regexp = /<a href=".*" class="doc">/;

// Whoops! Two links in one match!
// console.log( str3.match(regexp) );

// 1. Write a JavaScript program to test the first character of a string is uppercase or not.

let str = 'adfs';
str = 'Abs'
let regexp = /^[A-Z].*/

// console.log(str.match(regexp));

// 2. Write a JavaScript program to check a credit card number.
str = '33333333333333'
regex = /\d{15,15}/

// console.log(str.match(regex));

let match = 'ac'.match(/a(z)?(c)?/)

// console.log( match ); 
function is_creditCard(str)
{
 regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    console.log(Array.from(str).length)
        if (regexp.test(str))
          {
            return true;
          }
        else
          {
            return false;
          }
}
// console.log(is_creditCard("523456789123121"));

function word_count(str){
    
    str= str.replace(/(^\s*)|(\s*$)/gi,"")
    console.log(str)
    regexp = /^\w+(\s+)\w$/g;
    
    const match = str.match(regexp);
    console.log(match);

}

// word_count("The quick brown fox jumps over the lazy dog.")

function vowels(str){
    str = str.match(/([aeiou])+/gi);
    console.log(str?.length);
}
// vowels('United States');

function vowel_count(str) {

    return str.match(/[aeiou]/gi).length;
  
  }
  
//   console.log(vowel_count('The quick brown fox jumps over the lazy dog'));

