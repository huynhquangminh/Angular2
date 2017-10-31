import {Component} from '@angular/core';


@Component ({
    selector:'bai06-demo',
    templateUrl: 'bai6.component.html',
    styleUrls :['bai6.component.css']
})

export class bai6Component
{
    public appclass :boolean = false;
    public applystyle :boolean = false;
    OnApplyClass()
    {
        this.appclass = !this.appclass;
    }
}