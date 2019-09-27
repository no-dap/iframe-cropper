import { Component, OnInit } from '@angular/core';
import Cropper from 'cropperjs';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  captureWindow() {
    const _this = this;
    html2canvas(document.body).then(function(canvas) {
      canvas.style.maxWidth = '100%';
      canvas.style.display = 'none';
      // create container
      const container = document.createElement('div');
      container.style.position = 'fixed';
      container.style.top = '0';
      container.style.left = '0';
      container.style.width = '100vw';
      container.style.height = '100vh';
      container.appendChild(canvas);
      document.body.appendChild(container);
      _this.cropCanvas(canvas);
    });
  }

  cropCanvas(canvas) {
    const cropper = new Cropper(canvas, {
      viewMode: 3,
    });
  }
}
