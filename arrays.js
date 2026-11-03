//array
let fruits=["apple","orange"];
console.log(fruits);
//array methods
fruits.push("pinapple");
fruits.pop();
fruits.unshift("apple");
fruits.shift();
console.log(fruits);
//console.log(fruits.indexof("apple"));
console.log(fruits.indexOf("apple"));
console.log(fruits.includes("apple"));
console.log(fruits.slice(1,2));
console.log(fruits);

let res=fruits.splice(1,1,"graphs");
console.log(res);
console.log(fruits);

let veg=["carrot","onion"];
console.log(fruits.concat(veg));
console.log(fruits.join(","));
console.log(fruits.join("-"));
console.log(fruits.join("/"));
console.log(fruits.join("="));

veg.forEach(function(vegs) {
    console.log(vegs);
    
})

veg.filter(function(vegs){

    console.log(vegs=="onion");
    console.log("hello");
    
})
for(i of fruits){
    console.log(i);
}
for(i in fruits){
    console.log(fruits[i]);
}

// two dimensional

let arr=[[1,2,3],
        [4,5,6],
        [7,8,9]]
    console.log(arr);
    console.log(arr[1][2]);



//console.log(fruits.lastindexOf());





