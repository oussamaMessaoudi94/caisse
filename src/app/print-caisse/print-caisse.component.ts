import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncaissementService } from 'backend/services/encaissement/encaissement.service';

@Component({
  selector: 'app-print-caisse',
  templateUrl: './print-caisse.component.html',
  styleUrls: ['./print-caisse.component.css']
})
export class PrintCaisseComponent implements OnInit {
id:any
req : any=[]
date: any
  constructor(private activatedRouter:ActivatedRoute, private encaissementService:EncaissementService) { }

  ngOnInit(): void {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  


    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
this.encaissementService.getEncaisseById(this.id).subscribe(
(data)=>{
this.req = data.request



}
)


  } 


  }

}
