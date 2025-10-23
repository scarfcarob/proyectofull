
import { Router } from "express";
import { body } from "express-validator";
import UsuarioController from "../controller/usuariosController.js";
//import { valUpdateUser, valUserId, } from "../middleware/user.validator.js"; //lo copie del profe


const router = Router();

router.get("/", UsuarioController.getAll);            //fijate que tus rutas no se parecen a la del profe, nose porque
router.get("/:id", UsuarioController.getById);
router.put("/:id", UsuarioController.update);
router.delete("/:id", UsuarioController.delete);


//router.post(                // fijate esto para que sirve
  //"/register",
  //[
    //body("nombre").notEmpty().withMessage("El nombre es obligatorio"),
    //body("email").isEmail().withMessage("Debe ser un email válido"),
    //body("contraseña")
      //.isLength({ min: 6 })
      //.withMessage("La contraseña debe tener al menos 6 caracteres"),
  //],
  //validateFields,
  //UsuarioController.register
//);



export default router;








//-------------------------------------//------------------------------------------------

//import { Router } from "express";        // esto es del profe
//import { getAllUsers, getUserById, updateUserById, deleteUser } from "../controller/usuariosController.js"
//"../controller/user.controller.js";
//import { valUpdateUser, valUserId, } from "../middleware/user.validator.js"


//const router = Router();

//router.get("/usuarios", getAllUsers);
//router.get("/usuarios/:id", valUserId, getUserById);
//router.put("/usuarios/:id", valUpdateUser, updateUserById);
//router.delete("/usuarios/:id", valUserId, deleteUser);

//export default router;






//----------------------------------------///--------------------------------

//import { Router } from "express";     // esto es lo que hice primeramente 
//import { body } from "express-validator";
//import UsuarioController from "../controller/usuariosController.js";
//import { valUpdateUser, valUserId, } from "../middleware/user.validator.js"; //lo copie del profe


//const router = Router();

//router.get("/", UsuarioController.getAll);            //fijate que tus rutas no se parecen a la del profe, nose porque
//router.get("/:id", UsuarioController.getById);
//router.put("/:id", UsuarioController.update);
//router.delete("/:id", UsuarioController.delete);
//router.post("/register", UsuarioController.register); // recien agregado 

//export default router;







