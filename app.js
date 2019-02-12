var fs = require('fs');

var iconv = require('iconv-lite');

var data = fs.readFileSync('./REM-D');
// var buf = iconv.encode("", 'gb2312');
var gbkBytes = iconv.decode(data,'gb2312');
// console.log(gbkBytes);
let arr = gbkBytes.split('厦门分行');
let map = {};
for(let i = 0;i < arr.length;i++){
  let key = arr[i].slice(120,180);
  
  if(!map[key]){
    map[key] = [];
    console.log(key);
  }
  map[key].push(arr[i]);
}

let arr2 = [];

for (const key in map) {
  if (map.hasOwnProperty(key)) {
    const arr = map[key];
    arr.forEach(element => {
      arr2.push(element);
    });
  }
}
// console.log(arr2.join('厦门分行'));
var buf = iconv.encode(arr2.join('厦门分行'), 'gb2312');
fs.writeFileSync('./REM-D-F',buf);