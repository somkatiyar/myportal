import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-orderlist',
  templateUrl: './post-orderlist.component.html',
  styleUrls: ['./post-orderlist.component.scss']
})
export class PostOrderlistComponent implements OnInit {

  orders: any;
  currentURL: any;

  constructor(private postService: PostService,
    private router: Router, public auth: AuthService,
    
    private route: ActivatedRoute) {
    console.log(this.router.url)
  }

  ngOnInit() {
    


    this.postService.getOrders().subscribe(data => {
      data.filter(item => {
        let x = item.fromDate['seconds']
        
        let x1 = new Date(x * 1000).valueOf()
        

        let DBtimestamp = {}
        DBtimestamp['DBfrom'] = (x1)
        
        console.log(DBtimestamp, 'fromddd')

      })
      this.orders = data;

    })


  }

  delete(id: string) {
    this.postService.deleteOrder(id)
  }



  sendEmail() {
   
  }

}
