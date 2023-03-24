import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EncaissementService } from 'backend/services/encaissement/encaissement.service';
import { SignupService } from 'backend/services/signup/signup.service';


@Component({
  selector: 'app-edit-encaisse',
  templateUrl: './edit-encaisse.component.html',
  styleUrls: ['./edit-encaisse.component.css']
})
export class EditEncaisseComponent implements OnInit {
  signups: any = []
  user: any
  signup: any = []
  encaisseForm! : FormGroup
  id:any
  req : any=[]
  constructor(private router:Router, private signupService: SignupService,private fb: FormBuilder,private activatedRouter:ActivatedRoute, private encaissementService: EncaissementService) { }

  ngOnInit(): void {

    this.encaisseForm = this.fb.group({
      caisse: [''],
      annee: [''],
      date: [''],
      beneficier: [''],
      modalite: [''],
      Ncheque: [''],
      bank: [''],
      Ncompte: [''],
      montant: [''],
      objet: [''],
      observation: ['']
    });

    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');

    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
this.encaissementService.getEncaisseById(this.id).subscribe(
(data)=>{
this.req = data.request
}
)


  } 

    this.signupService.getAllUseres().subscribe(
      (data) => {
        this.signup = data.finded

        var mySignup = [];
        for (let i = 0; i < this.signup.length; i++) {
          if (this.signup[i].img == this.user.img) {
            mySignup.push(this.signup[i])
            this.signups = mySignup

          }
        }
      }
    )



  }
  encaisseEdit() {
 let y = {caisse:'', anne:'', date:'', beneficier:'', modalite:'', Ncheque:'', bank:'', Ncompte:'', montant:'', objet:'', observation:''}
 y.caisse = this.encaisseForm.value.caisse,
 y.anne = this.encaisseForm.value.anne,
 y.date = this.encaisseForm.value.date,
 y.beneficier = this.encaisseForm.value.beneficier,
 y.modalite = this.encaisseForm.value.modalite,
 y.Ncheque = this.encaisseForm.value.Ncheque,
 y.bank = this.encaisseForm.value.bank,
 y.Ncompte = this.encaisseForm.value.Ncompte,
 y.montant = this.encaisseForm.value.montant,
 y.objet = this.encaisseForm.value.objet,
 y.observation = this.encaisseForm.value.observation

 this.encaissementService.editTransfert(this.req,y).subscribe(
  (data)=>{

  }
)
this.router.navigate(['encaissement'])
  }

  logOut() {
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  }
}
