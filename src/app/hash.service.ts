import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HashService {
  private apiUrl = 'https://localhost:7240/api/hash';

  constructor(private http: HttpClient) {}

  calculateDigest(file: File, bits: number) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bits', bits.toString());
    return this.http.post(`${this.apiUrl}/digest`, formData);
  }

  generateCollision(file: File, bits: number) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('bits', bits.toString());
    return this.http.post(`${this.apiUrl}/collision`, formData);
  }
}