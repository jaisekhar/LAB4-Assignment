import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  searchImg : any;
  searchData = [];
  searchWord: any;
  searchName: any;
  searchUrl: any;
  ImageBoo: any;
  private searchdesc: any;

  constructor(public navCtrl: NavController, private http:HttpClient) {

  }


  getKnowledgeGraph(){
    console.log(this.searchWord);
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchWord +
      '&key=AIzaSyDvHXcYWqBz3u2dWkpqaaXt497bJwI2iBE&limit=1&indent=True').subscribe((data: any)=>{
      console.log(data);
      this.searchName = data.itemListElement[0].result.name;
      this.searchdesc = data.itemListElement[0].result.description;
      this.searchUrl = data.itemListElement[0].result.detailedDescription.url;
    });

  }

  getSearchedImages(){
    console.log(this.searchImg);
    this.http.get('https://www.googleapis.com/customsearch/v1?q=' + this.searchImg +
      '&key=AIzaSyDvHXcYWqBz3u2dWkpqaaXt497bJwI2iBE&imgSize=medium&searchType=image&fileType=jpg&cx=005069354886028579975:vpkirx0dbmp').subscribe((data: any)=>{
        for (let i = 0; i < data.items.length; i++) {
        this.searchData[i] = {
          name: data.items[i].title,
          link: data.items[i].link
        };
          this.ImageBoo = data.items.length;
      }
    })
  }
}
