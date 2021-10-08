
fetch("http://localhost:3000/book")
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch("http://localhost:3000/book", {
  method: "POST",
  body: JSON.stringify({
      bookname: "Java Script In brief",
      id:"16",
      author: "Tom Hanks",
      datepublished: "2020-12-04",
      description: "JavaScript lies at the heart of almost every modern web application.",
      "category": [
        "Educational",
        "Computer Science"
      ],
      "cost": "50"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
 
 
fetch("http://localhost:3000/book/11", {
  method: "DELETE",
}).then(res => {
    if(res.status === 404){
        console.log("404 Not Found")
    } else if (res.status === 200) {
        alert("book has been deleted")
        return res.json()
    }
}); 
