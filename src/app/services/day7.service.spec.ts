import { Day7Service } from "./day7.service";

describe('7', () => {
  let service:any;
  let input:string[]
  beforeEach(() => { service = new Day7Service();
    input = ["16,1,2,0,4,2,7,1,2,14"]
  });

  it(`part 1`, () =>{
    let result = service.Part1(input);  
    expect(result).toBe("37");
  });
  
//   it(`part 2`, () => {
//     let result =  service.Part2(input, 256);  
//     expect(result).toBe("26984457539");
//  });
});


