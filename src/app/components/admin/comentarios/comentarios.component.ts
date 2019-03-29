import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/coments.modal';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentService } from './../../../services/comentarios/comment.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios: Comment[] = [];
  closeResult: string;

  comentario: Comment;

  constructor(private afs: AngularFirestore, private comentarioService: CommentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.afs.collection('coment').valueChanges().subscribe(
      (data: Comment[]) => {
        this.comentarios = data;
        console.log(this.comentarios);
      }
    );
  }

  openWindowCustomClass(content, comentario){
    this.comentario = comentario;
    this.modalService.open(content, { windowClass: 'dark-modal'});
  }

  deleteRes(id) {
    const a = confirm('Estas seguro de borrar?');
    if ( a === true) {
      this.comentarioService.deleteComent(id);
    } else {
      alert('cancelado');
    }
  }

}
