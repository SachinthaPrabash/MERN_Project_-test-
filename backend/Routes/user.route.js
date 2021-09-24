const router = require("express").Router();

let User = require("../Models/user.model");


router.route("/add").post((req, res) => {

    const userName = req.body.userName;
    const name = req.body.fullName;
    const email = req.body.email;
    const password = req.body.password;
    const tel = Number(req.body.tell);
    const address = req.body.address;
    const gender = req.body.gender;
    const active = req.body.active;

    const newUser = new User({
        userName, name, email, password, tel, address, gender, active
    })

    newUser.save().then(() => {
        res.json("User Added")
    }).catch((err) => {
        console.log(err);
    });
})

router.route("/").get((req, res) => {
    User.find().then((User) => {
        res.json(User)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {
    let userId = req.params.id;
    const { userName, name, email, password, tel, address, gender, active } = req.body;

    const updateUser = { userName, name, email, password, tel, address, gender, active }

    const update = await User.findByIdAndUpdate(userId, updateUser)
        .then(() => {
            res.status(200).send({ status: "user updated" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating date" });
        })
})

router.route("/delete/:id").delete(async (req, res) => {
    let userId = req.params.id;

    await User.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User Deleted" })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with delete User", error: err })
        })
})

router.route("/get/:id").get(async (req, res) => {
    let userId = req.params.id;

    const user = await User.findById(userId)
        .then(() => {
            res.status(200).send({ status: "User fetched", user: user })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with get user", error: err });
        })
})

module.exports = router;