import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class PuzzleInput {
    private puzzleInputUri: string = environment.InputRetrievalUri + "/api/FileReader/";

    constructor(private http:HttpClient){}
    
    public readInputIntoLines(year: number, month: number) {
        return this.http.get<string[]>(this.getFilePath(year, month));
    }

    private getFilePath(year: number, month: number): string {
        return this.puzzleInputUri + year.toString() + "/" + month.toString();
    }


}