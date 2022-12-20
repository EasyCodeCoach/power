[meet link](https://meet.google.com/aqj-nugu-xvw)
 ## N/B Why async and await is used?
Async/Await makes it easier to write promises. The keyword 'async' before a function makes the function return a promise, always. And the keyword await is used inside async functions, which makes the program wait until the Promise resolves

## What are req and res in Express?
Both req and res are made available to us by the Express framework. The req object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers. The res object represents the HTTP response that an Express app sends when it gets an HTTP request.

# prerequisites
[mongodb Download](https://repo.mongodb.org/yum/amazon/2/mongodb-org/6.0/x86_64/RPMS/mongodb-org-server-6.0.3-1.amzn2.x86_64.rpm)

# Full stack Javascript
## setting up express 
```javascript
const express = require('express')
const app = express()

const PORT = 8000

app.listent(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})


```

## express Routing
```javascript
const express = require('express')

const app = express()


app.get('/',(req,res) => {
    res.status(200).json("Hello world")
})


const PORT = 8000

app.listent(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})

```

## mongoose setup
[mogoose ODM](https://upload.wikimedia.org/wikipedia/commons/4/40/Mongoose_works_as_an_intermediate_library_between_MongoDB_and_Express.png)

```javascript
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// mongodb connection
mongoose.connect('mongodb://localhost/power',()=>{
    return console.log('Database connected!!')
})

router.get('/',(req,res) => {
    res.status(200).json("Hello world")
})


const PORT = 8000

app.listent(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})

```

## mongoose Database Modelling


```javascript
const express = require('express')

const mongoose = require('mongoose')
const app = express()

// mongodb connection
mongoose.connect('mongodb://localhost/power',()=>{
    return console.log('Database connected!!')
})

// Blog
const userSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:250
    },
     description:{
        type:String,
        required:true,
        maxLength:250
    },
    
     body:{
        type:String,
        required:true,
    },
      author:{
        type:String,
        required:true,
        maxLength:250,
        default:"N/A"
    },
})

app.get('/',(req,res) => {
    res.status(200).json("Hello world")
})


const PORT = 8000

app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})

```



## Performing CRUD operations

```javascript
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// mongodb connection
mongoose.connect('mongodb://localhost/power',()=>{
    return console.log('Database connected!!')
})

// Blog
const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:250
    },
     description:{
        type:String,
        required:true,
        maxLength:250
    },
    
     body:{
        type:String,
        required:true,
    },
      author:{
        type:String,
        required:true,
        maxLength:250,
        default:"N/A"
    },
})
// construct the database model
const Blog = mongoose.model('Blog',blogSchema)

// creating an article
router.post('/article',(req,res)=>{
    const article = new Blog({
        title:req.body.title,
        description:req.body.description,
        author:req.body.author,
        body:req.body.body
    })

   const response =  await article.save()
   return res.status(201).json(response)
})



// get all data
router.get('/article',async(req,res) => {
    // get all users
   const results =  await Blog.find()
    return res.status(200).json(results)
})

// delete data
router.delete('/article/delete/:id',async(req,res) => {
    // get all users
    await Blog.findByIdAndRemove(req.params.id,function(err,doc){
    if (err){
        console.log(err)
    }
    else{
        return res.status(200).json(doc)
    }
   })
 
})
// get Article
router.get('/article/:id',async(req,res) => {
    try{
     const article = await Blog.findById(req.params.id)

     return res.status(200).json(article)
    }
    catch(err){
        return res.status(500).json('server error')
    }
})




// update article
router.put('/article/update/:id',async(req,res) => {
    try{
     const article = await Blog.findOne({_id:id})

     article.title = req.body.title
     article.description = req.body.description
     article.author = req.body.author
     article.body = req.body.body
     
     const response = await article.save()
     
     return res.status(200).json(response)
    }
    catch(err){
        return res.status(500).json('server error')
    }
})


const PORT = 8000

app.listent(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})

```

