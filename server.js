var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne = {
    title: 'Article one ! Kiran Dora',
    heading: 'Article one',
    date: 'sep 25, 2016',
    content: `       <p>
                        This is my first article. And the technology used to write this webApp is JavaScript and HTML, CSS.I can add some more stuff to this and make this a beautiful webApp.
                    </p>
                    <p>
                        This is my first article. And the technology used to write this webApp is JavaScript and HTML, CSS.This has to different from the first paragraph, so i have not copied the same line here.
                    </p>
                    <p>
                        This is my first article. And the technology used to write this webApp is JavaScript and HTML, CSS.This is my third paragraph.
                    </p>`
};

function cearteTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
                <div>
                     <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
        </div>
    </body>
</html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
   res.send(createTemplate(artileOne));
});

app.get('/article-two', function(req,res){
    res.send("Artcile two is requested and will be servered.");
});

app.get('/article-Three', function(req,res){
    res.send("Artcile Three is requested and will be servered.");
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
