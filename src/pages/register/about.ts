import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HomePage} from "../login/home";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 firstName: any;
 password: any;
 lastName: any;
 email: any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  Signup() {
    if (this.firstName == undefined || this.lastName == undefined || this.password == undefined || this.email == undefined) {

      this.alertCtrl.create({
        title: "InValid SignUp",
        message: "Enter valid data in fields",
        buttons: ['ok']
      });
    } else {
      localStorage.setItem("name", this.email);
      localStorage.setItem("password", this.password);
      var alert_ctrl = this.alertCtrl.create({
        title: "Successful",
        subTitle: "Registration Successful",
        buttons: [ {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }]
      });
      alert_ctrl.present();

    }
  }
}
