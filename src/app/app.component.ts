import { Component } from '@angular/core';
import { Day1Service } from './services/day1.service';
import { Day2Service } from './services/day2.service';
import { Day3Service } from './services/day3.service';
import { PuzzleInput } from './utils/PuzzleInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Day1Service,
    Day2Service,
    Day3Service,
    
    PuzzleInput]
})
export class AppComponent {
  title = 'advent Of Code 2021';
  day1Part1: string = "";
  day1Part2: string = "";
  
  day2Part1: string = "";
  day2Part2: string = "";
  
  day3Part1: string = "";
  day3Part2: string = "";

  day4Part1: string = "";
  day4Part2: string = "";

  day5Part1: string = "";
  day5Part2: string = "";

  day6Part1: string = "";
  day6Part2: string = "";

  day7Part1: string = "";
  day7Part2: string = "";

  day8Part1: string = "";
  day8Part2: string = "";

  day9Part1: string = "";
  day9Part2: string = "";

  day10Part1: string = "";
  day10Part2: string = "";

  day11Part1: string = "";
  day11Part2: string = "";

  day12Part1: string = "";
  day12Part2: string = "";

  day13Part1: string = "";
  day13Part2: string = "";

  day14Part1: string = "";
  day14Part2: string = "";

  day15Part1: string = "";
  day15Part2: string = "";

  day16Part1: string = "";
  day16Part2: string = "";

  day17Part1: string = "";
  day17Part2: string = "";

  day18Part1: string = "";
  day18Part2: string = "";

  day19Part1: string = "";
  day19Part2: string = "";

  day20Part1: string = "";
  day20Part2: string = "";

  day21Part1: string = "";
  day21Part2: string = "";

  day22Part1: string = "";
  day22Part2: string = "";

  day23Part1: string = "";
  day23Part2: string = "";

  day24Part1: string = "";
  day24Part2: string = "";

  day25Part1: string = "";
  day25Part2: string = "";
  
  constructor(
    private day1Service: Day1Service,
    private day2Service: Day2Service,
    private day3Service: Day3Service,
    private inputReader:PuzzleInput,
  ) 
  {  }

  ngOnInit(){
    this.inputReader.readInputIntoLines(2021, 1)
      .subscribe((data) => {
        this.day1Part1 = this.day1Service.Part1(data);            
        this.day1Part2 = this.day1Service.Part2(data);            
      });
      this.inputReader.readInputIntoLines(2021, 2)
      .subscribe((data) => {
        this.day2Part1 = this.day2Service.Part1(data);            
        this.day2Part2 = this.day2Service.Part2(data);
      });

      this.inputReader.readInputIntoLines(2021, 3)
      .subscribe((data) => {
        this.day3Part1 = this.day3Service.Part1(data);            
        this.day3Part2 = this.day3Service.Part2(data);
      });
  }
}