import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

    articles=[]
    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        console.log("constructor")
        super()
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1

        }
    }


    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aaabd4d50e6c4703a39cc2bc54d202e5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ 
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults 
        })
        this.setState({ loading: false })

    }

    handleNextClick = async () => {
        console.log("next")
        
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aaabd4d50e6c4703a39cc2bc54d202e5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({ 
            page: this.state.page + 1,
            articles: parsedData.articles ,
            loading:false
        })

    }


    handlePrevClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aaabd4d50e6c4703a39cc2bc54d202e5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })

    }

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>TazaKhabar - Top Headlines</h1>
                <div className="row">
                    { this.state.loading ? <Spinner /> : this.state.articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author}></NewsItem>
                        </div>
                    })
                    }
                </div>

                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News
