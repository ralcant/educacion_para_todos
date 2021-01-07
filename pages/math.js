import React from 'react'
import YoutubeVideo from "../components/youtubeVideo"
import MainNav from "../components/mainNav"
import video_ids from "../video_ids.json"
import VideoSection from "../components/videoSection"

class Math extends React.Component{
    constructor(props){
        super(props);
        this.links = this.getAllLinks()
        this.videosRef = React.createRef();
        this.mainPageRef = React.createRef()
        this.navBarRef = React.createRef();
        this.state = {
            navBarSticky: false,
        }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = ()=>{ //from https://dev.to/dalalrohit/sticky-navbar-from-scratch-using-react-37d5
        if (window.pageYOffset > this.navBarRef.offsetTop){
            if (!this.state.navBarSticky){
                this.setState({
                    navBarSticky: true
                })
            }
        } else {
            if (this.state.navBarSticky){
                this.setState({
                    navBarSticky: false
                })
            }
        }
    }
    getAllLinks = ()=>{
        return video_ids["videos"] //s.map(x => x.id)
    }
    getAllVideos = ()=>{
        // return this.links;
        return this.links.map((info, i) =>(
            // <div>
                <YoutubeVideo 
                info = {info}
                key = {i}
                />

            // </div>

            ))
    }
    scroll = (ref)=>{ //from https://stackoverflow.com/questions/44375093/handling-scroll-animation-in-react
        ref.current.scrollIntoView({behavior: "smooth"})
    }
    render(){
        return(
            <div>

                <MainNav
                sticky = {this.state.navBarSticky}
                ref={this.navBarRef}
                />
                <div ref={this.mainPageRef} className="u-fullScreen u-textCenteredScreen">
                    <h1 className="introWidth center">Matemática Olímpica</h1>
                    <p className="u-textCenter introWidth">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at enim nunc. Suspendisse et risus ligula. Nulla lacinia lacus at nulla consectetur maximus. Morbi tempor leo sed ante bibendum malesuada. Nunc velit tortor, efficitur non arcu sed, vestibulum condimentum libero. Morbi semper est nunc, a feugiat ligula scelerisque a. Maecenas maximus pretium justo, eget bibendum elit sagittis a. In at ultricies eros, ac commodo ex.
                        <br/>
                        Donec dapibus nibh et varius ornare. Mauris posuere massa vitae dolor fringilla suscipit. Praesent consequat pretium felis quis egestas. Aliquam at mi at justo maximus tempor vitae nec elit. Sed maximus nisl sed interdum dignissim. Praesent ut metus ut mi tempor iaculis. Nunc in ipsum sed turpis sodales blandit. Cras dignissim purus vitae pulvinar mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                    </p>
                    <button className="u-xxxLargeFont u-transparentBg" onClick={()=>{this.scroll(this.videosRef)}}>&#x21d3;</button>

                </div>
                <hr/>
                <div  ref={this.videosRef} className="u-fullScreen all-box-container center">
                    <br/>
                    <h1> Videos:</h1>
                    <button className="u-xxxLargeFont u-transparentBg" onClick={()=>{this.scroll(this.mainPageRef)}}>&#x21d1;</button>
                    <div className="all">
                        <VideoSection
                        elements = {this.getAllVideos()}
                        sectionType = {"Inducción Matemática"}
                        />
                        <VideoSection
                        elements = {this.getAllVideos()}
                        sectionType = {"Teorema de casillas"}
                        />
                        {/* {this.getAllVideos()} */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Math