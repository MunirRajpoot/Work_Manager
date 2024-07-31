import { NextResponse } from "next/server";
import { User } from "../../../../models/users"

// get user
export async function GET(request, { params }) {
    const { userId } = params;
    const user = await User.findById(userId)
    return NextResponse.json(user)
}






// delete user
export async function DELETE(request, { params }) {
    const { userId } = params;
    console.log("userId", userId);

    try {
        await User.deleteOne({ _id: userId });
        return NextResponse.json({
            message: "User deleted",
            success: true,
        });
    } catch (error) {
        return NextResponse.json({
            message: "Error in deleting user",
            success: false,
        });
    }
}

// Update User
export async function PUT(request, { params }) {
    const { userId } = params;
    const { name, password, about, profileURL } = await request.json();
    console.log(name, password, about, profileURL);
    try {
        const user = await User.findById(userId);
        user.name = name;
        user.about = about;
        user.password = password;
        user.profileURl = profileURL;

        const updatedUser = await user.save();
        return NextResponse.json(updatedUser)
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to update user",
            success: false,
        })
    }
}