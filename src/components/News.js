import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {

    articles = []


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
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7ade39365aeb40ec9f71ab858cb50764&page=1&pageSize=${this.props.pageSize}`;
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
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7ade39365aeb40ec9f71ab858cb50764&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7ade39365aeb40ec9f71ab858cb50764&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
