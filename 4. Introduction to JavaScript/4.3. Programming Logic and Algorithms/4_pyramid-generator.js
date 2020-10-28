let n = 7;

if (n > 1) {

  //line counter and renderer
  for (let line = 1; line <= (Math.ceil(n/2)); line += 1) {
    
    let render = "";

    // for structure resulting in 3, 2, 1, 0
    for (let leftSpace = Math.floor(n/2); leftSpace >= line; leftSpace -= 1) {
      render = render + " ";
    }

  
    // for structure starting in 1 and adding 2 for every line
    for (let pyramid = 1; pyramid <= line; pyramid += 1){
      if (pyramid == 1 && n % 2 != 0) {
        render = render + "*"
      } else {
        render = render + "**"
      }

      // console.log(line);
    }
    

    console.log(render);
  }

}