import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import botImg from "../assets/bot.jpeg";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // image set state
  // default no image
  const [image, setImage] = useState(null);
  const [uploadingImg, setUploadingImg] = useState(false);
  // preview after you upload the image
  const [imagePreview, setImagePreview] = useState(null);
  const validateImg = (e) => {
    const file = e.target.files[0];

    if (file.size >= 104856) {
      return alert("Max file size is 1mb");
    } else {
      // cách thêm hình vào
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  async function uploadImage() {
    // Không cần form
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "oh44qdhy");
    try {
      setUploadingImg(true);
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/bach22/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const urlData = await res.json();
      console.log(urlData);
      console.log(data);
      setUploadingImg(false);
      return urlData.url;
    } catch (err) {
      setUploadingImg(false);
      console.log(err);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    if (!image) return alert("Please upload your profile picture");
    const url = await uploadImage(image);
    // const url = await uploadImage(file);
    console.log(url);
  }
  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex flex-direction-column align-items-center justify-content-center"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center">Create Account</h1>
            <div className="signup-profile-pic__container">
              <img
                src={imagePreview || botImg}
                className="signup-profile-pic"
                alt=""
              />
              <label htmlFor="image-upload" className="image-upload-label">
                <i className="fa fa-plus-circle add-picture-icon"></i>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept="image/png, image/jpeg"
                onChange={validateImg}
                className=""
              ></input>
            </div>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share you email with anyone else
                </Form.Text>
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {uploadingImg ? "Signing you up..." : "Signing up"}
            </Button>
            <div className="py-4">
              <p className="text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
};

export default Signup;
