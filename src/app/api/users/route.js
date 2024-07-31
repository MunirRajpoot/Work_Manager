import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { User } from "@/models/users";


export async function GET(request) {
   let users=[]
   try {
   await connectDb()
    users=await User.find().select("-password")
   } catch (error) {
    console.log("error",error);
    return NextResponse.json({
        message:"Failed to get user",
        success:false,
    })
   }

    return NextResponse.json(users)

}

export async function POST(request) {
    // const body=request.body;
    // console.log("body",body);
    // return NextResponse.json({
    //     msg:"Post created"
    // })

    // const jsonData=await request.json();
    // console.log(jsonData);
    // return NextResponse.json({
    //     msg:"posting user Data"
    // })

    const { name, email, password, about, profileURL } = await request.json();

    // create user object with model

    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    })
    try {
        const createdUser = await user.save()
        const response = NextResponse.json(
            user,
            {
                status: 201,
            }
        )

        return response;
    } catch (error) {
        return NextResponse.json({
            msg: "Failed to create user",
            status: false,
        })
    }

}
export function DELETE(request) {
    console.log("Deleted Api call");
    return NextResponse.json({
        msg: "deleted",
        status: "true"
    })
}