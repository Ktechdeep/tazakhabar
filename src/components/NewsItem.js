import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
       let {description , title} = this.props;

        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src="https://gizmodo.com/app/uploads/2023/06/4b1fc4c2df74bfac346230a21592d2ef.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}.</p>
                            <a href="/newdetails" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
