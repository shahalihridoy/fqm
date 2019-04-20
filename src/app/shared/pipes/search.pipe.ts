import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "src/app/views/car-list/car-list/car-list.component";

@Pipe({
  name: "search"
})
export class SearchPipe implements PipeTransform {
  transform(value: [], term?: string): any {
    
    if(value && term) {

      return value.filter((car: Car) => {
        
        if(car.EquipmentFamily)
          if(car.EquipmentFamily.toLowerCase().match(term.toLowerCase()))
            return  true;

        if(car.EquipmentModel)
          if(car.EquipmentModel.toLowerCase().match(term.toLowerCase()))
            return  true;

        if(car.EquipmentNick)
          if(car.EquipmentNick.toLowerCase().match(term.toLowerCase()))
            return  true;
            
        if(car.EquipmetSerial)
          if(car.EquipmetSerial.toLowerCase().match(term.toLowerCase()))
            return  true;

          return false;
      });
    }
      return value;


  }
}
