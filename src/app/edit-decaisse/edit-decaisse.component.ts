import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DecaissementService } from 'backend/services/decaissement/decaissement.service';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-edit-decaisse',
  templateUrl: './edit-decaisse.component.html',
  styleUrls: ['./edit-decaisse.component.css']
})
export class EditDecaisseComponent implements OnInit {
  signups: any = []
  user: any
  signup: any = []
  decaisseForm! : FormGroup
  id:any
  req : any=[]
  constructor(private router:Router, private signupService: SignupService,private fb: FormBuilder,private activatedRouter:ActivatedRoute, private decaissementService:DecaissementService) { }

  ngOnInit(): void {

    this.decaisseForm = this.fb.group({
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
this.decaissementService.getDecaisseById(this.id).subscribe(
(data)=>{
this.req = data.request
}
)



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

}
decaisseEdit(){
  let y = {caisse:'', anne:'', date:'', beneficier:'', modalite:'', Ncheque:'', bank:'', Ncompte:'', montant:'', objet:'', observation:''}
  y.caisse = this.decaisseForm.value.caisse,
  y.anne = this.decaisseForm.value.anne,
  y.date = this.decaisseForm.value.date,
  y.beneficier = this.decaisseForm.value.beneficier,
  y.modalite = this.decaisseForm.value.modalite,
  y.Ncheque = this.decaisseForm.value.Ncheque,
  y.bank = this.decaisseForm.value.bank,
  y.Ncompte = this.decaisseForm.value.Ncompte,
  y.montant = this.decaisseForm.value.montant,
  y.objet = this.decaisseForm.value.objet,
  y.observation = this.decaisseForm.value.observation
 
  this.decaissementService.editTransfert(this.req,y).subscribe(
   (data)=>{
 
   }
 )
 this.router.navigate(['decaissement'])
}

logOut() {
  localStorage.removeItem('connectedUser');
  this.router.navigate([''])
}
}
