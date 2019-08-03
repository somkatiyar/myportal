import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post'
import { PostService } from '../post.service';
import { AuthService } from 'src/app/core/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-blogbycategory',
  templateUrl: './blogbycategory.component.html',
  styleUrls: ['./blogbycategory.component.scss']
})
export class BlogbycategoryComponent implements OnInit {

  
  title:any;
  posts: any;
  constructor(private postService: PostService,
    private router: Router ,public auth: AuthService,private route: ActivatedRoute) { }

  ngOnInit() {

    
      const categoryId = this.route.snapshot.paramMap.get('category')
     
       this.postService.getPosts().subscribe(data =>{
       this.posts = data.filter(item =>item.category == categoryId)
      
      })
     
   
    
      }


  goToDetailItem(id) {
    this.router.navigate(['/blog',id])
  }

  delete(id: string) {
    this.postService.delete(id)
  }


}
