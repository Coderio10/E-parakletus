import React from 'react';
import '../CSS/Home.css';
import '../CSS/Navbar.css';
import img from '../images/profile.jpeg'
import Data from '../Data/questions-data'

const Page = () => {

    const QuestionElement = Data.map(data => {

      const questionTags = data.tags.map((tag, index) => {
        return (
          <span key={index}>{tag}</span>
        )
      })      

      return (
        <div className="question-sec">
          <div className="question-votes">
            <p>{data.votes} votes</p>
            <p>{data.answers} answers</p>
            <p>{data.views} views</p>
          </div>
          <div className='question-container'>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <div className='question-tag-and-author'>
              <div className='question-tag-sec'>
                {questionTags}
              </div>
              <div className='question-author-sec'>
                <img src={img} />
                <p className='question-author'>{data.author}</p>
                <p >{data.time}</p>
              </div>
            </div>
          </div>
        </div>
      )
    })
  
    return (
      <div className='home'>
        <section className='sec-1'></section>
        <section className='sec-2'>
          {/* Ask Question */}
          <div className='ask-sec'>
            <h1>Top Question</h1>
            <button>Ask Question</button>
          </div>
          {/* categories */}
          <div className='ask-cart'>
            <span>Popular</span>
            <span>Latest</span>
            <span>Rated</span>
          </div>
            {QuestionElement}
        </section>
        <section className='sec-3'></section>
      </div>
    )
}

export default Page