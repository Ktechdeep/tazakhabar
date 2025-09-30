import React, { Component } from 'react'

export class NewsItem extends Component {


    constructor () {
        super()
        this.state = {
            articles: this.articles,
            loading:false
            
        }
    }

    render() {
       let {description , title, imageUrl, newsUrl, publishedAt, author} = this.props;  
        return (
            <div className='my-3'>
                <div className="card" style={{width: "18rem"}}>
                    <img src = {imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}.</p>
                            <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
