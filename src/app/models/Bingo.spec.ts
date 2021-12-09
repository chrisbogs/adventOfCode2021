import { Bingo } from "./Bingo";

describe('Bingo', () => {
  
  it(`marked row`, () => {
    let bingo = new Bingo(
        [
            22, 59, 7, 10, 6,
            33, 36, 96, 55, 23,
            13, 85, 18, 29, 28,
            75, 46, 83, 73, 58,
            34, 40, 87, 56, 98
        ]
    );
    bingo.GetBoard()[0][0].Marked = true;
    bingo.GetBoard()[1][0].Marked = true;
    bingo.GetBoard()[2][0].Marked = true;
    bingo.GetBoard()[3][0].Marked = true;
    bingo.GetBoard()[4][0].Marked = true;
    // console.log(bingo.toString());
    
    expect(bingo.hasWon()).toBeTrue();
  });
  
  it(`marked column`, () => {
    let bingo = new Bingo(
        [
            22, 59, 7, 10, 6,
            33, 36, 96, 55, 23,
            13, 85, 18, 29, 28,
            75, 46, 83, 73, 58,
            34, 40, 87, 56, 98
        ]
    );
    bingo.GetBoard()[0][0].Marked = true;
    bingo.GetBoard()[0][1].Marked = true;
    bingo.GetBoard()[0][2].Marked = true;
    bingo.GetBoard()[0][3].Marked = true;
    bingo.GetBoard()[0][4].Marked = true;
    
    expect(bingo.hasWon()).toBeTrue();
  });
  

});