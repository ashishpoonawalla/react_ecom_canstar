// To store data
localStorage.setItem('Name', 'Rahul');

// To retrieve data
localStorage.getItem('Name');

// To clear a specific item
localStorage.removeItem('Name');

// To clear the whole data stored in localStorage
localStorage.clear();


//storing array in localStorage
var colors = ["red", "blue", "green"];

localStorage.setItem("my_colors", JSON.stringify(colors)); //store colors

var storedColors = JSON.parse(localStorage.getItem("my_colors")); //get them back




const articles = [
    {
        title: 'Article Title',
        publishDate: 1589781780,
        authors: ['Ross Bulat', 'John Smith', 'Zhang Wei'],
    },
    {
        title: 'Article Title 2',
        publishDate: 1589781780,
        authors: ['Ross Bulat', 'John Smith', 'Zhang Wei'],
    }
]

const articlesJsx = Object.values(articlesObj).map((item, index) => 
  <View key={index}>...</View>
);

