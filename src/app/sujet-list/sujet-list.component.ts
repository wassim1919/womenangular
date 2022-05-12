import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sujet } from '../sujet';
import { SujetService } from '../sujet.service';

@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.scss']
})
export class SujetListComponent implements OnInit {
  sujets: Observable<Sujet[]>;

  constructor(private sujetService: SujetService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.sujets = this.sujetService.getSujetsList();
  }

  

 
}
