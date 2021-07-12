import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modern-services',
  templateUrl: './modern-services.component.html',
  styleUrls: ['./modern-services.component.scss']
})
export class ModernServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  services = [
    {
      img: "assets/images/app_landing2/service/2-1.png",
      title: "Kullanıcı Dostu",
      description: "Benzer uygulamalardan farklı olarak en önem verdiğimiz noktalardan biri sizlerin alışkın olduğu kullanıcı dostu bir tasarım."
    },
    {
      img: "assets/images/app_landing2/service/2-6.png",
      title: "Kota Dostu",
      description: "Uygulamada internet kullanımınızı optimize edebilmek için tüm kayıtlarımız ısıl işlemden geçirilmiştir, sucuk gibi düşünün."
    },
    {
      img: "assets/images/app_landing2/service/2-3.png",
      title: "Enerji/Pil Dostu",
      description: "Uygulamamız işletim sisteminin verdiği en uygun imkanlarla çalışarak telefonunuzun pilini fena idareli kullanır."
    },
    {
      img: "assets/images/app_landing2/service/2-2.png",
      title: "Ödüllü Uygulama",
      description: "Bir yerlerden ödül aldık ama bunu sonra açıklayacağız şimdilik buraya yazalım dedik."
    },
    {
      img: "assets/images/app_landing2/service/2-4.png",
      title: "7/24 Destek",
      description: "Her an buradayız, en ufak sorunuz için msnden titreşim gönderin."
    },
    {
      img: "assets/images/app_landing2/service/2-5.png",
      title: "Güvenlik",
      description: "Tüm bilgileriniz bizimle güvende, herhangi bir çağrı merkezine satmayacağız emin olabilirsiniz."
    }
  ]

}
