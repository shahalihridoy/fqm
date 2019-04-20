import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Router } from '@angular/router';

export interface Car {
  EquipmentFamily: string;
  EquipmentIcon: string;
  EquipmentModel: string;
  EquipmentNick: string;
  EquipmetSerial: string;
}

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarListComponent implements OnInit, OnDestroy {

  private temp: AngularFirestoreCollection<Car>;
  carList: Observable<Car[]>;
  searchTerm: string = "";
  sub: Subscription;

  constructor(private router: Router, private cdr: ChangeDetectorRef,public service: SharedService, private afs: AngularFirestore,private title: Title) { }

  ngOnInit() {
    this.title.setTitle("Car List");
    this.temp = this.afs.collection<Car>('Equipment');
    this.carList = this.temp.valueChanges();
    this.sub = this.service.getSearchTerm().subscribe((term: string) => {
      this.searchTerm = term;
      this.cdr.markForCheck();  
    });
  }

  ngOnDestroy() {
    this.searchTerm = "",
    this.sub.unsubscribe();
    // this.cdr.markForCheck();
  }
}
