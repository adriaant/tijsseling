import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Publication} from './publication';
import {PublicationService} from '../../services/publication.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})

export class PublicationsComponent implements OnInit {

  publications: Publication[];

  constructor(private publicationService: PublicationService, private titleService: Title) {
  }

  ngOnInit() {
    this.getPublications();
    this.titleService.setTitle('Adriaan Tijsseling: Publications');
  }

  getPublications(): void {
    this.publicationService.getPublications()
      .subscribe(publications => this.publications = publications.reverse());
  }
}
