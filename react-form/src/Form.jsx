import { useState } from "react";

function Form() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        phoneType: "",
        staff: "Instructor",
        bio: "",
        emailNotifications: false
    })

    return (
        <form action="">
            <label>Name
                <input type="text" placeholder="Name" value={user.name} onChange={(e)=> setUser({...user, name: e.currentTarget.value})}/>
            </label>
            <br />
            <label>Email
                <input type="text" placeholder="Email" value={user.email} onChange={(e)=> setUser({...user, email: e.currentTarget.value})}/>
            </label>
            <br />
            <label>Phone Number
                <input type="text" placeholder="Phone Number" value={user.phoneNumber} onChange={(e)=> setUser({...user, phoneNumber: e.currentTarget.value})}/>
            </label>
            <br />
            <label>Phone Type
                <select name="phoneType" value={user.phoneType} onChange={(e)=> setUser({...user, phoneType: e.currentTarget.value})}>
                    <option value="">Please select an option</option>
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </label>
            <br />
            <label>Staff
                <input type="radio" name="Staff" value="Instructor" checked={user.staff === "Instructor" ? true : false} onChange={(e)=> setUser({...user, staff: e.currentTarget.value})}/> Instructor
                <input type="radio" name="Staff" value="Student" checked={user.staff === "Student" ? true : false} onChange={(e)=> setUser({...user, staff: e.currentTarget.value})}/> Student
            </label>
            <br />
            <label>Bio
                <textarea name="Bio" cols="30" rows="10" value={user.bio} onChange={(e)=> setUser({...user, bio: e.currentTarget.value})}></textarea>
            </label>
            <br />
            <label>Email notifications
                <input type="checkbox" name="emailNotifications" value={user.emailNotifications} checked= {user.emailNotifications} onChange={(e)=> setUser({...user, bio: e.currentTarget.value})}/>
            </label>
        </form>
    )
} 

export default Form;