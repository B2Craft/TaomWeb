import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor(private db: AngularFirestore) { }

  create(mail: string): Promise<DocumentReference> {
    return this.db.collection('getNotified').add({mail: mail, date: new Date().toLocaleString()});
  }

  get() {
    return this.db.collection('getNotified').snapshotChanges();
  }
}
