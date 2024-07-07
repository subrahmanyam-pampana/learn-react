import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles: [],
            loading:false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=c57bbaba41084ffe80197d4f933d8a6c"
        let data = await fetch(url).then(res=>res.json())
        this.setState({
            articles:data.articles
        })
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
      </div>
    )
  }
}

export default News
