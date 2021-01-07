import 'react'
import GeneralNav from "./generalNav"

export default class MainNav extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let secondary_links = [
            {
                name: "Mate Olímpica",
                path: "/math"
            },
            {
                name: "Ciencias de la computacion",
                path: "/cs"
            }
        ]
        return( 
            <GeneralNav
            main = {{name: "Inicio", path: "/"}}
            secondary = {secondary_links}
            sticky = {this.props.sticky}
            />
        )   
    }
}