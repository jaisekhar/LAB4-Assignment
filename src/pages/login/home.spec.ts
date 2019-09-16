import { async, TestBed } from '@angular/core/testing';
import {NavController, AlertController, IonicModule} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';


import { HomePage} from './home';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpTestingController,HttpClientTestingModule} from "@angular/common/http/testing";


describe('Home Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let httpClient: HttpClient;
  let httpMock :HttpTestingController;

  let navCtrl: NavController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        {provide: NavController, useClass: NavControllerMock}
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
  });

  it('has to be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });

  it("Check Login Component", () =>{

    let home = new HomePage(navCtrl, alertCtrl);
    home.LoginIn();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

  it('Login Creation', () => {
    expect(component).toBeTruthy();
  });

  it('Password or Username Invalid', () => {
    component.username = 'jai';
    component.pwd = 'pwd';
    let loginF = new HomePage(navCtrl, alertCtrl);
    loginF.LoginIn();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

});
