const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
// Destrectiong
const book = getBook(1);
const books = data

// const {title, author, genres, publicationDate} = getBook(3)
const { title, author, genres, publicationDate, pages } = book;

console.log(title, author, genres, publicationDate);

// with arr
const [firstGenres, secoundGenres] = genres;

console.log(firstGenres, secoundGenres);

// spreed opretor
// set with old genres items
const newGenres = ["set fantsy", ...genres];
newGenres;

// update book object and add some item and change some
const updateBook = {
  ...book,
  date: "1999-9-28",
  pages: 1222,
};
updateBook;

const ternary = pages > 1000 ? "its over of thousend" : "its less of thousend";
ternary;

const arrow = () => console.log(`hello from arrowF`);
arrow();

// falsy = 0, null, undefined, false
console.log(true && "hello doude");
console.log(false && "hello doude");

// || = or
console.log(false || "no data");
console.log("data" || "no data");

// ?? = dont expect null, undefined
console.log(null ?? "no data");
console.log(0 ?? "no data");

function optionalChaining() {
  const reviewsCount = book.reviews?.librarything?.reviewsCount ?? 0;
  const ratingsCount = book.reviews.librarything?.ratingsCount ?? 0;
  reviewsCount;
  ratingsCount;
}
optionalChaining();

// map and ffilter and reducce
const x = [1, 2, 3, 4, 5].map((e) => e * 2);
x;

const mapBook = books.map((dataId) => {
  return dataId.id;
});

mapBook;

// shoule set ({}) for interpreter got it
const getSome = books.map((element) => ({
  title: element.title,
  author: element.author,
  reviews: element.reviews,
}));
getSome;

const longPageHasMovie = books
  .filter((longPage) => longPage.pages > 500)
  .filter((hasMovie) => hasMovie.hasMovieAdaptation);

longPageHasMovie;

const allPages = books.reduce((sum, book) => sum + book.pages, 0)

allPages

// sort method

let arr = [4,5,1,2,3];

// these change the original arr 
// const sortedArr = arr.sort((a, b) => a - b) // usuall way 
// const sortedArrObesite = arr.sort((a, b) => b - a) // obisete  way 

// use slice for dont change original a=
const dontChangeOriginal = arr.slice().sort((a,b) => a - b)

dontChangeOriginal;
arr;
 
// sort from biggest pages 
const sortOfPages = books.slice().sort((a,b) => {
  a.pages - b.pages
})
sortOfPages

// Add  object to array 
const newObject = {
  id: 99,
  title: 'Attak On Titen',
  author: 'issama'
}

const addNewObject = [...books, newObject];
addNewObject;

// delete object from array 
const newObjectAfterDleted = books.filter((book) => book.id !== 3 );
newObjectAfterDleted;

// Update object from array
const newObjectAfterUpdated = books.map((book) => book.id === 1 ?{...book,  pages : 100, author: 'Riner Borack' }: book);
newObjectAfterUpdated;

// Asyncrounas js Promise (fetch data)
// send request to api for get some data
// then get respons and make it json (if request success
// then make my data printd in 

// Asyncrounas js Promise (fetch data) async await
async function getData() {
  const response = await fetch('https://dummyjson.com/users')

  const data = await response.json();

  return console.log(data)
}                       

async function getTodo() {

  const res = await fetch('https://dummyjson.com/comments');  // get data

  const data = await res.json()                            // set data as json hire on data const

  return console.log(data) 
  
}

getData();
getTodo();

console.log('Approved');
