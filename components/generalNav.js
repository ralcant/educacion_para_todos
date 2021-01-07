import 'react'
// import { Router, Link } from "@reach/router"
import Link from "next/link"

export default class GeneralNav extends React.Component{
    constructor(props){
        super(props);
    }
    getAllSecondaryLinks = ()=>{
        return this.props.secondary.map((info, i) =>{
            return(
                <Link href={info.path} >
                    <a className="NavBar-link">{info.name}</a>
                </Link>
            )
        })
    }
    render(){
        // let is_sticky = this.props.sticky;
        // console.log(is_sticky)
        let is_sticky = true;
        return( 
            <nav className={`${is_sticky && "NavBar-sticky"} NavBar-container `}>
                <div className="NavBar-title u-inlineBlock">Educación para todos</div>
                <div className="NavBar-linkContainer u-inlineBlock">
                    <Link href={this.props.main.path}>
                        <a className="NavBar-link">{this.props.main.name}</a>
                    </Link>
                    {this.getAllSecondaryLinks()}
                </div>
            </nav>
        )
    }
}