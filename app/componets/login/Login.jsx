"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, Button, Label, TextInput } from "flowbite-react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        if (data.success) {
          router.push("/admin/dashboard");
        } else {
          setErrMessage(data.message);
        }
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-sm mx-auto my-auto w-1/2">
      <p className="text-center text-slate-500 text-2xl font-bold">
        Blog Login Form
      </p>
      {errMessage && (
        <Alert color="failure" className="mt-3">
          <span className="font-medium text-center"> {errMessage} </span>
        </Alert>
      )}
      <Form formData={formData} setFormData={setFormData} loading={loading} />
    </form>
  );
};

export default Login;

const Form = ({ formData, setFormData, loading }) => {
  return (
    <React.Fragment>
      {/* email  */}
      <div className="my-3">
        <Label> Your Email </Label>
        <TextInput
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email address"
          size="sm"
        />
      </div>
      <div className="my-3">
        <Label> Password </Label>
        <TextInput
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Enter your password"
          size="sm"
        />
      </div>
      <div className="my-3">
        <Button type="submit" color="purple" size="sm" isProcessing={loading}>
          {" "}
          {loading ? "Please Wait" : "Login"}{" "}
        </Button>
      </div>
    </React.Fragment>
  );
};
