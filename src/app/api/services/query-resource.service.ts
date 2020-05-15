/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ComplaintDTO } from '../models/complaint-dto';

/**
 * Query Resource
 */
@Injectable({
  providedIn: 'root',
})
class QueryResourceService extends __BaseService {
  static readonly findComplaintByIdUsingGETPath = '/api/query/findByComplaintId/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param id id
   * @return OK
   */
  findComplaintByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<ComplaintDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/query/findByComplaintId/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ComplaintDTO>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  findComplaintByIdUsingGET(id: number): __Observable<ComplaintDTO> {
    return this.findComplaintByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as ComplaintDTO)
    );
  }
}

module QueryResourceService {
}

export { QueryResourceService }
