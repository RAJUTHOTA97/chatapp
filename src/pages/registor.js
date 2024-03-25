 
 

 
 import Add from "../images/addimage.png"
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErr(null); // Resetting error state on form submit

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Upload profilePhoto image
      const storageRef = ref(storage, `${displayName}_${new Date().getTime()}`);
      await uploadBytesResumable(storageRef, file);

      // Get download URL for the avatar
      const downloadURL = await getDownloadURL(storageRef);

      // Update profile and save user data to Firestore
      await Promise.all([
        updateProfile(user, {
          displayName,
          photoURL: downloadURL,
        }),
        setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        }),
        setDoc(doc(db, "userChats", user.uid), {}),
      ]);

      // Navigate to home page
      navigate("/");
    } catch (error) {
      console.error("Error registering user:", error);
      setErr("Something went wrong while registering. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lets-chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display Name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <input required style={{display:"none"}} type="file" id="file" accept="image/*" />
          <label htmlFor="file">
          <img src={Add} alt="" />
            <span style={{color:"orange"}}>Add your profilePicture</span>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
          {err && <span>{err}</span>}
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;


  
