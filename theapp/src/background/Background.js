import React, { Component } from 'react';
import "./Background.css"

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value || ""
        };
    }

        componentDidMount(): void {
            /**fetch('https://randomuser.me/api/?results=500')
                .then(results => {
                    return results.json();
                })
                .then(data => {
                    let pictures = data.results.map((pic) => {
                        return(
                            <div key={pic.results}>
                                <img src={pic.picture.medium} />
                            </div>
                        )
                    })

                this.setState({pictures: pictures});
                console.log("state", this.state.pictures);
                })**/
            console.log("It mounted");
        }


    render() {
       return (
           <div className={"container2"}>
               <div className={"container1"}>
                   Hello world! {this.props.background}
               </div>
           </div>
       )
    }
}