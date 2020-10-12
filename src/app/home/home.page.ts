import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/core';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Observable } from 'rxjs';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  data$: Observable<any>;

  constructor(private readonly musicService: MusicDataService, /*private readonly camera: Camera*/) { }

  ngOnInit() {
    // this.data$ = this.musicService.searchArtists('Lateralus');
  }

  onSearchbarChanged(event: CustomEvent) {
    const term = event.detail['value'];
    this.data$ = this.musicService.searchArtists(term);
  }

  openCamera() {

    const image = Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,

    })
      .then(data => console.log(data))
      .catch(error => console.log(error));

    /*
    https://stackoverflow.com/questions/55314162/ionic-capacitor-using-cordova-plugins
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
    */
  }
}
