import { Component, OnInit } from '@angular/core';
import { SignupService } from 'backend/services/signup/signup.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EncaissementService } from 'backend/services/encaissement/encaissement.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-encaissement',
  templateUrl: './encaissement.component.html',
  styleUrls: ['./encaissement.component.css']
})
export class EncaissementComponent implements OnInit {
  signups: any = []
  user: any
  signup: any = []
  encaisseForm!: FormGroup;
  searchForm!: FormGroup;
  form: any = {};
  encaiss: any = [];
  searchTab: any = [];
  TTC: any = 0
  id: any
  req: any = []
  constructor(private router: Router, private signupService: SignupService, private fb: FormBuilder, private encaissementService: EncaissementService) { }

  ngOnInit(): void {
    this.encaisseForm = this.fb.group({
      caisse: [''],
      annee: [''],
      date: [''],
      beneficier: [''],
      modalite: [''],
      Ncheque: [''],
      Attijari: [''],
      bank: [''],
      Ncompte: [''],
      montant: [''],
      objet: [''],
      observation: ['']
    });




    this.searchForm = this.fb.group({
      CAISSE: [''],
      ANNEE: ['']
    })
    for (let i = 0; i < this.searchTab.length; i++) {
    


    }





    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');


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

    this.encaissementService.getAllencaisse().subscribe(
      (data) => {
        this.encaiss = data.findedEncaisse
      }
    )

  }





  encaisse(x: any) {
    this.encaissementService.encaisse(x).subscribe();
  }

  search(x: any) {
    var mySearch = [];
    for (let i = 0; i < this.encaiss.length; i++) {
      if (this.encaiss[i].caisse == this.searchForm.value.CAISSE && this.encaiss[i].annee == this.searchForm.value.ANNEE) {
        mySearch.push(this.encaiss[i])
        this.searchTab = mySearch
      }
      this.TTC = Number(this.TTC) + this.searchTab[i].montant
    }
  }

  editEncaisse(id: any) {
    this.router.navigate([`edit-encaisse/${id}`])
  }

  delete(id: any) {
    this.encaissementService.deleteEncaisse(id).subscribe((data) => {

      location.reload()

    });

  }

  printEncaisse(id:any) {
    this.router.navigate([`print-caisse/${id}`])

  }
 
  logOut() {
    localStorage.removeItem('connectedUser');
    this.router.navigate([''])
  }
}
