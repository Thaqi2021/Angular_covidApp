import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { BookAppointmentComponent } from '../book-appointment/book-appointment.component';

@Component({
  selector: 'app-navbarcli',
  templateUrl: './navbarcli.component.html',
  styleUrls: ['./navbarcli.component.scss']
})
export class NavbarcliComponent {
  constructor(
    private router: Router,
    public dialog: MatDialog
   ){}


   bookapt(){
    const dialogRef = this.dialog.open(BookAppointmentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
   }

   logout(){
    this.router.navigate(['/login']);

  }
}
