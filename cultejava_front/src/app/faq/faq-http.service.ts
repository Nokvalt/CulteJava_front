import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Evenement } from '../modelEvenement';
import { environment } from 'src/environments/environment';
import { TapoteurComponent } from '../tapoteur/tapoteur.component';
import { LoginService } from '../login.service';
import { TapoteurRequestResponse } from '../modelTapoteur';
import { InscriptionEvenement } from '../modelInscriptionEvenement';


@Injectable({
  providedIn: 'root'
})
export class FaqHttpService {



}