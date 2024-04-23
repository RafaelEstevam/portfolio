import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // showModal: boolean = false;

  handleShowModal(modal:string){
    console.log(modal);
  }

  // handleHideModal(){
  //   console.log('hide');
  //   this.showModal = false;
  // }

}
