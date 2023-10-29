import { useRef } from "react"
import QuoteData from "../model/quotes"

type QuoteFormProps = {
    onAddQuote: (quoteData: QuoteData) => void
}

const QuotesForm = ({onAddQuote}: QuoteFormProps) => {

    const authorRef = useRef<HTMLInputElement>(null);
    const quoteRef = useRef<HTMLTextAreaElement>(null);
  
    const addButtonClickHandler = (event: React.FormEvent): void => {
      event.preventDefault();
      const quote = new QuoteData(
        // Random number generator for quote id creation
        Math.floor(Math.random()*100000 + 1), 
        quoteRef.current ? quoteRef.current.value : '',
        authorRef.current ? authorRef.current.value: ''
      );
      onAddQuote(quote);
    };
    
  return (
    <form onSubmit={addButtonClickHandler}>
    <div>
      <label htmlFor="author">Author</label>
      <input id="author" type="text" placeholder="Name" ref={authorRef} />
    </div>
    <div>
      <label htmlFor="quote">Quote</label>
      <textarea id="quote" placeholder="Quote body" ref={quoteRef} />
    </div>
    <button type="submit">Add</button>
  </form>
  )
}

export default QuotesForm