import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { description, title, imageUrl, newsUrl, publishedAt, author, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ }}>
                        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ zIndex: "1", left: "90%" }}>
                            {source}
                         </span>
                    <img src={!imageUrl ? "https://images.macrumors.com/t/_LQMOI-hcrbR_hTxTl0Jj3tQVhI=/800x0/article-new/2025/02/studio-display-new-purple.jpeg?lossy" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} 
                        </h5>
                        <p className="card-text">{description}.</p>
                        <a rel="noreferrer" target="_blank" href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author}</small></p>
                        <div className="card-footer">
                            <small className="text-body-secondary">Last updated {new Date(publishedAt).toGMTString()}</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
