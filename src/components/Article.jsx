import React from 'react'

const Article = ({ article }) => {
  //console.log(article)
  return (
    <div>
      {article && (<div>
        <h6>ARTICLE</h6>
        <h1>{article.name}</h1>
        <p>{article.desc}</p>
      </div>)
      }
    </div>
  )
}

export default Article