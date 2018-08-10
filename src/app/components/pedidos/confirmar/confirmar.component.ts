import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '../../../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from '../../../services/ordenes/ordenes.service';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {
  closeResult: string;

  @Input('platillos') platillos;
  @ViewChild(TemplateRef) modalInstance;


  constructor(private ordenService: OrdenesService, private modal: NgbModal,private _router: Router) { }

  ngOnInit() {
  }

  registrar() {
    this.ordenService.addOrden(this.platillos);
    this._router.navigate(['/dashboard/platillos']);
  }

  abrir() {
    this.modal.open(this.modalInstance, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

