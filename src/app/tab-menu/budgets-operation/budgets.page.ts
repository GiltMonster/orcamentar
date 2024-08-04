import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

@Component({
  selector: 'app-budgets',
  templateUrl: 'budgets.page.html',
  styleUrls: ['budgets.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class budgetsPage {
  constructor() {}
}
