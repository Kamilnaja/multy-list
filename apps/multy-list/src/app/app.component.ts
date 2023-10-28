import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoComponent } from '@multilist/component-lib';

@Component({
  standalone: true,
  imports: [RouterModule, TodoComponent],
  selector: 'multy-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'multy-list';
}
