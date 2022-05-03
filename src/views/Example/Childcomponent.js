import React from "react";

class Childcomponent extends React.Component {
    state = {
        firstName: '',
        lastName: ''
    }

    handlechangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })

    }

    handlechangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handlesubmit = (event) => {
        event.preventDefault();
        console.log('>> check props:', this.props)
    }


    render() {
        console.log('>> check props:', this.props)
        // let name = this.props.name;
        // let age = this.props.age;
        // key:value
        let {name,age,address,arrJobs } = this.props;
        return (
            <>
                <div className="job-lists">
                {
                    arrJobs.map((item, index)=>{
                        return (
                            <div>
                                {item.title} - {item.salary}
                            </div>
                        )
                    }) 
                }
                </div>
            </>
        );
    }
}

export default Childcomponent;
