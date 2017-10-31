import {Component} from '@angular/core';

@Component ({
    selector:'bai07-demo',
    templateUrl :'bai7.component.html',
    
})
export class bai7Component
{
    public dem :number = 1;
    OnClickBtn(value)
    {
        console.log(value);
    }
}