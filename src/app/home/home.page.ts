import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Observable } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data$: Observable<any>;

  constructor(private readonly musicService: MusicDataService, /*private readonly camera: Camera*/) { }

  onSearchbarChanged(event: CustomEvent) {
    const term = event.detail['value'];
    this.data$ = this.musicService.searchAlbums(term);
  }

  openCamera() {
    const image = Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    })
      .then(data => console.log(data))
      .catch(error => console.log(error));
  }
}
