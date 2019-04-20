import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inspection-list',
  templateUrl: './inspection-list.component.html',
  styleUrls: ['./inspection-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InspectionListComponent implements OnInit {

  private inspectionListCollection: AngularFirestoreCollection<any>;
  public inspectionListObservable: Observable<any[]>;

  constructor(private afs: AngularFirestore, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Inspection List");
    this.inspectionListCollection = this.inspectionListCollection = this.afs.collection("Activities");
    this.inspectionListObservable = this.inspectionListCollection.valueChanges();
  }
}
