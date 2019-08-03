import { NgModule } from '@angular/core';
import { PostDashboardComponent } from './post-dashboard/post-dashboard.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { PostService } from './post.service';
import { BlogbycategoryComponent } from './blogbycategory/blogbycategory.component';
import { PostOrderComponent } from './post-order/post-order.component';
import { PostOrderlistComponent } from './post-orderlist/post-orderlist.component';

const routes: Routes = [
  { path: "blog", component: PostListComponent },
  { path: "blog/admin0019", component: PostListComponent },
  { path: "blog/:id1/:id2", component: PostListComponent },
  { path: "blogItemByCategory/:category", component: BlogbycategoryComponent },
  { path: "blog/:id", component: PostDetailComponent },
  { path: "dashboard", component: PostDashboardComponent },
  { path: "post-order/:id", component: PostOrderComponent },
  { path: "order-list", component: PostOrderlistComponent },
]


@NgModule({
  declarations: [PostDashboardComponent,PostOrderlistComponent, PostDetailComponent,PostOrderComponent, PostListComponent, BlogbycategoryComponent, PostOrderComponent, PostOrderlistComponent,],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
    
  ],providers: [PostService]
})
export class PostsModule { }
