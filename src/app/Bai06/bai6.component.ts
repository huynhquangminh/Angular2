import {Component} from '@angular/core';


@Component ({
    selector:'bai06-demo',
    templateUrl: 'bai6.component.html',
    styleUrls :['bai6.component.css']

})

export class bai6Component
{
    public applyclass :boolean = true;
    applyStyle :boolean = false;
    changeClass()
    {
        this.applyStyle = !this.applyStyle;
        this.applyclass = !this.applyclass;
    }
}