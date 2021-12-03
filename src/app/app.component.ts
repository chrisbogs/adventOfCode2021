import { Component } from '@angular/core';
import { Day1Service } from './services/day1.service';
import { PuzzleInput } from './utils/PuzzleInput';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Day1Service, PuzzleInput]
})
export class AppComponent {
  title = 'advent Of Code 2021';
  day1Part1: string = "";
  day1Part2: string = "";
  
  constructor(private day1Service: Day1Service, 
    private inputReader:PuzzleInput)
  {  }

  ngOnInit(){
    this.inputReader.readInputIntoLines(2021, 1)
      .subscribe((data) => {
        this.day1Part1 = this.day1Service.day1Part1(data);            
 
 
      });
    }
}