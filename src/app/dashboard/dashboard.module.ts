import {NgModule} from '@angular/core'
import { DashboardComponent } from './dashboard.component';
import {DevicesComponent} from '../devices/devices.component';

@NgModule({
    declarations: [DashboardComponent, DevicesComponent],
    exports:[DashboardComponent, DevicesComponent]
})
export class DashBoardModule{

}