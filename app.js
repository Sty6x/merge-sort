#!usr/bin/node

// function sort(a,b){
//   let c = [];
//   while(a.length !== 0 && b.length !== 0){
//     if(a[0] <= b[0]){
//       c.push(a[0]);
//       a.shift();
//     }else{
//       c.push(b[0]);
//       b.shift()
//     }
//  }
//   console.log(c)
//   while(a.length !== 0){
//     c.push(a[0])
//     a.shift();
//   }
//   while(b.length !== 0){
//     c.push(b[0])
//     b.shift();
//   }
//   console.log(c)
//   return c
// }

function divide(a,b,arr){
  let c =[]

  // return c if a is empty
  for(; a< b;a++){
    c.push(arr[a])
  }
  // for(let i = 0;i < c.length ; i++){
  //   arr.shift()
  //   }
  return c
}

let arr = [41,10,5,6,45,2,14,0]
console.log(arr)

let l = 0;
let r = arr.length 
let m =  Math.round((l+r)/2);

let newArr = divide(l,m,arr)
console.log(newArr)

let newR = newArr.length
let newM = Math.round((l+newR)/2)

let newNewArr = divide(l,newM,newArr)

console.log(newNewArr)

function mergeSort(arr){
  let l = 0;
  let r = arr.length;
  if(l<r){
    let m =  Math.round((l+r)/2);
  }
}
