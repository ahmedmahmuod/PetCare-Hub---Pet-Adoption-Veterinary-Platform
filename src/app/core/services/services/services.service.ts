import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { map, Observable } from 'rxjs';
import { ServiceModel } from '../../models/service/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  // Get all services
  getAllServices(): Observable<ServiceModel[]> {
    return this.http.get<{ status: string; data: ServiceModel[] }>(environment.apiUrl + 'serviceProfile/get-servicesProfile')
      .pipe(
        map((response) => response.data) 
      );
  }

  
}
