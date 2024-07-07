import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }

    getArticles = (page,size)=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=c57bbaba41084ffe80197d4f933d8a6c&page=${page}&pageSize=${size}`
        return fetch(url).then(res=>res.json())
    }

    async componentDidMount(){
        
        let data = await this.getArticles(1,20)
        this.setState({
            articles:data.articles,
            page:1,
            totalResults:data.totalResults
        })
    }

    handlePrevClick = async ()=>{
        let data = await this.getArticles(this.state.page-1,20)
        this.setState({
            articles:data.articles,
            page: this.state.page-1
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1 <= Math.ceil(this.state.totalResults/20)){
            let data = await this.getArticles(this.state.page+1,20)
            this.setState({
                articles:data.articles,
                page: this.state.page+1
            })
        }
       
    }

  render() {
 
    return (
      <div className='container'>
            <h2>Top Headlines</h2>
            
            <div className="row">
                {
                    this.state.articles.map(item=>{
                        return (
                            <div className="col-md-4 mb-4"  key={item.url}>
                                <NewsItem title={item.title} description={item.description} newsUrl={item.url} imageUrl={item.urlToImage}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-dark'>&#8592; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
            </div>
      </div>
    )
  }
}

export default News
