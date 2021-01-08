import React from 'react'
import ReactPlayer from 'react-player'

export default class YoutubeVideo extends React.Component{
    constructor(props){
        super(props);
        // console.log("created!")
        // this.state = {
        //     elements: this.props.elements;
        // }
        this.state = {
            checked: false, // to see if it's a favorite
        }

    }
    checked = ()=>{
        this.setState({
            checked: !this.state.checked,
        })
    }
    render(){
        return(
            <div className={`box-container center ${this.state.checked && 'boxFavorite'}`} onClick={this.checked}>
                <section className="two-flex">
                    <h2><strong>{this.props.info.title}</strong></h2> 
                    <p>{this.props.info.description}</p>
                </section>
                <section className="one-flex youtube-video">
                    {/* <div className="one-flex"></div> */}

                    {/* <div className="video-container"> */}
                        <ReactPlayer
                        url = {'https://www.youtube.com/watch?v='+this.props.info.id}
                        controls={true}
                        // width={400}  
                        light={true}
                        // className="youtube-video"
                        width={"100%"}
                        // height={"100%"}
                        />
                    {/* </div> */}
                    {/* <div className="one-flex"></div> */}

                </section>

            </div>
        )
    }
}