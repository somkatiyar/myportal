import { Component, OnInit } from '@angular/core';

import * as nodemailer from "nodemailer";


@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  transporter: any;
  mailOptions: any;

  constructor() { 
  
  }

  ngOnInit() {
  }


  






}
   