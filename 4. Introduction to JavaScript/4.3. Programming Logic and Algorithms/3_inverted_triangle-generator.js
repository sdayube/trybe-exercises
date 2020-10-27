let n = 5;

if (n > 1) {
  
  //for structure for iteration of n
  for (let lines = 1; lines <= n; lines += 1) {
    
    let render = "";
    
    //for structure for printing spaces
    for (let spaces = (n - lines); spaces > 0; spaces -= 1) {
      render = render + " ";
    }
        
    //for structure for printing asterisks
    for (let asterisks = 1; asterisks <= lines; asterisks += 1) {
      render = render + "*";
    }
  
    console.log(render);
  }
}
