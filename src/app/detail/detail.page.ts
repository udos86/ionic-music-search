import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  data$: Observable<any>;
  title: string;

  constructor(private readonly route: ActivatedRoute, private readonly musicService: MusicDataService) { }

  ngOnInit() {
    this.data$ = this.route.paramMap.pipe(
      switchMap(params => this.musicService.getTracksByAlbum(params.get('id'))),
      map(data => {
        const results = data['results'];
        this.title = results[0]['collectionName'];
        return results.filter(item => item['wrapperType'] === 'track');
      })
    );
  }
}
