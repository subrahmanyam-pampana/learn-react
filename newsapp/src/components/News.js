import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static propTypes= {
        catagory:PropTypes.string,
        pageSize:PropTypes.number,
        country:PropTypes.string
    }

    static defaultProps = {
        catagory:'general',
        pageSize:5,
        country:'in'
    }

    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }

    getArticles = (page)=>{
        this.setState({loading:true})
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&catagory=${this.props.catagory}&apiKey=c57bbaba41084ffe80197d4f933d8a6c&page=${page}&pageSize=${this.props.pageSize}`
        return fetch(url).then(res=>res.json()).then(res=>{
            this.setState({loading:false})
            return res;
        })
    }

    async componentDidMount(){
        
        let data = await this.getArticles(1)
        this.setState({
            articles:data.articles,
            page:1,
            totalResults:data.totalResults
        })
    }

    handlePrevClick = async ()=>{
        let data = await this.getArticles(this.state.page-1)
        this.setState({
            articles:data.articles,
            page: this.state.page-1
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1 <= Math.ceil(this.state.totalResults/this.props.pageSize)){
            let data = await this.getArticles(this.state.page+1)
            this.setState({
                articles:data.articles,
                page: this.state.page+1
            })
        }
       
    }

  render() {
 
    return (
      <div className='container'>
            <h1 className='my-4'>Top Headlines</h1>
            { this.state.loading && <Spinner />}
            <div className="row">
                {  !this.state.loading && 
                    this.state.articles.map(item=>{
                        return (
                            <div className="col-md-4 mb-4"  key={item.url}>
                                <NewsItem title={item.title} description={item.description} newsUrl={item.url} imageUrl={item.urlToImage}/>
                            </div>
                        )
                    })
                }
            </div>
            <div className="container d-flex justify-content-between mb-4">
                <button disabled={this.state.page<=1} onClick={this.handlePrevClick} className='btn btn-dark'>&#8592; Previous</button>
                <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next &#8594;</button>
            </div>
      </div>
    )
  }
}

export default News
