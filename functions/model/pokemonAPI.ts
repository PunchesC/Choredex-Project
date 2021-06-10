import {ObjectId} from "mongodb"

export default interface Pokemon{
  _id?: ObjectId;
  name: string;
  url:string;
}