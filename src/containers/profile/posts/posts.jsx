import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios"

import { Context } from "../../../hooks/context";
import Button from "../../../UI/button/button";

import classes from './posts.module.css';

const Post = () => {
  const [post_0, setPost_0] = useState(null);
  const [post_1, setPost_1] = useState(null);
  const [post_2, setPost_2] = useState(null);
  const [post_3, setPost_3] = useState(null);
  const [post_4, setPost_4] = useState(null);

  const [postUrl_0, setPostUrl_0] = useState(null);
  const [postUrl_1, setPostUrl_1] = useState(null);
  const [postUrl_2, setPostUrl_2] = useState(null);
  const [postUrl_3, setPostUrl_3] = useState(null);
  const [postUrl_4, setPostUrl_4] = useState(null);

  const [description, setDescription] = useState("");

  const { token, id } = useContext(Context)

  const inputRef = useRef();
  const descriptionRef = useRef();

  const pickImagesHandler = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    //first post
    if (post_0 === null) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostUrl_0(fileReader.result);
    };

    fileReader.readAsDataURL(post_0);
  }, [post_0]);

  useEffect(() => {
    //second post
    if (post_1 === null) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostUrl_1(fileReader.result);
    };

    fileReader.readAsDataURL(post_1);
  }, [post_1]);

  useEffect(() => {
    //third post
    if (post_2 === null) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostUrl_2(fileReader.result);
    };

    fileReader.readAsDataURL(post_2);
  }, [post_2]);

  useEffect(() => {
    // fourth post
    if (post_3 === null) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostUrl_3(fileReader.result);
    };

    fileReader.readAsDataURL(post_3);
  }, [post_3]);

  useEffect(() => {
    // fifth post
    if (post_4 === null) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPostUrl_4(fileReader.result);
    };

    fileReader.readAsDataURL(post_4);
  }, [post_4]);

  const multipleImageHandler = (e) => {
    const event = e.target.files;
    if (event.length === 0) return;
    setPost_0(event[0]);
    setPost_1(event[1]);
    setPost_2(event[2]);
    setPost_3(event[3]);
    setPost_4(event[4]);
  };

  const uploadHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData()
    formData.append("description", description);
    formData.append("image", post_0)
    formData.append("image", post_1)
    formData.append("image", post_2)
    formData.append("image", post_3)
    formData.append("image", post_4)
    const response = 
    await axios.post(`"https://backend-chat-application.onrender.com/users/upload/post/images/${id}"`,
     formData, {
        headers: {
            "Content-Type" : "application/json",
            "Authorization": "Bearer " + token  
        }
    })

  }

  useEffect(() => {
    const focusHandler = () => {
        descriptionRef.current.focus();
    }
    focusHandler();
  })

  return (
    <form onSubmit={uploadHandler}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <input ref={descriptionRef} type='search' className={classes.search} placeholder="Your description ?"
            onChange={(e) => setDescription(e.target.value)} />
          {postUrl_0 && (
            <img src={postUrl_0} alt="" />
          )}
          {postUrl_1 && (
            <img src={postUrl_1} alt="" />
          )}
          {postUrl_2 && (
            <img src={postUrl_2} alt="" />
          )}
          {postUrl_3 && (
            <img src={postUrl_3} alt="" />
          )}
          {postUrl_4 && (
            <img src={postUrl_4} alt="" />
          )}
        </div>
        <input ref={inputRef} type="file" name="image"
          style={{ display: "none" }}
          id="image"
          multiple="multiple"
          onChange={multipleImageHandler}
        />
        {!postUrl_0 ? <Button clicked={pickImagesHandler}>Add Posts</Button>
        :
        <Button type='submit' clicked={uploadHandler}>Upload</Button>}
      </div>
      <p style={{ textAlign: "center", color: "red", fontSize: "10px", marginTop: "5em" }}>Maximum of 5 photo</p>
    </form>
  );
};

export default Post;
