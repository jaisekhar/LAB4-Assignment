import { async, TestBed } from '@angular/core/testing';
import {NavController, AlertController, IonicModule} from 'ionic-angular';
import {AlertControllerMock, AlertMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        NavController,
        { provide: AlertController, useClass: AlertControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
  });

  it('has to be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });

  it('Please enter valid email address', () => {

    let signup = new AboutPage(navCtrl, alertCtrl);
    signup.firstName = 'Jai';
    signup.lastName = 'Koya';
    signup.password = 'abc';
    signup.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it('Successful Signup', () => {

    let signup = new AboutPage(navCtrl, alertCtrl);
    signup.firstName = 'Jai';
    signup.lastName = 'Koya';
    signup.email = 'jai@umkc.edu';
    signup.password = 'abc';
    signup.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

});
