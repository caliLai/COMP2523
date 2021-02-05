import { Internship } from "./Internship";
import { Student } from "./Student";

export class CustomisedMap {

    //----no touchy-----//
    private googleMap: google.maps.Map;

    private message(pin: google.maps.Marker, message: string): void {
        const infoWindow = new google.maps.InfoWindow({
          content: message,
        });
        pin.addListener("click", () => {
            infoWindow.open(this.googleMap, pin)
      })
    }
    //----------------//


    constructor(divId) {
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
        zoom: 1,
        center: {
            lat: 0,
            lng: 0,
        }
        });
    }

    addPin(pinnable: Student | Internship) {
        let pin = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: pinnable.location.latitude,
                lng: pinnable.location.longitude,
            },
        });
        if (pinnable instanceof Internship){
            this.message(pin, `This is ${pinnable.businessName}'s internship!`)
        } else {
            this.message(pin, `Student: ${pinnable.firstName} ${pinnable.lastName}`)
        }
    }


}
