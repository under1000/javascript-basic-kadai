const today = new Date();

const year = today.getFullYear();
const moth = today.getMonth()+1;
const date = today.getDate();

console.log(year + '年' + moth + '月' + date + '日');