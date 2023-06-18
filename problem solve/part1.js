function calc(age){
 const days=365;
 const converted=days* age;
 return converted;

}
const age1=calc(68);
const age2=calc(34);
const age3= calc(23);
// console.log(age1,age2,age3);

function addition(num,num1){
    const total =num + num1;
    return total;
}
const add1=addition(3,2);
const add2= addition(-3,-6);
const add3 = addition(7, 3)
// console.log(add1,add2,add3);

function string(a){
    const add="something";
    const result =add +" " + a;
    return result;
}
const string1 = string("is better than nothing");
const string2 = string("Bob Jane");
const string3 = string("something");
// console.log(string1,string2,string3);


