import React, { Component } from "react";
import NewItem from "./NewItem";
// rce -react class based

export class News extends Component {
  //  Components are like javascript functions.they accept arbitrart inputs(called "props") and return React elemnts descriving what should appear on the screen.
  constructor() {
    super();
    console.log("Hello i am a contructors from News Component");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2995580fd2cc4799a920287ab1146d79&page=1";
    // it is a url to fetch news
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

   handlePrevClick= async()=>{
    console.log("Previous");
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2995580fd2cc4799a920287ab1146d79J&page=${this.state.page-1}`;
  // it is a url to fetch news
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);



    this.setState({
      page:this.state.page - 1,
     articles:parsedData.articles  
    })
  }

  
   handleNextClick=async()=>{
    console.log("Next");
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=2995580fd2cc4799a920287ab1146d79J&page=${this.state.page+1}`;
  // it is a url to fetch news
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);



    this.setState({
      page:this.state.page + 1,
      articles:parsedData.articles
    })
  }


  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            //MAP is a higher order array method
            // Populating the every article's object with the help of map

            return (
              <div className="col-md-4" key={element.url}>
                {/* If we are iterating elements with the help of .map then we have to give unique key to every element..here we have the URL unique */}
                <NewItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div  className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" classname="btn-btn-dark " onClick={this.handlePrevClick}>
          &larr; Previous
          </button>
          <button type="button" classname="btn-btn-dark" onClick={this.handleNextClick}>
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
