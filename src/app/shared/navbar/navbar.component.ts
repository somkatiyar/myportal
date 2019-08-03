import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
// import {Popup} from 'ng2-opd-popup';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('close') modalClose: ElementRef;
  id2:any = 1;
  loginButton: boolean = false;
  security_code: any ;
  security_code_error;
  constructor(public auth: AuthService,
    // private popup:Popup,
     private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {

let routerName = window.location.pathname
console.log(routerName,'routername')
if(routerName == '/blog/admin0019') {
this.loginButton = true;


} else {
  this.loginButton = false;
}
  }

  securityCheck() {
let valid_code = 'cczy3'
if(this.security_code == valid_code) {

this.closeModal();
this.login();

} else {
this.security_code_error ="Please Enter A Valid Code for login As a Admin"
// this.loginButton = false;
// this.router.navigateByUrl('/blog');
}
  }

  closeModal(){
    let el: HTMLElement = this.modalClose.nativeElement as HTMLElement;
    el.click();
  }

  goToContact() {
    this.router.navigateByUrl('contact')
  }

 selectByCategory(category: string) {
   this.router.navigate(['/blogItemByCategory',category])
 }

 
 allItem() {

  
  this.router.navigate(['/blog']);

 }

 allOrders() {
  this.router.navigate(['/order-list']);

 }

 login() {
  
  let data = this.auth.login()
  console.log(data,'data')
  this.loginButton = false;
 }

 logout() {
  this.auth.logout()
  this.router.navigateByUrl('/blog')
 }

}
