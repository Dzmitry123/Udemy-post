import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput') inputRef: ElementRef | undefined;

  public title: string;
  public text: string;

  constructor() {
    this.title = '';
    this.text = '';
  }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post);
      this.title = this.text = '';
    }
  }
  focusTitle() {
   if (this.inputRef) {
     this.inputRef.nativeElement.focus();
   }
  }
}
