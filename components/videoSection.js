import React from 'react'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

export default class VideoSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
            opacity: 1,
        }
    }
    // switchShow = ()=>{
    //     let new_opacity = this.state.show ? 0: 1;
    //     this.setState({
    //         opacity: new_opacity,
    //     }, ()=>{
    //         this.setState({
    //             show: !this.state.show,
    //         })
    //     })
    // }
    switchShow = ()=>{
        this.setState({
            show: !this.state.show,
        })
    }
    setSwitchShow = (val)=>{
        this.setState({
            show:val,
        })
    }
    render(){
        let noHeight =""// this.state.show ? "section ": "u-noHeight section";
        // let width = this.state.show ? 0: "100;"
        let extra = this.state.show ? "": <br/> + " Presione para ver"
        //look at https://codesandbox.io/s/wy4rnqly2k?file=/src/styles.css
        return(
            <div>
                <div className ={"sectionToggler u-fancyFont"} onClick={this.switchShow}>
                    <span className ={"u-xxLargeFont"}>{this.props.sectionType}</span>
                    {
                        !this.state.show && 
                        <>
                            <br/>
                            <span className="u-">(Presione para ver)</span>
                        </>
                    }
                </div>

                {
                // this.state.show &&
                // <TransitionGroup in={this.state.show}> 
                <CSSTransition
                in={this.state.show}
                timeout={1000}
                unmountOnExit
                appear
                classNames="video-section"
                >  
                    <div>
                        {this.props.elements}
                    </div>
                </CSSTransition>
                

                // this.props.elements.map((element, i)=>
                //     <CSSTransition
                //     in={this.state.show}
                //     appear={true}
                //     key={i}
                //     timeout={1000}
                //     classNames={"video-section"}
                //     unmountOnExit
                //     // onEnter={() => this.setSwitchShow(false)}
                //     // onExited={() => this.setSwitchShow(true)}
                //     >
                //         {element}
                //     </CSSTransition> 

                // )
                //  {/* </TransitionGroup>  */}
                 
                }

            </div>
        );  
    }
}

// const styles = {
//     section: {
//         transition: 'height 2s', 
//     }
// }