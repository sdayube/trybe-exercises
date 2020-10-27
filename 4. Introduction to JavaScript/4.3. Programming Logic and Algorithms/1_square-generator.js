let n = 3;

if (n > 1) {
  for (let lines = 1; lines <= n; lines += 1) {
    let render = ""
    for (let columns = 1; columns <= n;  columns += 1) {
      render = render + "*";
    }
    console.log(render)
  }
}
