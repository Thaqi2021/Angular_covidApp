import { Component } from '@angular/core';
import { BookApmt } from '../model/book-apmt';
import Swal from 'sweetalert2'
import { User } from '../model/user';
import { BookingService } from '../service/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns = ['id','vac','date', 'loc','del'];
  slot!: BookApmt[];
  transactions: any;

  constructor(private bookingService: BookingService,private router: Router) {}

  ngOnInit(): void {
    console.log("im cart controller");
    // User.idd='1';
    if(User.ppat_id!=undefined){
      console.log("im in cart func"+ User.ppat_id);
      this.bookingService.getslot(User.ppat_id).subscribe(data=>{
      this.slot=data;
      console.log(data);

   })
  }
  }

  delslot(id:any){
    this.bookingService.cancelApmt(id).subscribe(data=>{
      console.log(data);
    })
  }
}
