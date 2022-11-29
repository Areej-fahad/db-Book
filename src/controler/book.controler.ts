import { book, user,Lone } from '@prisma/client';
import { join, PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { Request, Response } from 'express';
import { bookscama,bookscamatype,lonescama,userscama, userscamatype} from '../bookschama/book.manage.scama';
import { prisma } from '../config/db';


export const addnewuser= async(req:Request,res:Response)=>{
  try{
    const add_user= req.body.user
    await prisma.user.create({
      data:add_user
    })
  }catch{
    return res.json("new user added")
    }
  }
    export const  finduser = async(req:Request,res:Response)=>
    {
    const getusers =prisma.user.findMany()
    return res.json(getusers)
}

export const addnewbook = async(req:Request,res:Request)=>{
let newbook= req.body as book

await prisma.book.create({
data : newbook

})

}

export const  findbooks = async(req:Request,res:Response)=>
    {
    const getbook= req.body.bookscama;
    
   const getbooks= await prisma.book.findMany()
   return res.json(getbook)
      }
    


export const  getlone = async(req:Request,res:Response)=>
    {
    const lons = await prisma.lone.findMany()
    return res.json(lons)
    }
    export const addlone = async(req:Request,res:Request)=>{
      let newlone= req.body as Lone
      
      await prisma.lone.create({
      
          data : newlone
      
      })
    }
  
