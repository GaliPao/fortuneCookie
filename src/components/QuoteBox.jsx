import React from 'react'
import './styles/QuoteBox.css'

const QuoteBox = ({handleChangeQuote, quote}) => {
  return (
    <section className='quoteBox'>
        <h1> Fortune Cookies </h1>

        <section className='phraseBox'>
            <button className='bottonBox' onClick={handleChangeQuote}>Try you luck!</button>
            <article>
                <p>
                    {quote.phrase}
                </p>
            </article>
        </section>

        <footer className='quoteFooter'><h4> Font: {quote.author} </h4></footer>      
    </section>
  )
}

export default QuoteBox
