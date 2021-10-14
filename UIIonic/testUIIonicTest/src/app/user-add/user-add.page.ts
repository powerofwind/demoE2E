import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.page.html',
  styleUrls: ['./user-add.page.scss'],
})
export class UserAddPage implements OnInit {
  public added: number = 0;
  constructor(private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  // add() {
  //     this.added += 1;
  //     console.log(this.added);
  //     this.router.navigateByUrl("/user-list");
  // }

}
