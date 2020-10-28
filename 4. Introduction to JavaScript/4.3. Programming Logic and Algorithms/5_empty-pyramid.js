let n = 11;

if (n > 1) {

  //Line counter
  for (let line = 1; line <= (Math.ceil(n/2)); line += 1) {
    
    let render = "";

    //For structure resulting in 3, 2, 1, 0. I used it to fill the blank spaces before the asteriks.
    for (let leftSpace = Math.floor(n/2); leftSpace >= line; leftSpace -= 1) {
      render = render + "-";
    }

    //Adds pyramid left side
    render = render + "*"

    //Adds inner spaces of pyramid
    //
    if (line != 1 && line <= Math.floor(n/2)) {
      render = render + "-"
    }

    console.log(render);
  }

}