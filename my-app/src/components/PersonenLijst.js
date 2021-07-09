import React, {Component} from 'react';
import Item from "./Item";
import "./styles.css";
import "bootstrap"
import StreepkesLijst from "./TakkenLijst";

let kapoenenPersonen = ["Lemming", "Steenloper", "Wasbeer"];

let WelpenPersonen = ["Vogel", "Spotlijster"];
let FouragePersonen = ["Jan", "Bas"];
export let lijst = [
    {id: 0, title: "Laatste", personen: ["Seriema", "Spotlijster", "Adelaar"]},
    {id: 1, title: "Kapoenen", personen: ["Lemming", "Steenloper", "Wasbeer"]},
    {id: 2, title: "Welpen", personen: ["Vogel", "Spotlijster"]},
    {id: 3, title: "JVK", personen: ["Jan", "Bas"]},
    {id: 4, title: "VK", personen: ["Jan", "Bas"]},
    {id: 5, title: "JINS", personen: ["Jan", "Bas"]},
    {id: 6, title: "Fourage", personen: ["Vogel", "Spotlijster"]},
]


export function updateList(id = 0) {
    const p = document.getElementById("personenLijst")
    p.innerHTML = ""
    console.log(id)
    p.innerHTML = "<li id='persoon' class=\"list-group-item d-flex justify-content-between align-items-center\">\n       " +
        " <div>Lemming</div><span class=\"badge bg-primary rounded-pill\">999</span></li>"
    +
        "<li id='persoon' class=\"list-group-item d-flex justify-content-between align-items-center\">\n       " +
        " <div>Steenloper</div><span class=\"badge bg-primary rounded-pill\">1</span></li>"
    +
        "<li id='persoon' class=\"list-group-item d-flex justify-content-between align-items-center\">\n       " +
        " <div>Wasbeer</div><span class=\"badge bg-primary rounded-pill\">7</span></li>"

}

    export class PersonenLijst extends Component {
    Laatste;
    Kapoenen;
    Welpen;
    JVK;
    VK;
    JINS;
    Fourage;
    state = {
        lijst
    }


    render() {
        const {lijst} = this.state;
        const persons = lijst.map(e => e.personen);
        persons.forEach(x => x.forEach(y => console.log(y)))
        return (
            <div>
                {persons.map(d =>
                    <li id='persoon' className="list-group-item d-flex justify-content-between align-items-center">
                        <div>{d}</div><span className="badge bg-primary rounded-pill">1</span></li>
                )}
            </div>
        )
    }
}

export default PersonenLijst
