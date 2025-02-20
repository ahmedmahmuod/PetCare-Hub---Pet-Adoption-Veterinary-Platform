import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Service } from '../../models/service/service.model';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}

  // Get specific service details
  getServiceDetails(serviceType: string): Observable<Service> {
    return this.http.get<Service>(environment.apiUrl + `services/getService?serviceType=${serviceType}`);
  }
}
