import { Day6Service } from "./day6.service";

describe('Day5Service', () => {
  let service:any;
  let input:string[]
  beforeEach(() => { service = new Day6Service();
    input = ["3,4,3,1,2" ]
  });

  it(`part 1`, function() {
    let result = service.Part1(input, 18);  
    expect(result).toBe("26");
    });
    
  it(`part 1`, function() {
    let result = service.Part1(input, 80);  
    expect(result).toBe("5934");
  });
  
  it(`part 2`, () => {
    let result =  service.Part2(input, 256);  
    expect(result).toBe("26984457539");
 });
});


