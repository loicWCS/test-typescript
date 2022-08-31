const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
/* fetch("http://localhost:500/items", { 
    method : 'GET', GET , POST, PUT, DELETE etc.
    mode: "cors",
})*/
router.get("/items/:id", itemControllers.read);
/* fetch("http://localhost:500/items/12", { 
    method : 'GET', GET , POST, PUT, DELETE etc.
    mode: "cors",
})*/
router.put("/items/:id", itemControllers.edit);
/* fetch("http://localhost:500/items/12", { 
    method : 'PUT', GET , POST, PUT, DELETE etc.
    mode: "cors",
})*/
router.post("/items", itemControllers.add);
/* fetch("http://localhost:500/items/12", { 
    method : 'POST', GET , POST, PUT, DELETE etc.
    mode: "cors",
})*/
router.delete("/items/:id", itemControllers.destroy);
/* fetch("http://localhost:500/items/12", { 
    method : 'DELETE', GET , POST, PUT, DELETE etc.
    mode: "cors",
})*/

module.exports = router;
