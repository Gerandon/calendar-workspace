import {
    Component,
    ContentChild,
    Input,
    OnInit,
    TemplateRef,
    ViewEncapsulation
} from '@angular/core';
import {TimelineDayItem} from "../interfaces/calendar-common";

@Component({
    selector: 'timeline-day-item',
    templateUrl: './calendar-day-item.component.html',
    styleUrls: ['./calendar-day-item.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CalendarDayItemComponent implements OnInit {

    @Input() public date: Date;
    @Input() public disabled: boolean = false;
    @Input() public recordings: (TimelineDayItem | null)[];
    @Input() public currentDay: boolean = false;
    @ContentChild('dayRow',{static: false}) dayRowRef: TemplateRef<any>;

    constructor() {
    }

    ngOnInit(): void {
    }

}
