let n = 5;

if (n > 1) {
  let render = ""
  for (let lines = 1; lines <= n; lines += 1) {
    render = render + "*"
    console.log(render)
  }
}
