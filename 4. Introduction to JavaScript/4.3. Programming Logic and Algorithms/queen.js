// Queen's position
let posQueenLine = 3;
let posQueenColumn = 3;

//Adversary's position
let posAdversaryLine = 5;
let posAdversaryColumn = 5;

// Can the attack happen or not
let canAttack = false;

// Checks horizontal and vertical
if (posQueenLine == posAdversaryLine || posQueenColumn == posAdversaryColumn) {
  canAttack = true;
}
  
// Checks superior right quadrant
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

// Checks superior left quadrant
for (let supLeft = 1; supLeft < 8; supLeft += 1) {
  let queenLine = posQueenLine + supLeft;
  let queenColumn = posQueenColumn - supLeft;

  if (queenLine > 8 || queenColumn < 1) {
    break;
  }
  
  if (queenLine == posAdversaryLine && queenColumn == posAdversaryColumn) {
    canAttack = true;
  }

}

// Checks inferior left quadrant
for (let infLeft = 1; infLeft < 8; infLeft += 1) {
  let queenLine = posQueenLine - infLeft;
  let queenColumn = posQueenColumn - infLeft;

  if (queenLine < 1 || queenColumn < 1) {
    break;
  }
  
  if (queenLine == posAdversaryLine && queenColumn == posAdversaryColumn) {
    canAttack = true;
  }

}

// Checks inferior right quadrant
for (let infRight = 1; infRight < 8; infRight += 1) {
  let queenLine = posQueenLine - infRight;
  let queenColumn = posQueenColumn + infRight;

  if (queenLine < 1 || queenColumn > 8) {
    break;
  }
  
  if (queenLine == posAdversaryLine && queenColumn == posAdversaryColumn) {
    canAttack = true;
  }

}

console.log(canAttack);