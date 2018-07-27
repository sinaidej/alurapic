import { HttpClient } from '../../../../node_modules/@angular/common/http';
import { Injectable } from '../../../../node_modules/@angular/core';
import { Photo } from "src/app/photos/photo/photo";





@Injectable({providedIn:'root'})
export class PhotoService {
    constructor(private http:HttpClient) {
        this.http = http;
    }

    listFromUser(userName: string){
        return this.http
        .get<Photo[]>('http://localhost:3000/flavio/photos');
    }
}