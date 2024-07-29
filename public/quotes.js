let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let btn = document.getElementById('newquotes');
console.log(btn);
const realdata = '';
const getNewQuotes = (realdata)=>{
    const rnum = Math.floor(Math.random()*20);
    quotes.innerHTML = `${realdata[rnum].text}`;
    author.innerHTML = `${realdata[rnum].author}`;
}    
const getQuote = async ()=>{
    const api = 'https://type.fit/api/quotes';
    try{
      const data = await fetch(api);
      const realdata = await data.json();
      getNewQuotes(realdata);
    }catch(err){
        console.log(err);
    }
}
btn.addEventListener('click',getQuote);
getQuote();
