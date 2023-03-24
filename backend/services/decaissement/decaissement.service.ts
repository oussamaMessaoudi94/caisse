import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecaissementService {
  decaisseUrl = 'http://localhost:3000/decaisse'
  constructor(private httpClient: HttpClient) { }

  decaisse(decaisse: any) {
    return this.httpClient.post<{ message: String }>(this.decaisseUrl, decaisse)
  }

  getAlldecaisse(){
    return this.httpClient.get<{findedDecaisse: any}>(this.decaisseUrl)
  }

  getDecaisseById(id:any){
    return this.httpClient.get<{request : any}>(`${this.decaisseUrl}/${id}`)
  }

  editTransfert(transfert: any, request:any){
    return this.httpClient.put(`${this.decaisseUrl}/${transfert._id}`, transfert,request)
  }

  deleteDecaisse(id: any){
    return this.httpClient.delete<{message :any}>(`${this.decaisseUrl}/${id}`)
  }
}
