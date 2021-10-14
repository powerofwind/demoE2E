import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  public txs = [
    { "_id": 999, "name": "โอนให้ ธ.กสิกร", "amount": "5" },
    { "_id": 2, "name": "โอนให้ ธ.กสิกร", "amount": "10" }];
  public status = [
    { "name": "Unresolved" },
    { "name": "Resolved" }];
  public contract = [
    { "_id": 1, "name": "สัญญาหน้าฝน" },
    { "_id": 2, "name": "สัญญาหน้าหนาว" }];
  public txLog = [];
  public contract2:any;
  public statusReceived: boolean = false;
  public statusShipping: boolean = false;
  public statusDone: boolean = false;
  public statusCancel: boolean = false;
  public dateReceived: Date;
  public dateShipping: Date;
  public dateDone: Date;

  constructor() {
    this.OnStateChanged("acceptrequest")
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.status = [{ "name": "Unresolved" }];
  }

  getContractDetail(event) {
    console.log(this.contract2);
  };

  sentConsenttoManager() {
    this.txLog.push(this.txs)
    console.log(this.txLog);
  };

  UpdateIssueStatus(event) {
    console.log(event.detail);
  };

  OnStateChanged(state: string) {   
    switch (state.toLowerCase()) {
      case "acceptrequest":
        this.statusReceived = true;
        this.statusCancel = false;
        this.dateReceived = new Date();
        break;
      case "shipping":
        this.statusShipping = true;
        this.statusCancel = false;
        this.dateShipping = new Date();
        break;
      case "destination":
        this.statusDone = true;
        this.statusCancel = false;
        this.dateDone = new Date();
        break;
      case "cancelrequest":
        this.statusCancel = true;
        break;
      default: break;
    }
  }

}
