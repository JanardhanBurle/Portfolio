import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  httpHeaders: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.httpHeaders = this.httpHeaders.set("Content-Type", "application/json");
  }

  post(request: any) {
    return this.http
      .post("https://reachout-to-me.herokuapp.com/api/mail", request, {
        headers: this.httpHeaders,
        responseType: "json",
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error("An error occurred:", error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError("Something bad happened; please try again later.");
  }
}
