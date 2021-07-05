import React, { Component } from 'react';
import Card from './Card';
import './ListNews.scss';
import axios from "axios";
const apiKey= process.env.REACT_APP_API_KEY;


class ListNews extends Component {
  constructor(props){
    super(props);
    this.state = {
     news: []
    };
  }

  async componentDidMount() {
  const URL = `https://newsapi.org/v2/top-headlines?country=de&apiKey=${apiKey}`
  let res = await axios.get(URL)
  let data = res.data;
  await this.setState({ news: res.data.articles.slice(0,5) });

  console.log(data)
  };

  removeNews = (i) => {
    let filteredArray = this.state.news.filter((_, j) => i !== j);
    this.setState({ news: filteredArray });
  };

  renderNews = () => {
  if(this.state.news.length>0){

    return this.state.news.map((news, i) => (
      <Card news={news} key={i} remove={() => this.removeNews(i)} />
    ))
    }else{
      return null;
    }
  }
  
  render() {
    return <section>{this.renderNews()}</section>
  }
}

export default ListNews;