import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/services/http.service';
import { environment } from '../../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class MangeQuestionsService {

  constructor(private _htppService: HttpService) { }
  AddQuestions(question): void {

    const res = this._htppService.post(`${environment.url}Questions/InsertQuestion`, question);
    console.log('subscribe');
    res.subscribe(r => {
      console.log(r);
    });
    // console.log(res);
  }

  GetAllQuestions() {
    return this._htppService.get(`${environment.url}Questions/GetAllQuestion`);
  }

  getAllCompetancy() {
    return this._htppService.get(`${environment.url}competancies/getAllCompetancy`);
  }

  getAllTechnology() {
    return this._htppService.get(`${environment.url}technology/getAllTechnology`);
  }

  updateQuestion(req) {
    return this._htppService.post(`${environment.url}questions/updateQuestion`, req);
  }
}
