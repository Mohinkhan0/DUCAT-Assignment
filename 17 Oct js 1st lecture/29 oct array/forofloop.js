let arr=[10,20,30,20,50];
for(var val of arr)
{
    console.log(val);
}

arr.shift();
console.log(arr);


arr.unshift(1000);
console.log(arr);

arr.push("mohin");
console.log(arr);

arr.push("khan");
console.log(arr);

arr.pop();
console.log(arr);