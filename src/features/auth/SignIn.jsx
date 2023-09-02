import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import BaseInput from "@/components/input/BaseInput";

import { useDispatch } from "react-redux";
// import { login } from "@/store/slice";
import BaseButton from "@/components/buttons/BaseButton";
// import BaseApi from "@/api/BaseApi";
import BaseLink from "@/components/links/BaseLink";
import ButtonLoader from "@/components/loaders/ButtonLoader";
import { useLoginUserMutation } from "@/store/user/userService";
function SignIn() {
  const [loading, setLoading] = useState(false);
  const [handleLogin, { data, isError, isLoading, isSuccess }] =
    useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  useEffect(() => {
    focusHandler();
  }, []);

  const focusHandler = () => {
    inputRef.current.focus();
  };
  const SubmitForm = async (values, { resetForm }) => {
    const payload = { ...values };
    await handleLogin(payload);
    if (isSuccess) {
      resetForm();
      navigate("/feed");
    }
  };
  return (
    <div className="grid h-screen place-items-center justify-center md:justify-normal">
      <div className="w-full rounded bg-white p-5 md:w-1/3 md:shadow-md">
        <h5 className="mb-7 text-center text-2xl font-semibold capitalize text-black">
          Sign In
        </h5>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            password: Yup.string().required("Password is required"),
            email: Yup.string()
              .required("Email is required")
              .email("Invalid email address"),
          })}
          onSubmit={SubmitForm}
        >
          <Form>
            <div className="mb-5">
              <BaseInput
                ref={inputRef}
                name="email"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-5">
              <BaseInput
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="mb-5 w-full">
              <BaseButton
                classes="block w-full bg-primary rounded text-white p-2"
                type="submit"
                isDisabled={isLoading ? true : false}
              >
                {isLoading ? <ButtonLoader /> : "Submit"}
              </BaseButton>
            </div>
            <div className="space-y-1">
              <h6 className="  text-base font-normal text-primary">
                You Don't have Accout ?
                <BaseLink
                  pageLink="register"
                  classes="font-bold ms-1"
                  content="Sign Up"
                />
              </h6>
              <h6 className="  text-base font-normal text-primary ">
                <BaseLink
                  pageLink="forgot-password"
                  classes={""}
                  content="Forgot Password"
                />
              </h6>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignIn;
