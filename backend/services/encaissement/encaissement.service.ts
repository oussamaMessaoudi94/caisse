import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncaissementService {
  encaisseUrl = 'http://localhost:3000/encaisse'
  constructor(private httpClient: HttpClient) { }

  encaisse(encaisse: any) {
    return this.httpClient.post<{ message: String }>(this.encaisseUrl, encaisse)
  }

  getAllencaisse(){
    return this.httpClient.get<{findedEncaisse: any}>(this.encaisseUrl)
  }

  getEncaisseById(id:any){
    return this.httpClient.get<{request : any}>(`${this.encaisseUrl}/${id}`)
  }

  editTransfert(transfert: any, request:any){
    return this.httpClient.put(`${this.encaisseUrl}/${transfert._id}`, transfert,request)
  }

  deleteEncaisse(id: any){
    return this.httpClient.delete<{message :any}>(`${this.encaisseUrl}/${id}`)
  }
}
