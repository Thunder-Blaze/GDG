const QuoteCards = document.querySelectorAll("#randomquotes .quote-card");
const RandomGIFCard = document.getElementById("RandomGIFImage");

var quotejson = {};
let quotes = 6;
let skip = 0;

async function UpdateQuotes(){
    let url_link = "https://dummyjson.com/quotes?limit="+quotes+"&skip="+skip
    console.log(url_link)
    quotejson = await fetch(url_link)
    quotejson = await quotejson.json()
    quotejson = quotejson.quotes
    console.log(quotejson);
    for (let i = 0; i < quotes; i++) {
        QuoteCards[i].firstElementChild.innerHTML = quotejson[i].quote
        QuoteCards[i].lastElementChild.innerHTML = quotejson[i].author
    }
    skip+=quotes;
}

async function RandomGIF(){
    let tag = "anime";
    let apikey = "7C534T1aRgYyku3d6Z4FRewNIsXhVsRl";
    let url_link = "https://api.giphy.com/v1/gifs/random?api_key="+apikey+"&tag="+tag
    gif = await fetch(url_link)
    gif = await gif.json()
    RandomGIFCard.src = gif.data.images.original.url;
}

UpdateQuotes();
RandomGIF();

// api.giphy.com/v1/gifs/random?api_key=7C534T1aRgYyku3d6Z4FRewNIsXhVsRl&tag=anime