import { ChangeDetectorRef, Component } from '@angular/core';
import { Card } from '../../ui/card/card';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AppiService } from '../../appi-service';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  data: any = [];
  constructor(private api: AppiService, private cdrf: ChangeDetectorRef) {}

  ngOnInit(){
    this.api.getallproducts().subscribe((res: any) => {
      this.data = res;
      this.cdrf.detectChanges();
    });
  }






























 /* data: any = [
    {
      id:1,
      name: 'HP Victus, AMD Ryzen 7 7445HS',
      description: 'HP Victus, AMD Ryzen 7 7445HS, 4GB RTX 2050, 16GB DDR5(Upgradable) 512GB SSD, FHD, 144Hz, 300 nits, IPS, 15.6/39.6cm, Win11, M365* Office24, Mica Silver, 2.29kg, fb3123AX, Backlit, Gaming Laptop.',
      price: '66,990',
      imageUrl: 'https://imgs.search.brave.com/YuUZOYfhZJOQEMLAo_RswBZwQveTOGcBC4vIYmypOts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDE0eWpxZUtQQUwu/anBn',
    },
    {
      id:2,
      name: 'MSI Thin A15',
      description: 'AMD 7th Gen. Ryzen 7 7735HS, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/NVIDIA GeForce RTX 3050, GDDR6 4GB/Cosmos Gray/1.8Kg) B7UC-103IN',
      price: '65,990',
      imageUrl: 'https://imgs.search.brave.com/ojPzCaEbZBRYX-qew0lcDCmLO1U_nZl5BUJYFGbwO4Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aXNo/YWxwZXJpcGhlcmFs/cy5jb20vY2RuL3No/b3AvZmlsZXMvb3Jp/Z2luYWwtaW1haGdm/ZHljempoZHl0NC5q/cGc_dj0xNzU5ODIy/MjY5JndpZHRoPTE0/NDU',
    },
    {
      id:3,
      name: 'ASUS TUF A15 (2025)',
      description: ' AMD Ryzen 7 7445HS,RTX 3050-4GB,75W TGP,16GB DDR5(Upgradeable Upto 64GB) 512GB SSD,FHD,15.6',
      price: '68,990',
      imageUrl: 'https://imgs.search.brave.com/fLD-i3pkTkxwr3-Dgj0UkM1McH8rpWWqZ2m9YnKswMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFac3BZSkowT0wu/anBn',
    },
    {
      id:4,
      name: 'Lenovo LOQ',
      description: 'AMD Ryzen 5 7235HS, RTX 3050-6GB, 12GB RAM, 512GB SSD, FHD',
      price: '73,990',
      imageUrl: 'https://imgs.search.brave.com/H97u1LMoYNwWBgSbdLhEieU7mopzMdAdZ-7Zj0kEP08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFDWHVWK2Z5ZEwu/anBn',
    }
  ];*/
} 
