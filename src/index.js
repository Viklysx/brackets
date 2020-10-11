module.exports = function check(str, bracketsConfig) {
  let flag = true;
  while (flag) {
    let testStr = str.length;
    bracketsConfig.forEach(element => {
      let couple = element[0] + element[1];
      str = str.replace(couple, '');   
    });
    flag = testStr === str.length ? false : true;
  }
  return (str.length === 0) ? true : false;
}
