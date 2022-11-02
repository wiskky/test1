const router = require('express').Router();

const controller = require("../controller/userController");

router.get('/', controller.getUsers);

router.post('/', controller.createUser);
module.exports = router;
