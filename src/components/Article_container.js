import React from 'react'
import {ArrowArticle} from '../asset/img_article_idex.js'
import { Link } from 'react-router-dom';
import './Article_container.css'


const Article_container = ({classType, article_img, context, link_page}) => {
  return (
    <div className={classType}>
      <img className='article_pic'  src={article_img}/>
      <div className='article_context'>
        <p >{context}</p>
        <div>
          <Link to={link_page}><img src={ArrowArticle} /></Link>
        </div>
        </div>      
    </div>
  )
}

export default Article_container
