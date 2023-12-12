import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

constructor(private http:HttpClient){}

dataSource:any = [];
searchTerm:string = ''
pageSize:number = 5; //Number of items per page
currentPage:number = 1;//current page number
totalItems:number = 0;
totalPages:number = 0;

ngOnInit(){

this.http.get('http://localhost:3000/users').subscribe((res:any) =>{
  console.log(res);
  this.dataSource = res;
  this.totalItems = this.dataSource.length;
  this.totalPages = Math.ceil(this.totalItems / this.pageSize); // Calculate total pages
  this.updateDisplayedData();
})

}

displayedData:any
updateDisplayedData(){
  const startIndex = (this.currentPage - 1) * this.pageSize;
  const endIndex = startIndex + this.pageSize;

  this.displayedData = this.dataSource.slice(startIndex, endIndex);
};

nextPage(){
  if(this.currentPage < this.totalItems / this.pageSize){
    this.currentPage++;
    this.updateDisplayedData();
  }
}

previousPage(){
  if(this.currentPage > 1){
    this.currentPage--;
    this.updateDisplayedData();
  }
}

changePageSize(size:any){
  console.log(size.target.value)
  this.pageSize = parseInt(size.target.value,10)
  this.updateDisplayedData();
}

isChanged : boolean = false;

changeBg(){
  this.isChanged = !this.isChanged;
}
}
