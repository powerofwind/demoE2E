import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  public rider = [
    { "name": "aaa", "status": "เปิดรับงาน" },
    { "name": "bbb", "status": "เปิดรับงาน" },
    { "name": "ccc", "status": "ปิดรับงาน" },
  ];
  public searchWord: string;
  public calculate: number = 1;
  public number: string;
  public signalr: string;
  public riderList = [];
  public txs = [{ "_id": 999, "name": "โอนให้ ธ.กสิกร", "amount": "5" }];
  public txLog = [];

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.rider);
    this.number = this.activatedRoute.snapshot.paramMap.get('number');
    // console.log(this.number);
    // console.log(this.calculate);

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.riderList = [];
    this.riderList.push(this.rider)
    this.signal();
    console.log(this.riderList);
  }

  search() {
    let result = this.rider.find(it => it.name == this.searchWord);
    if (result) {
      console.log(result);
      this.riderList = [];
      let xs = [];
      xs.push(result)
      this.riderList.push(xs);
      console.log(this.riderList);
    }
    else {
      this.riderList = [];
    }
  }

  signal() {
    setTimeout(() => {
      this.signalr = " Hello signal R มาแล้วจ้าาาาา"
      this.txLog.push(this.txs)
    }, 5000);
  }

}
