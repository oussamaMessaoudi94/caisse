import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DecaissementService } from 'backend/services/decaissement/decaissement.service';
import { SignupService } from 'backend/services/signup/signup.service';

@Component({
  selector: 'app-decaissement',
  templateUrl: './decaissement.component.html',
  styleUrls: ['./decaissement.component.css']
})
export class DecaissementComponent implements OnInit {
  signups : any=[]
  user :any
  signup :any=[]
  check:any=[]
  decaisseForm! : FormGroup;
  searchForm!: FormGroup;
  decaiss: any = [];
  searchTab: any = [];
  TTC: any =0
  constructor(private router:Router, private signupService : SignupService, private fb:FormBuilder, private decaissementService:DecaissementService) { }

  ngOnInit(): void {
    this.decaisseForm = this.fb.group ({
      caisse : [''],
      annee : [''],
      date : [''],
      beneficier : [''],
      modalite : [''],
      Ncheque : [''],
      Attijari : [''],
      bank : [''],
      Ncompte : [''],
      montant : [''],
      objet : [''],
      observation : ['']
    });

    this.searchForm = this.fb.group({
      CAISSE: [''],
      ANNEE: ['']
    })


    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');


this.signupService.getAllUseres().subscribe(
  (data)=>{
this.signup = data.finded

this.decaissementService.getAlldecaisse().subscribe(
  (data) => {
    this.decaiss = data.findedDecaisse
  }
)

var mySignup=[];
for (let i = 0; i < this.signup.length; i++ ) {
  if (this.signup[i].img == this.user.img ) {
    mySignup.push(this.signup[i])
this.signups = mySignup
console.log('aloalo', this.signups);

  }
}
  }
)



  }





decaisse(x:any){
  this.decaissementService.decaisse(x).subscribe();
}
editdecaisse(id:any){
  this.router.navigate([`edit-decaisse/${id}`])
}

search(x: any) {
  var mySearch = [];
  for (let i = 0; i < this.decaiss.length; i++) {
    if (this.decaiss[i].caisse == this.searchForm.value.CAISSE && this.decaiss[i].annee == this.searchForm.value.ANNEE) {
      mySearch.push(this.decaiss[i])
      this.searchTab = mySearch
    }
    this.TTC = Number(this.TTC) + this.searchTab[i].montant
  }
}


delete(id:any){
  this.decaissementService.deleteDecaisse(id).subscribe((data) => {
   
  location.reload()
  
  });


}
  logOut(){
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  }
}

