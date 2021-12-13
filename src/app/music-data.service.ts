import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const searchBaseUrl = 'https://itunes.apple.com/search';
export const lookupBaseUrl = 'https://itunes.apple.com/lookup';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  constructor(private readonly httpClient: HttpClient) { }

  searchAlbums(artistTerm: string): Observable<any> {
    const term = artistTerm.replace(/\s/g, '+');
    const queryParams = `term=${term}&entity=album&attribute=albumTerm`;
    const url = `${searchBaseUrl}?${queryParams}`;

    return this.httpClient.get(url).pipe(
      map(data => data['results'])
    );
  }

  getAlbumsByArtist(artistId: string): Observable<any> {
    const queryParams = `id=${artistId}&entity=album`;
    const url = `${lookupBaseUrl}?${queryParams}`;

    return this.httpClient.get(url);
  }

  getTracksByAlbum(albumId: string): Observable<any> {
    const queryParams = `id=${albumId}&entity=song`;
    const url = `${lookupBaseUrl}?${queryParams}`;

    return this.httpClient.get(url);
  }
}
