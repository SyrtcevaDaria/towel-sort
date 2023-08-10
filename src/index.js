module.exports = function towelSort (matrix) {
  if (matrix===undefined || matrix.length===0){
    return [];
  }
  let array = [];
  for (let i=0;i<matrix.length;i++){
    let arrHelp = [...matrix[i]];
    if(i%2===0){
      arrHelp.sort((a,b)=>{a-b});
      array.push(...arrHelp);
    }
    else{
      arrHelp.sort();
      arrHelp.reverse();
      array.push(...arrHelp);
    }
  }
  return array;
}
