
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { AuthService } from 'src/app/core/auth.service';
import { resolveTimingValue } from '@angular/animations/browser/src/util';
import {FormControl, Validators} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-post-order',
  templateUrl: './post-order.component.html',
  styleUrls: ['./post-order.component.scss']
})
export class PostOrderComponent implements OnInit {




  
  post: Post;
  btnTitle: string = 'Submit Order';
  email: any;
  username:any;
  title: any;
  category: any;
  price: any;
  fromdate:any;
  todate:any;
  address: any;
  disablebtn: boolean = false;
  isErrorMsg:boolean = false;
  isInvalidDate: boolean = false;
  isInvalidForm: boolean = false;
  DBtimestamp: any= [];
  chechAvailableBtn: boolean = false;
  
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    
    // THIS FUNCTION CANNOT ACCESS THE VARIABLE 'someDateToBlock'
    return day !== 0 && day !== 1;
  }
  constructor(private route: ActivatedRoute,private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
    
    this.getPost();
    this.getOrders();
  }

  backToDetail () {
    window.history.back()
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.postService.getPostData(id).subscribe(post => {
      

      (this.post = post)
    } )
      
    
  }

getOrders() {
  let product_id = this.route.snapshot.paramMap.get('id');
  this.postService.getOrders().subscribe(data =>{
    data.filter(item => {
     if(item['productId'] == product_id) {
      let x = item.fromDate['seconds']
      let x1 =  new Date(x * 1000).valueOf()
      this.DBtimestamp.push({DBfrom:x1});
      console.log(this.DBtimestamp,'filter data')

     } else {
       console.log('id not found')
     }
     
      
    })


   })
}



finalSubmit() {
  
  if(this.DBtimestamp.length<=0) {
    this.submitOrder();
  } else if(this.addEvent()){console.log('aval')

    this.submitOrder()
  }
   
    
  
}




  submitOrder() {



      const postData = {
   
        authorId:this.auth.currentUserId,
        fromDate: this.fromdate,
       
        title: this.post.title,
        category:this.post.category,
        published: new Date(),
        price: this.post.price,
        username: this.username,
        email: this.email,
        address: this.address,
        productId: this.route.snapshot.paramMap.get('id')
      }
      this.postService.submitOrder(postData)
      this.updatePost() 
      this.btnTitle ="Order Placed successfully"
      this.disablebtn = true;
      this.title ="";
      this.category="";
      this.username="";
      this.email="";
      this.address="";
      this.fromdate="";
     
      

    
  }

  updatePost() {
    const formData = {
      bookFrom: this.fromdate,
      
      productId: this.route.snapshot.paramMap.get('id')
    }
    const id = this.route.snapshot.paramMap.get('id')
   
    this.postService.update(id, formData)
   
  }

 



  addEvent() {

 let isAval=false;
 let fromView = new Date(this.fromdate).valueOf();

 console.log(fromView,'from view')


 const index = this.DBtimestamp.find(item => item['DBfrom'] === fromView);


  if( index) {
   
      this.isErrorMsg = true;
      isAval=false;
      return isAval
    
     
  } else {
    
    this.isErrorMsg = false;
    
    isAval=true;
    return isAval

    
  }



  // for(let x =0; x< this.DBtimestamp.length; x++) {
  //   if((fromView!= this.DBtimestamp[x]['DBfrom'])) {
  

  //     console.log('not busy')
  //     this.isErrorMsg = false;
  //     return true;
      
  //   } else {
  //     this.resetValue();
  //     this.isErrorMsg = true;
  //     console.log('busy product',this.isErrorMsg)
  //     return false;
  //   }

  // }
  
}


resetValue() {
this.fromdate ="";

}
}
