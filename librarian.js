var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf " },
  { title: "Code complete", year: "1989", author: "Steve McConnell", publisher: "M. O. Company" }
   /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library.push( book );
  return library;
}
//
var newBook = { title: "Two hour of code", year: "1989", author: "Steve McConnell", publisher: "M. O. Company" };
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  
  //add code
    var n = library.length;
  var temp;
  for (var i = 0; i <= n-1; i++) {
    for (var j = 0; j <= n-1; j++) {
      if (library[i].author < library[j].author) {
        temp = library[i];
        library[i] = library[j];
        library[j] = temp;
      }
    }
  }
return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
    var pattern=new RegExp(""+title,"i");
    var x=[];
    for ( i in library)
        {
            var st=library[i].title;
            if(st.search(pattern)!=-1)
            {
                x.push(library[i]);
            }
        }
    
    return x;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));