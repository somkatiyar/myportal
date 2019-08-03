import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post'
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
posts : any;
currentURL: any;

  constructor(private postService: PostService,
    private router: Router,public auth: AuthService,
  
    private route: ActivatedRoute) {
   console.log(this.router.url)
     }

  ngOnInit() {


    let y =  this.route.snapshot.paramMap.get('id2')
    console.log(y,'change')
    
       this.postService.getPosts().subscribe(data =>{
        console.log(data,'kk')
          this.posts =data;
        
    
       }) 
   

  }

 selectByCategory(category): any {

  if(category =="all") {
    
   this.postService.getPosts().subscribe(data =>{

    
      this.posts = data;
      console.log(this.posts)
      
   
    
   })
  } else {
  
    this.postService.getPosts().subscribe(data =>{
      let x: any =[];
      x = data.filter(item =>item.category == category)
    
      
      this.posts = x;
      x="";
  
   
  
  })
}
}


  delete(id: string) {
    this.postService.delete(id)
  }
   divNo= 1
  divs = [
    
    {'name':'div'+this.divNo},
  
    
  ]
addDiv() {

  
  this.divNo =this.divNo +1;
  this.divs.push({'name':'div'+this.divNo})
}

removeDiv() {
  this.divs.pop()
  this.divNo = this.divNo -1;
  if(this.divNo == 1) {
    return;
  }
}

}
