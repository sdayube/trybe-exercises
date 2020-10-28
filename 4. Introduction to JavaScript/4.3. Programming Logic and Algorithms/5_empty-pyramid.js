let n = 23;

if (n > 1) {

  //Line counter
  for (let line = 1; line <= (Math.ceil(n/2)); line += 1) {
    
    let render = "";

    //For structure resulting in 3, 2, 1, 0. I used it to fill the blank spaces before the asteriks.
    for (let leftSpace = Math.floor(n/2); leftSpace >= line; leftSpace -= 1) {
      render = render + " ";
    }

    //Adds pyramid left side
    render = render + "*";

    //Adds inner spaces of pyramid
    //Separates first and last line 
    if (line != 1 && line <= Math.floor(n/2)) {

      //Adds for structure for internal spaces (adapted from exercise 4)
      for (let internalSpace = 1; internalSpace < line; internalSpace += 1) {
        if (internalSpace == 1) {
          render = render + " ";
        } else {
          render = render + "  ";
        }
      }

      //adds pyramid right side
      render = render + "*";
    }

    //adds pyramid floor
    if (line > Math.floor(n/2)) {
      for (let floor = 1; floor < n; floor += 1) {
        render = render + "*";
      }
    }

    console.log(render);
  }
}