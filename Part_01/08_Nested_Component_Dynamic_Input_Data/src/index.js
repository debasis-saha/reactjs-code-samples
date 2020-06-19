import React from 'react';
import ReactDOM from 'react-dom';

var borderStyle= {border:'solid thin',fontSize:'25px'};

let bookList = [
    {title:"The Sun Also Rises", author:"Ernest Hemingway", totalPages:245, price:750.00},
    {title:"White Teeth", author:"Zadie Smith", totalPages:185, price:500.00},
    {title:"Charlie and the Chocolate Factory", author:"Roald Dahl", totalPages:345, price:500.00},
    {title:"Great Expectations", author:"Great Expectations", totalPages:215, price:600.00},
    
];


const BookDetails = ({bookTitle,author,totalPages,price}) => {
    return (
        <tr  style={borderStyle}>
            <td style={borderStyle}>{bookTitle}</td>
            <td style={borderStyle}>{author}</td>
            <td style={borderStyle}>{totalPages}</td>
            <td style={borderStyle}>{price}</td>
        </tr>
    )
}

const BookShop = ({books}) =>{
    return(
        <div style={{width:'800px'}}>
            <center>
                <h1>Booklist</h1>
            </center>
            <table width="100%" cellSpacing="0" cellPadding="5">
                <thead>
                    <tr>
                        <td style={borderStyle}>Book's Title</td>
                        <td style={borderStyle}>Author Name</td>
                        <td style={borderStyle}>Total Pages</td>
                        <td style={borderStyle}>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(
                            (book, i) => <BookDetails 
                                        key ={i}
                                        bookTitle={book.title} 
                                        author={book.author} 
                                        totalPages={book.totalPages} 
                                        price={book.price}/>
                        )
                    }
                    </tbody>
            </table>
        </div>
    )
}

ReactDOM.render(
    <BookShop books={bookList}/>,
    document.getElementById('root')
)