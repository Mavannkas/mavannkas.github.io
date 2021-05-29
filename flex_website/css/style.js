const transpose2=a=>{
	let tempArr=[];
	for(let i = 0 ; i<9 ; i+=3){
    let convArr=a.slice(i,i+3);
		tempArr[i]= tempArr[i+1]= tempArr[i+2]=[];
    for(let j = 0 ; j < 3 ; j++){
        tempArr[i]=tempArr[i].concat(...(convArr[j].slice(0,3)));
        tempArr[i+1]=tempArr[i+1].concat(...(convArr[j].slice(3,6)));
        tempArr[i+2]=tempArr[i+2].concat(...(convArr[j].slice(6,9)));
    }}
	return tempArr;
}

const transpose=a=>{
  const newArr=[];
  for(let i = 0; i<9 ; i++){
      newArr[i]=[];
      for(let j = 0; j<9 ; j++){
        newArr[i][j]=a[j][i];
    }
  }
  return newArr;
};

const process=a=>{
        for(const array of a){
        const tempArr=array.reduce((arr, val)=>{arr[val]=1; return arr;},[])
        if(tempArr.length!==10 || tempArr.slice(1).includes(undefined)){
          return false;
        }else{
          return true;
        }
      }
}

const validSolution = board => {
  if(!board.toString().includes(0)){
    const transArr=transpose(board); 
    if(process(transArr) && process(board)){
      return true;
    }
    
  }
  return false;
}