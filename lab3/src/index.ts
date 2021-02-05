// send coffee

import faker from "faker";
import {} from 'googlemaps';

import { Student } from "./Student";
import { Internship } from "./Internship";
import { CustomisedMap } from "./CustomisedMap";

console.log("this is working");

const map = new CustomisedMap("map");
const student = new Student();
const internship = new Internship();

map.addPin(student);
map.addPin(internship);
