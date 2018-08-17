import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'devices',
    templateUrl: './devices.component.html',
    styleUrls: ['./devices.component.css']
})
export class DevicesComponent{

    devicesIncrease:string;
    totalDevices:string;
    deliveryValue:string;
    deliveryIncrease:string;
     deliveryQuantity:string;
	 deliveryQuantityIncrease:string;
	 deliverySuccess:string;
	 deliverySuccessIncrease:string;

    api = 'http://localhost:8080/rest/countDevices/1';

    constructor(http:Http){
        http.get(this.api)
        .map(res => res.json())
        .subscribe(ft => {
            console.log(ft);
            this.devicesIncrease = ft.increase;
            this.totalDevices = ft.totalDevices;
            this.deliveryValue = ft.deliveryValue;
            this.deliveryIncrease = ft.deliveryIncrease;

            this.deliveryQuantity = ft.deliveryQuantity;
            this.deliveryQuantityIncrease = ft.deliveryQuantityIncrease;
            this.deliverySuccess = ft.deliverySuccess;
            this.deliverySuccessIncrease = ft.deliverySuccessIncrease;


        }, erro=>console.log(erro));
    }

}