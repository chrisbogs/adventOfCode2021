import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PuzzleInput {
    private puzzleInputUri: string = "http://localhost:8885/api/FileReader/";

    constructor(private http:HttpClient){}
    
    public readInputIntoLines(year: number, month: number) {
        return this.http.get<string[]>(this.getFilePath(year, month));
    }

    private getFilePath(year: number, month: number): string {
        return this.puzzleInputUri + year.toString() + "/" + month.toString();
    }


}