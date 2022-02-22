import {Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  @Input() postt: Post | undefined;
  @ContentChild('link', {static: true} ) infoRef: ElementRef | undefined

  constructor() {}

  ngOnInit() {
    console.log(this.infoRef?.nativeElement)}
  }
