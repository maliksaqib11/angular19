import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddUserComponent } from './users/add-user/add-user.component';
import { LoginComponent } from './Components/login/login.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roo',
  imports: [RouterOutlet, AddUserComponent, LoginComponent,NgIfComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
