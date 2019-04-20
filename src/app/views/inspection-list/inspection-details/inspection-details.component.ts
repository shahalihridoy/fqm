import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspection-details',
  templateUrl: './inspection-details.component.html',
  styleUrls: ['./inspection-details.component.scss']
})
export class InspectionDetailsComponent implements OnInit {

  public checkList: Observable<any>;

  constructor(private afs: AngularFirestore,private route: ActivatedRoute, private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Inpection Details");
    this.checkList = this.afs.doc("Activities/"+this.route.snapshot.params.id).valueChanges();
  }
}
