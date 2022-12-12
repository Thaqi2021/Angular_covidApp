import { Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { AddCenterComponent } from '../add-center/add-center.component';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { Center } from 'src/app/model/center';
import { AdminService } from '../../service/admin.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  displayedColumns: string[] = ['id', 'Location', 'Address', 'pincode','del'];
  dataSource!: MatTableDataSource<Center>;
  i=1;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private router: Router,public dialog: MatDialog,private adminservice:AdminService) {
    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(users);
    this.adminservice.getAllCenter().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
  }
  addCenter(){
    const dialogRef = this.dialog.open(AddCenterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  delFCart(center_id: any){
    this.adminservice.removeCenter(center_id).subscribe(data=>{
      console.log(data);
      Swal.fire(
        'Success!',
        'Successfully Deleted',
        'success'
      )
    })
    this.adminservice.getAllCenter().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.router.navigate(['/AdminHome']);

  }
}

/** Builds and returns a new User. */

