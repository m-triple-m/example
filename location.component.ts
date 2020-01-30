import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  registerForm;
  divs = [{name: 'lucknow', active: false} ,{name: 'mirzapur', active: false}, {name: 'rog', active: false}]
  constructor(private locationService: LocationService, private formBuilder: FormBuilder) {
   }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      city : '',
      totalSize : 0,
      sizes : this.formBuilder.group({
        size_30 : 0,
        size_50 : 0 
      }),
      prices : this.formBuilder.group({
        size_30 : 0,
        size_50 : 0 
      }),
    });
  }

  toggleCity(index){
    console.log('city toggled');
    // console.log(this.divs.map)
    this.divs[index].active = true;
  }

  onFormSubmit(formdata){
    console.log(formdata);
    this.locationService.addLocation(formdata).subscribe(message => console.log(message));
  }

}
