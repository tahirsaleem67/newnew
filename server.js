let myExpress = require('express');

let app = myExpress();

app.use(myExpress.json())
let path = require("path")

let port = process.env.port || 3010
app.listen(port, function () {

    console.log("server live ho gya")

})

let token = require('jsonwebtoken');

let multer = require('multer');
let fs = require('fs')


const UserPics = multer.diskStorage({

    destination: function (req, file, cb) {

        let path = './server/pictures/' + req.body.email;

        let folderParaHai = fs.existsSync(path);

        if (folderParaHai == false) {
            fs.mkdir(path, function () {

                cb(null, path);

            });
        } else {
            cb({ code: 300, message: "User already Exist " }, null);
        }

    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const Userupload = multer({ storage: UserPics })

/////////////////////////////////////////////////////////

const coursePic = multer.diskStorage({

    destination: function (req, file, cb) {

        let adpath = './server/pictures/';
        cb(null, adpath)
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const Course = multer({ storage: coursePic })

////////////////////////////////////////////////////////////


require("./model/db")
let SignupUsers = require('./model/user')
let Contact = require('./model/contact');
let Courses = require("./model/courses")
let Services = require("./model/services")
let Gallery = require("./model/gallery")


app.post('/session', async (req, res) => {

    token.verify(req.body.token, "hahahaha", async function (err, dataObj) {

        if (dataObj) {

            let user = await SignupUsers.findById(dataObj.tokenId)

            res.json(user)
        }
    })

})



app.post("/signupUser", Userupload.single('pic'), async (req, res) => {
    try {
        let newUser = new SignupUsers(req.body)

        newUser.pic = '/' + req.body.email + "/" + req.file.originalname;

        await newUser.save();

        res.end("ho gya")
    } catch (e) {
        console.log(e)
    }

})


app.post('/login', async function (req, res) {
    try {
        let userMilgya = await SignupUsers.findOne({ email: req.body.email, password: req.body.password || email == "asd@gmail.com" && password == "123456" })
        if (userMilgya) {

            token.sign({ tokenId: userMilgya._id }, "hahahaha", { expiresIn: "1y" }, async (err, myToken) => {

                res.json({ userMilgya, myToken })

            })
        } else {
            res.end("Not find")
        }
    } catch (e) {
        console.log(e)
    }
})

app.delete('/deleteUser', async function (req, res) {

    try {

        let user = await SignupUsers.findById(req.query.id)

        await SignupUsers.findByIdAndDelete(req.query.id)

        fs.rmSync('./server/pictures/' + user.email, { recursive: true, force: true })

        res.end("Delete ho gya")

    } catch (e) {
        console.log(e)
    }

})

app.get("/showUser", async function (req, res) {
    let users = await SignupUsers.find()
    res.json(users)
})

app.post("/courses", Course.single('pic'), async (req, res) => {
    try {
        let newCourse = new Courses(req.body)

        newCourse.pic = '/' + req.file.originalname;

        await newCourse.save();

        res.end("ho gya")

    } catch (e) {
        console.log(e)
    }

})

app.delete('/deleteCourse', async function (req, res) {
    try {
        await Courses.findByIdAndDelete(req.query.id)

        let filePath = './server/pictures/' + file.originalname;

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).end("Error deleting the picture file");
            } else {
                res.end("Delete ho gya");
            }
        });
    } catch (e) {
        console.log(e)
    }
})

app.delete('/deleteService', async function (req, res) {
    try {

        await Services.findByIdAndDelete(req.query.id)

        let filePath = './server/pictures/' + file.originalname;

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).end("Error deleting the picture file");
            } else {
                res.end("Delete ho gya");
            }
        });
    } catch (e) {
        console.log(e)
    }
})

app.get("/courses", async (req, res) => {
    try {
        let newCourse = await Courses.find()
        res.json(newCourse)
    } catch (e) {
        console.log(e)
    }
})


app.post("/services", Course.single('pic'), async (req, res) => {
    try {
        let newService = new Services(req.body)

        newService.pic = '/' + req.file.originalname;

        await newService.save();

        res.end("ho gya")

    } catch (e) {
        console.log(e)
    }

})


app.get("/services", async (req, res) => {
    try {
        let newService = await Services.find();
        res.json(newService)
    } catch (e) {
        console.log(e)
    }
})




app.post("/contact", async (req, res) => {
    try {
        let newContact = new Contact(req.body)
        await newContact.save()
        res.end("Success")
    } catch (e) {
        console.log(e)
    }
})

app.get("/contact", async (req, res) => {
    try {
        let newContact = await Contact.find()
        res.json(newContact)
    } catch (e) {
        console.log(e)
    }
})


app.post("/gallery", Course.single('pic'), async (req, res) => {
    try {

        let newGallery = new Gallery(req.body);
        newGallery.pic = '/' + req.file.originalname;

        await newGallery.save()

        res.end("Done")
    } catch (e) {
        console.log(e)
    }
})


app.get("/gallery", async (req, res) => {
    try {
        let newGallery = await Gallery.find();
        res.json(newGallery)
    } catch (e) {
        console.log(e)
    }
})

app.delete('/deleteGallery', async function (req, res) {
    try {

        await Gallery.findByIdAndDelete(req.query.id)

        let filePath = './server/pictures/' + file.originalname;

        fs.unlink(filePath, (err) => {
            if (err) {
                console.error(err);
                res.status(500).end("Error deleting the picture file");
            } else {
                res.end("Delete ho gya");
            }
        });
    } catch (e) {
        console.log(e)
    }

})

app.use(myExpress.static(path.join(__dirname, "./frontend/build")))

app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
            res.status(500).send(err)
        }
    )
})
app.use(myExpress.static('./server/pictures'))