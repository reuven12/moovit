import  mongoose  from "mongoose";

export interface IBus {
  line_number:Number,
  bus_color:String,
  speed:Number
  stationsList: Number[]
  }