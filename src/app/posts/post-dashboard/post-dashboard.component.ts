import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { PostService } from '../post.service';
import { Observable } from 'rxjs/Observable';
import { AngularFireStorage } from '@angular/fire/storage';

export interface categoryList {
  value: string;
  viewValue: string;
}

export interface subCategoryList {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  content: string
  image: string
  price: string
  title: string
  category: any;
  username: []
  comment: []
  bookFrom: any = "";
  bookTO: any = "";
  saving = 'Create Post'


  categories: categoryList[] = [
   
    {value: 'bridal_lagege', viewValue: 'Bridal Lahege'},
    {value: 'side_lagege', viewValue: 'Side Lahege'},
    {value: 'engegement_lagege', viewValue: 'Engegement Lahege'},
    {value: 'partwear-gawn', viewValue: 'Party Werw Gawn'},
    {value: 'engegement_gawn', viewValue: 'Engement Gawn'},
    {value: 'side-makeup', viewValue: 'Side Makeup'},
    {value: 'bridal_makeup', viewValue: 'Bridal Makeup'},
    {value: 'day-makeup', viewValue: 'Day Makeup'},
    {value: 'engegement-makeup', viewValue: 'Engegement Makeup'},
    {value: 'earing', viewValue: 'Earing'},
    {value: 'bridal_jewellery', viewValue: 'Bridal Jewellery'},
    {value: 'side_jewellery', viewValue: 'Side Jewellery'},
    {value: 'haldi_jewellery', viewValue: 'Haldi Jewellery'},
    {value: 'vlcc-insta-glow', viewValue: 'VLCC Insta Glow Facial'},
    {value: 'vlcc-package', viewValue: 'VLCC Package Facial'},
    {value: 'lotus-gold', viewValue: 'Lotus Gold Facial'},
    {value: 'mix-fruit', viewValue: 'Mix Fruit Facial'},

    {value: 'face_deltan', viewValue: 'Face Deltan'},




  
  ];



  uploadPercent: Observable<number>
  downloadURL: Observable<string>
  constructor(private auth: AuthService,
    private postService: PostService,
    private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  createPost() {
    const postData = {
      author: this.auth.authState.displayName || this.auth.authState.email,
      authorId: this.auth.currentUserId,
      content: this.content,
      image: this.image || null,
      published: new Date(),
      title: this.title,
      category:this.category,
      username:[],
      comment : [],
      price: this.price,
      bookFrom: this.bookFrom,
      bookTo: this.bookTO
    }
    this.postService.create(postData)
    this.title = ''
    this.content = ''
    this.image = ''

    this.saving = 'Post Created!'
    setTimeout(() => (this.saving = 'Create Post'), 3000)
  }


  uploadImage(event) {
    const file = event.target.files[0]
    const path = `posts/${file.name}`
    if (file.type.split('/')[0] !== 'image') {
      return alert('only image files')
    } else {
      const task = this.storage.upload(path, file)
      const ref = this.storage.ref(path);
      this.downloadURL = ref.getDownloadURL()
      this.uploadPercent = task.percentageChanges()
      console.log('Image Uploaded!')
      this.downloadURL.subscribe(url => (this.image = url))







      
    }










  }


}




