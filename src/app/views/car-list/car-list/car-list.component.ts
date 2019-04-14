import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

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
export class CarListComponent implements OnInit {

  private temp: AngularFirestoreCollection<Car>;
  private carList: Observable<Car[]>;

  constructor(private afs: AngularFirestore,private title: Title) { }

  ngOnInit() {
    this.temp = this.afs.collection<Car>('Equipment');
    this.carList = this.temp.valueChanges();
    // this.title.setTitle("fuck off");
  }

}
