let arr=[10,90,100,40,50,80,5,70];
for(var i=0; i<arr.length; i++)
{
    for(j=i+1 ;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
        var temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp;
        }
    }
}
console.log(arr);


// output 1

// [
//     100, 90, 80, 70,
//      50, 40, 10,  5
//   ]

// output 2

// [
//     5, 10, 40,  50,
//    70, 80, 90, 100
//  ]