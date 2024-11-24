import { Component } from '@angular/core';
import { HashService } from '../hash.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedFile!: File;
  digest: string | null = null;
  collision: any = null;

  constructor(private hashService: HashService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  calculateDigest() {
    if (!this.selectedFile) return;

    this.hashService.calculateDigest(this.selectedFile, 8).subscribe((data: any) => {
      this.digest = data;
    });
  }

  generateCollision() {
    if (!this.selectedFile) return;

    this.hashService.generateCollision(this.selectedFile, 8).subscribe((data: any) => {
      this.collision = data;
    });
  }
}
