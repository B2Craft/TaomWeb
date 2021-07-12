import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FireService } from 'src/app/shared/service/fire.service';

class User {
  mail: string;
  date: Date;

  constructor(item: any) {
    this.mail = item.data().mail || null;
    this.date = item.data().date || null;
  }
}
@Component({
  selector: 'app-modern-header',
  templateUrl: './modern-header.component.html',
  styleUrls: ['./modern-header.component.scss']
})
export class ModernHeaderComponent implements OnInit, OnDestroy {

  mail: string = '';
  users: User[] = [];

  unSubScribeAll: Subject<any>;

  constructor(private fire: FireService, private db: AngularFirestore) {
    this.unSubScribeAll = new Subject();
    this.fire.get()
    .pipe(takeUntil(this.unSubScribeAll))
    .subscribe(res => {
      this.users = res.map((data) => new User(data.payload.doc));
      console.log(this.users);
      
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.unSubScribeAll.next();
    this.unSubScribeAll.complete();
  }

  gonder() {
    console.log(this.mail);
    if (this.mail.includes('@')) {
      let kayitli = this.users.find(item => item.mail === this.mail);
      if (kayitli) {
        alert('Daha önce kayıt oldunuz.');
      } else {
        this.fire.create(this.mail).then(res => {
          alert('Kayıt olduğunuz için teşekkürler.');
        });
      }
    } else {
      alert('Geçerli bir e-posta adresi giriniz.');
    }
  }


}
