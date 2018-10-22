import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movies1Provider } from '../../providers/movies1/movies1';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
      Movies1Provider
    ]
  
})
export class FeedPage {

  public object_feed = {
    titulo: "Daniel Oliveira",
    data: " 12 de março de 1983",
    descricao: "criando um app fodaa",
    qutd_likes:12,
    qutd_comments:4,
    time_comments:"11th ago"
  }
  public nome_usuario:string = "Daniel oliveira code"
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private Movies1Provider: Movies1Provider
    ) {
  }

  ionViewDidLoad() {
  }

}
