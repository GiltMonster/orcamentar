import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-budgets-list',
  templateUrl: 'budgets_list.page.html',
  styleUrls: ['budgets_list.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class budgets_listPage {

  constructor() {}

}
