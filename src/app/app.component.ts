import { Component } from '@angular/core';
import {Http,RequestOptions, Headers,Response,Jsonp} from "@angular/http";

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  step1:boolean=true
  step2:boolean=false
  step3:boolean=false
  data:any;
  name:any="";
  limit:any="";
  invalidName:boolean=false
  invalidLimit:boolean=false
  mySearchResults:any;

  constructor(private http: Http,public _jsonp:Jsonp) {

   }

   ngOnInit() {
   }

   searchartist(){
      this.step1=false
      this.step2=true
      this.step3=false
   }

   submitdata(){
     this.invalidName=false
     this.invalidLimit=false

     if (this.name!='jack')
       this.invalidName=true
     else if(this.limit!='4')
       this.invalidLimit=true
     else{

       this.step1=false
       this.step2=false
       this.step3=true

      this.getdata(this.name,this.limit).then(data => {
      console.log(data);
      this.data=data
      this.mySearchResults=this.data.results
      });

     }

   }

getdata(term,limit){
  return new Promise(resolve=>{
  this._jsonp.get('https://itunes.apple.com/search?term='+term+'&limit='+limit+'&callback=JSONP_CALLBACK').map(res=>res.json()).
  subscribe(data=>{
  resolve(data);
     });
 });

}


backtostep1(){
  this.step1=true
  this.step2=false
  this.step3=false
  this.name=""
  this.limit=""
}


}
