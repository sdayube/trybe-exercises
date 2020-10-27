// Queen's position
let posQueenLine = 4;
let posQueenColumn = 4;

//Adversary's position
let posAdversaryLine = 6;
let posAdversaryColumn = 6;

// Can the attack happen or not
let canAttack = false;

// Checks horizontal and vertical
if (posQueenLine == posAdversaryLine || posQueenColumn == posAdversaryColumn) {
  canAttack = true;
}
  
// Checks superior quadrant
for (let supRight = 1; supRight < 8; supRight += 1) {
  let queenLine = posQueenLine + supRight;
  let queenColumn = posQueenColumn + supRight;

  if (queenLine > 8 || queenColumn > 8) {
    break;
  }
  
  if (queenLine == posAdversaryLine && queenColumn == posAdversaryColumn) {
    canAttack = true;
  }

}

console.log(canAttack);