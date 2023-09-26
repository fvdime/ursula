import { verifyJwtToken } from "@/lib/jwt"
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany()

    return new NextResponse(JSON.stringify(posts, {status: 200}))
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({ message: "Something went wrong!"}, {status: 500}))
  }
}

// export async function POST(req){
  
//   const accessToken = req.headers.get("authorization")
//   const token = accessToken.split(' ')[1]

//   const decodedToken = verifyJwtToken(token)

//   if(!accessToken || !decodedToken){
//     return new NextResponse(JSON.stringify({ message: "Unauthorized!"}, {status: 403}))
//   }

//   try {

//     const body = await req.json()
//   } catch (error) {
    
//   }
// }