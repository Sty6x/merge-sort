#!usr/bin/node

function sort(a, b) {
  let c = [];
  while (a.length !== 0 && b.length !== 0) {
    if (a[0] <= b[0]) {
      c.push(a[0]);
      a.shift();
    } else {
      c.push(b[0]);
      b.shift()
    }
  }
  console.log(c)
  while (a.length !== 0) {
    c.push(a[0])
    a.shift();
  }
  while (b.length !== 0) {
    c.push(b[0])
    b.shift();
  }
  console.log(c)
  return c
}

function divide(a, b, arr) {
  let c = []
  for (; a < b; a++) {
    c.push(arr[a])
  }
  for (let i = 0; i < c.length; i++) {
    arr.shift()
  }
  if (c.length > 1) {
    let l = 0;
    let r = c.length
    let m = Math.round((l + r) / 2);
    return divide(l, m, c)
  } else {
    return c
  }
}

let arr = [41, 10, 5, 6]

let l = 0;
let r = arr.length
let m = Math.round((l + r) / 2);

let newArr = divide(l, m, arr)
console.log(newArr)
