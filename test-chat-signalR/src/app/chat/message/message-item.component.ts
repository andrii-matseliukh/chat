import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'message-item',
    templateUrl: './message-item.component.html',
    styleUrls: ['./message-item.component.css'],
})
export class MessageItemComponent {

    @Input() message: string = null;
    @Input() name: string = null;
    DateNow = new Date();
}

