import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppiService } from '../../appi-service';

@Component({
  selector: 'app-content',
  imports: [CommonModule],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {
  singleProduct: any;
  id: any;

  constructor(private api: AppiService, private cdr: ChangeDetectorRef, private ar: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.ar.snapshot.paramMap.get('id');
    this.api.getproductdetails(this.id).subscribe((res: any) => {
      this.singleProduct = res;
      this.cdr.detectChanges();
    });
  }
}
