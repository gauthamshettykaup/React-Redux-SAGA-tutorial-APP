import React from 'react';
import { connect } from 'react-redux'
import Iframe from 'react-iframe'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
const wrapper = {
  width: '100%',
  margin: '0'
}
const firstdiv = {
  width: '50%',
  margin: '0',
  float : 'left' 
}
const seconddiv = {
  width: '50%',
  margin: '0',
  float : 'left' 
}
const errorMessage = {
  color: 'red'
}

let NewsItem = ({ article }) => (
  article ?
    <div style={wrapper}>
    <div style={firstdiv}>
    <article style={articleStyle} >
      {article.error && <h2 style={errorMessage}>{article.error}</h2>}
      {article.title && <div>
        <h1>{article.title}</h1>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h2>{article.description}</h2>
        <a href={article.url} target="_blank">READ MORE 12</a>
      </div>}
    </article>
    </div> 
    <div style={seconddiv}>
    {/* <Iframe url="https://www.google.com/"
        width="450px"
        height="450px"
        id="myId"
        display="initial"
        position="relative"/> */}
    { <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        display="initial"
        position="relative"/> }
    </div>
 
    </div> 
    :
    null
    
);

const mapStateToProps = (state) => ({
  article: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


