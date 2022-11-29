import Express, { response } from 'express';
import validate from '../medelwar/valdait';
import { bookscama,lonescama,userscama} from '../bookschama/book.manage.scama';
import {addnewuser, finduser, addnewbook,findbooks,getlone,addlone} from "../controler/book.controler"

const router = Express.Router();

router.get("/",validate(userscama),addnewuser);
router.get("/",validate(userscama),finduser);
router.post("/",validate(bookscama),addnewbook)
router.get("/",validate(bookscama),addnewbook)
router.get("/",validate(lonescama),getlone)
router.post("/",validate(lonescama),addlone)