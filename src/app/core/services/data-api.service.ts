import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';

const delayInMs = 1200;

@Injectable()
export class DataApiService<T extends { id: any }> {
  constructor(private http: HttpClient) {
  }

  find(id: any): Observable<T> {
    return this.http.get(this.getUrl())
      .pipe(
        map((o: Object) => <T>o),
        delay(delayInMs)
      );
  }

  update(entity: T): Observable<T> {
    return this.http.put(this.getUrl(), entity)
      .pipe(
        map((o: Object) => <T>o),
        delay(delayInMs)
      );
  }

  remove(entity: T): Observable<T> {
    return this.http.delete(this.getSingleUrl(entity))
      .pipe(
        map((o: Object) => <T>o),
        delay(delayInMs)
      );
  }

  create(entity: any): Observable<T> {
    return this.http.post(this.getUrl(), entity)
      .pipe(
        map((o: Object) => <T>o),
        delay(delayInMs)
      );
  }

  getAll(): Observable<T[]> {
    return this.http.get(this.getUrl())
      .pipe(
        map((o: Object) => <T[]>o),
        delay(delayInMs)
      );
  }

  getUrl(): string {
    throw new Error('Abstract method');
  }

  getSingleUrl(entity: T): string {
    return `${this.getUrl()}/${entity.id}`;
  }

}
