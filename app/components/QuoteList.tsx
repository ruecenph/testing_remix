import QuoteData from "../model/quotes"

type QuoteProps = {
    quote: QuoteData,
    onRemove: (id: number) => void
}

type QuoteListProps = {
    quotes: QuoteData[],
    onRemove: (id: number) => void

}

const Quote = ({quote, onRemove}: QuoteProps) => {
    return (
    <div onClick={onRemove.bind(null, quote.id)}>
      <p><i>{quote.body}</i></p>
      <p>- {quote.author}</p>
    </div>
    )
}


const QuoteList = ({quotes, onRemove}: QuoteListProps) => {
    const allQuotes = quotes.map(quote => {
        return <Quote quote={quote} key={quote.id} onRemove={onRemove} />
      });
    
      return (
        <div>
          {allQuotes}
        </div>
      );
}

export default QuoteList