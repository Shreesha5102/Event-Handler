import React, { Component } from 'react';

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: "",
            venue: "",
            date: "" ,
            isSubmitted: false
         }
    }

    componentDidMount() {
        this.getDetails();
    }

    handlechange = event => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name] : [value]
        });
    }

    getDetails = () => {
        console.log("from DB..");
        fetch("http://localhost:4000/repo/")
        .then( res => res.json())
         .then( (data) => {
             console.log(data);
             this.setState({
                title: data[0].title
             });
         },
         (error) => {
             console.log(error);
         })
    }

    postDetails = (event) => {
        event.preventDefault();
        console.log("Posting...")
        const postData = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                "title": this.state.title,
                "venue": this.state.venue,
                "date": this.state.date
            })
        }
        fetch("http://localhost:4000/repo/", postData )
        .then(res => res.json)
         .then( (data) => {
             this.setState({
                 title: data["title"],
                 venue: data["venue"],
                 date: data["date"]
             })
         },
         (error) =>{
             console.log(error);
         })
    
    }

    render() { 
       
        return ( 
            <div>
                
            <form method="POST" onSubmit={event => this.postDetails(event)}>
                <div>
                    <label>Title:</label>
                    <input type="text" placholder="Title" name="title" onChange={event => this.handlechange(event)} required></input>
                </div>
                <div>
                    <label>Venue:</label>
                    <input type="text" placholder="Venue" name="venue" onChange={event => this.handlechange(event)} required></input>
                </div>
                <div>
                    <label>Date:</label>
                    <input type="Date" name="date" onChange={event => this.handlechange(event)}></input>
                </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
            <div>
                <p>{this.state.title}<br></br>{this.state.venue}<br></br>{this.state.date}</p>
            </div>
            </div>
         );
    }
}
 
export default Data
;