import { Component, OnInit } from '@angular/core';
import {getMessaging,getToken} from 'firebase/messaging'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    ngOnInit(): void {
        this.requestpermission();
    }
  title = 'push_notification';
  requestpermission(){
    const messaging=getMessaging();
    getToken(messaging,{vapidKey:environment.firebase.vpaidkey}).then(
      (currentToken)=>{
      if(currentToken){
          console.log("we have the token");
          console.log(currentToken);
        }else
          console.log("we have a problem")
      }
    )
}
}
