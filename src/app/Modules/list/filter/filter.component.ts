import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  filterObj:any = {}

  @Input() newTableData : any;
  // @Input() hddList : any;
  // @Input() locationList : any;
  // @Input() ramType : any;
  // @Input() hddRange : any;

  @Output() isclick = new EventEmitter()

  location : any;
  ramSize : any;
  ramSizeRange : any;
  ramType : any;
  hddSize : any;
  hddType : any;
  locationList : any;
  ramSizeList : any;
  ramTypeList : any;
  hddSizeList : any;
  hddTypeList : any;
  isChecked:any = false
  constructor() { }

  ngOnInit(): void {
    // this.newTableData = JSON.parse(this.newTableData);
    this.ramSizeList = [ ... new Set(this.newTableData.map((s:any)=>s.ramSize))];   
    this.ramTypeList = [ ... new Set(this.newTableData.map((s:any)=>s.ramType))];   
    this.hddSizeList = [ ... new Set(this.newTableData.map((s:any)=>s.hddSize))];   
    this.hddTypeList = [ ... new Set(this.newTableData.map((s:any)=>s.hddType))];   
    this.locationList = [ ... new Set(this.newTableData.map((s:any)=>s.location))]; 
  }

  onFilter(){
    this.filterObj = {
      ramSize:this.ramSize ,
      ramSizeRange:this.ramSizeRange,
      ramType:this.ramType ,
      hddSize:this.hddSize ,
      hddType:this.hddType,
      location:this.location
    }
    this.isclick.emit(this.filterObj);
  }

  onClear(){
    this.ramSize = '' 
    this.ramSizeRange = ''
    this.ramType = ''
    this.hddSize = ''
    this.hddType = ''
    this.location = ''
    this.isclick.emit(this.filterObj);
    this.onFilter()
  }

  updateSetting(){
    // this.gridsize = event.value;
  }

  updateHdd() {
    
  }
  updateLocation(){

  }
}
