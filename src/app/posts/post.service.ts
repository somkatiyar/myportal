import 'rxjs/add/operator/map';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';


import { Injectable } from '@angular/core'

import { Post } from './post'
import { Order } from './order';

@Injectable()
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>
  orderCollection: AngularFirestoreCollection<Order>
 
  postDoc: AngularFirestoreDocument<Post>

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref =>
      ref.orderBy('published', 'desc')
    )

    this.orderCollection = this.afs.collection('orders', ref =>
    ref.orderBy('published', 'desc')
  )
  }

  getPosts() {
   
    return this.postsCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Post
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }

  getOrders() {
   
    return this.orderCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Order
        const id = a.payload.doc.id
        return { id, ...data }
      })
    })
  }


  getPostData(id: string) {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`)
    return this.postDoc.valueChanges().pipe()
  }

  getPost(id: string) {
    return this.afs.doc<Post>(`posts/${id}`)
  }
  getOrder(id: string) {
    return this.afs.doc<Post>(`orders/${id}`)
  }

  submitOrder(data: Order) {
    this.orderCollection.add(data)
  }

  create(data: Post) {
    this.postsCollection.add(data)
  }

  delete(id: string) {
    return this.getPost(id).delete()
  }

  update(id: string, formData) {
    console.log(formData,'from service')
    return this.getPost(id).update(formData)
  }

  deleteOrder(id: string) {
    return this.getOrder(id).delete()

  }
}
