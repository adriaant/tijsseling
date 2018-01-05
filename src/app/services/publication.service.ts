import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Publication} from '../components/publications/publication';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PublicationService {

  constructor(private http: HttpClient) {
  }

  getPublications(): Observable<Publication[]> {
    return this.http.get<Publication[]>('assets/publications.json')
      .pipe(
        catchError(this.handleError('getPublications', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
