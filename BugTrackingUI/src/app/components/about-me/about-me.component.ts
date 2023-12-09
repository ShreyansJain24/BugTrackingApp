import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadPdf() {
    const pdfFilePath = './assets/doc/Shreyans Jain_CV.pdf';

    // Create a link element
    const link = document.createElement('a');
    link.href = pdfFilePath;

    // Specify the file name when downloading
    link.download = 'ShreyansJain_cv.pdf';

    document.body.appendChild(link);

    // Trigger a click event on the link element to initiate the download
    link.click();

    // Clean up: Remove the link element from the DOM
    document.body.removeChild(link);
  }

}
