import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'bai09-demo',
    templateUrl: 'bai9.component.html',

    
})

export class bai9Component {
    @Input() name: string;
    @Output() voteOutput=  new EventEmitter <boolean> ();
    public clickvote :boolean = false;

    voted (vote)
    {
        this.clickvote = vote;
        this.voteOutput.emit(vote);
    }
}