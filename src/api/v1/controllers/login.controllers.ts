import { Request, Response, NextFunction } from "express"

export function loginGet(_req: Request, res: Response, _next: NextFunction) {
    res.send({ data: "Estos son los datos de respuesta del login" })
}

// export async function login(_req: Request, res: Response, next: NextFunction) {
//     try {
//         await res.status(200).json({ message: "Login successful" })
//     } catch (error) {
//         next(error)
//     }

//     return true
// } 