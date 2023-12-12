import {Injectable} from '@angular/core';

@Injectable({
    providedIn : 'root' // indicates that this service is provided at the root level
})

export class MyService{
    private data: any;

    constructor() {}
  
    // Getter
    getData(): any {
      return this.data;
    }
  
    // Setter
    setData(newData: any): void {
      this.data = newData;
    }
}

// register service in the providers array in ngModule