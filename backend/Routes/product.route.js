const router = require("express").Router();

let Product = require("../Models/product.model");


router.route("/add").post((req, res) => {

    const productName = req.body.productName;
    const stock = Number(req.body.stock);
    const active = req.body.active;
    const productImage = req.body.productImage;

    const newProduct = new Product({
        productName, stock, active, productImage
    })

    newProduct.save().then(() => {
        res.json("Product Added")
    }).catch((err) => {
        console.log(err);
    });
})

router.route("/").get((req, res) => {
    Product.find().then((product) => {
        res.json(product)
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/update/:id").put(async (req, res) => {
    let productId = req.params.id;
    const { productName, stock, active, productImage } = req.body;

    const updateProduct = { productName, stock, active, productImage }

    const update = await User.findByIdAndUpdate(productId, updateProduct)
        .then(() => {
            res.status(200).send({ status: "product updated", product: update })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data" });
        })
})

module.exports = router;