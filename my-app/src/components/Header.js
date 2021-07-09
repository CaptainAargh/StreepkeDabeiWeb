import React from 'react'

export const Header = () => {

    const headerStyle = {

        width: '100%',
        padding: '2%',
        backgroundColor: "red",
        color: 'white',
        textAlign: 'center'
    }

    return (
        <>
            <button type="button" className="btn btn-success" className="collapsible btn btn-success"
                    id="overzicht">Overzicht
            </button>
            <div className="overzicht">
                <div className="card text-center">

                    <div className="card-body">
                        <h5 className="card-title">Overzicht streepkes</h5>
                        <ul className="list-group">
                            <li className="list-group-item">Lemming 99</li>
                            <li className="list-group-item">Steenloper 2</li>
                        </ul>
                        <a href="#" className="btn btn-success" id="bevestig">Bevestig</a>
                        <div className="card-footer text-muted">
                            Laatste streepke 2 minuten geleden
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
