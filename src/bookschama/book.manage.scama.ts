import { z } from "zod";

export const userscama=z.object({
    body:z.object({
    id : z.string({required_error: "id is required"}),
    username: z.string({required_error: "username is required "}),
    passwoord: z.string({required_error: "password cant be null "})
    })
    })
   export  const bookscama=z.object({
        body:z.object({
        id : z.string({required_error: "id is required"}),
        name: z.string({required_error: "name is required "}),
        genre: z.string({required_error: "genr cant be null "})
        })
        })
   export const lonescama=z.object({
        body:z.object({
        id : z.string({required_error: "id is required"}),
        userid: z.string({required_error: "userid  is required "}),
        bookid: z.string({required_error: "gener cant be null "})
        })
        })
        
        export type userscamatype = z.infer<typeof userscama>['body'];
        export type bookscamatype = z.infer<typeof bookscama>['body'];
        export type lonescamatype = z.infer<typeof lonescama>['body']

