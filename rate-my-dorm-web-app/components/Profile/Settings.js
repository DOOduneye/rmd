import {CurrentUserContext} from "@/providers/CurrentUserProvider";
import {useContext, useState} from "react";

const Settings = ({user}) => {

  const { currentUser } = useContext(CurrentUserContext);

  const [editProfile, setEditProfile] = useState(false);

  const changeUpdate = () => {
    setEditProfile(!editProfile)
  }

  const updateProfile = () => {
    fetch(`http://localhost:4000/api/users/${currentUser._id}`, {
      method: 'PUT',
      body: JSON.stringify({
                             "email": document.getElementById("email").value,
                             "bio": document.getElementById("bio").value,
                             "password": document.getElementById("userPass").value
                           }),
      headers: {
        'Content-Type':'application/json'
      }
    })
        .then(response => response.json())
        .then(data => console.log(data))

  }

  return (
      (currentUser !== null && currentUser !== undefined && user._id === currentUser._id && editProfile) ?
      <div>
            <span><h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark inline-block">{user.username}</h5>
              {(currentUser !== null && currentUser !== undefined && user._id === currentUser._id && !editProfile)
               ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={changeUpdate}>Edit</button>
               : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5" type="button" onClick={changeUpdate}>Cancel</button>}
            </span>
        <br/>
        <br/>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" defaultValue={user.email}/>
            <br/>
            <br/>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="userPass">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="userPass" id="userPass" defaultValue={user.password}/>
            <br/>
            <br/>
            <label className="block text-gray-700 text-sm font-bold mb-2" for="bio">Bio</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="bio" id="bio" defaultValue={user.bio}/>
            <br/>
            <br/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={updateProfile}>Update</button>
          </div>
        </form>
      </div>
                                                                                                            :
      <div>
          <span><h5 className="text-2xl text-center font-bold tracking-tight text-eerie-dark inline-block">{user.username}</h5>
            {(currentUser !== null && currentUser !== undefined && user._id === currentUser._id && !editProfile)
             ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-5" type="button" onClick={changeUpdate}>Edit</button>
             : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={changeUpdate}>Cancel</button>}
            </span>
        <br/>
        <br/>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Bio</h2>
        <p>{user.bio}</p>
        <br/>
        <br/>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">University</h2>
        <p>{user.university}</p>
        <br/>
        <br/>
        <h2 className="text-2xl font-bold tracking-tight text-eerie-dark">Major</h2>
        <p>{user.major}</p>
        <br/>
        <br/>
      </div>
  );
}

export default Settings;