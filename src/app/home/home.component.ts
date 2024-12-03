import { Component } from '@angular/core';
import { HashService } from '../hash.service';
import { BindingType } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedFile!: File;
  digest: string | null = null;
  collision: any = null;
  bitNumber: number = 8; 

  constructor(private hashService: HashService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  calculateDigest(bitNumber: number = this.bitNumber) {
    if (!this.selectedFile) return;

    this.hashService.calculateDigest(this.selectedFile, bitNumber).subscribe((data: any) => {
      this.digest = data.hash;
    });
  }

  generateCollision(bitNumber: number = this.bitNumber) {
    if (!this.selectedFile) return;

    this.hashService.generateCollision(this.selectedFile, bitNumber).subscribe((data: any) => {
      this.collision = data;
    });
  }
}
