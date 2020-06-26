const express = require('express');
// const indexRouter = express.Router();


const app = express();

const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/admin',name:'Add Book'
    },
    {
        link:'/newAuthor', name:'Add Author'
    },
    // { 
    //     link:'/signup', name:'Signup'
    // },
    // {
    //     link:'/login', name:'Login'
    // },
    {
        link:'/', name: 'Logout'
    }
    
];

const navAdmin = [
    { 
        link:'/signup', name:'Signup'

    },
    {
        link:'/login', name:'Login'
    }
]

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const adminRouter = require('./src/routes/adminRoutes')(nav);
const newAuthorRouter = require('./src/routes/newAuthorRoutes')(nav);
const loginRouter = require('./src/routes/loginRoutes')(navAdmin);
const signupRouter = require('./src/routes/signupRoutes')(navAdmin);
const editBookRouter = require('./src/routes/editBookRoutes')(nav);
const delBookRouter = require('./src/routes/delBookRoutes')(nav);
// const editAuthorRouter = require('./src/routes/editAuthorRoutes')(nav);


app.use(express.urlencoded({extended:true}));  //middleware
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/admin',adminRouter);
app.use('/newAuthor',newAuthorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/editBook',editBookRouter);
app.use('/delBook',delBookRouter);
// app.use('/editAuthor',editAuthorRouter);
// app.use('/sign',signRouter);



app.get('/', function(req,res){
    res.render("home",
    {
        // nav,
        navAdmin, 
        title: 'Central Library'
    });
});
app.post('/index', function(req,res){
    res.render("index",
    {
        nav,
        // navAdmin, 
        title: 'Central Library'
    });
});
app.get('/index', function(req,res){
    res.render("index",
    {
        nav,
        title: 'Central Library'
    });
});



app.listen(5000); 