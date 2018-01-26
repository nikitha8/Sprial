import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
  
})
export class AppComponent  {
   public value:number;
   public mydata:any=[];
   constructor(){
   }
    
    printSpiral(n:number):void
    {   

       
        for (var i = 0; i < n; i++)
        {
            for (var j = 0; j < n; j++)
            {
                
                let data;
     
                // Finds minimum of four inputs
                data = Math.min(Math.min(i, j), Math.min(n-1-i, n-1-j));
     
                // For upper right half
                if (i <= j) {
                    let num =(n-2*data)*(n-2*data) - (i-data)- (j-data);
                    console.log(" " +(num.toString() + " "));
                    this.mydata.push(num.toString());

                }
                // for lower left half
                else {
                    var num1 = (n-2*data-2)*(n-2*data-2) + (i-data) + (j-data);
                    console.log(" "+(num1.toString() + "     "));
                    this.mydata.push(num1.toString());
                }
            }
            console.log("\n");
        }
    }
    


}