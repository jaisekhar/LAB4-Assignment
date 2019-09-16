import { Component } from '@angular/core';

import { AboutPage } from '../register/about';
import { ContactPage } from '../dash/contact';
import { HomePage } from '../login/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
