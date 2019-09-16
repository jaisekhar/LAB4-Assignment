import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../register/about";
import {ContactPage} from "../dash/contact";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: String;
  pwd: String;
  constructor(public navControl: NavController, public alertControl: AlertController) {

  }
  LoginIn() {
    var user = localStorage.getItem('name');
    var pwd = localStorage.getItem('password');
    if(this.username == user && this.pwd == pwd) {
      var alert = this.alertControl.create({
        title: "Successful",
        subTitle: "Login Successful",
        buttons: [ {
          text: 'Ok',
          handler: () => {
            this.navControl.push(ContactPage);
          }
        }]
      });
      alert.present();
    }else{
      let alert = this.alertControl.create({
        title:"Cannot Login",
        subTitle: "Enter valid Username or Password",
        buttons:['Close']
      });
      alert.present();
    }
  }

  signup(){
    this.navControl.push(AboutPage);
  }

}
