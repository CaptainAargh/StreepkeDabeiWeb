import React, {Component} from 'react';
import "./styles.css";
import "bootstrap"
import { updateList } from "./PersonenLijst";

export let lijst = [
    {id: 0, title: "Laatste", personen: ["Seriema", "Spotlijster", "Adelaar"]},
    {id: 1, title: "Kapoenen", personen: ["Lemming", "Steenloper", "Wasbeer"]},
    {id: 2, title: "Welpen", personen: ["Vogel", "Spotlijster"]},
    {id: 3, title: "JVK", personen: ["Jan", "Bas"]},
    {id: 4, title: "VK", personen: ["Jan", "Bas"]},
    {id: 5, title: "JINS", personen: ["Jan", "Bas"]},
    {id: 6, title: "Fourage", personen: ["Vogel", "Spotlijster"]},
]
export function klikOpTak(list) {
    console.log(list)
    list.innerHTML = ""
    list.innerHTML = TakkenLijst

}
export class TakkenLijst extends Component {
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
            <>
                {lijst.map(p =>
                    <a className="nav" onClick={updateList} key={p.id} id='takElement'>{p.title}</a>
                )}
            </>

        )
    }

}

export default TakkenLijst
