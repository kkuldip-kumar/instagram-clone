import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
import BaseInput from "@/components/input/BaseInput";
import { useDispatch } from "react-redux";
// import { login } from "@/store/slice";
import { useNavigate } from "react-router-dom";
import BaseLink from "@/components/links/BaseLink";
import ButtonLoader from "@/components/loaders/ButtonLoader";
// import BaseApi from "@/api/BaseApi";
import BaseButton from "@/components/buttons/BaseButton";
import { useRegisterUserMutation } from "@/store/user/userService";
function SignUp() {
  const [loading, setLoading] = useState(false);
  const [handleRegister, { data, isLoading, isError, isSuccess }] =
    useRegisterUserMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  useEffect(() => {
    focusHandler();
  }, []);

  const focusHandler = () => {
    inputRef?.current?.focus();
  };
  const SubmitForm = async (values, { resetForm }) => {
    const { firstName, lastName, ...rest } = values;
    const payload = {
      ...rest,
      name: `${firstName} ${lastName}`,
      username: `${firstName}_${lastName}`,
    };
    await handleRegister(payload);
    if (isSuccess) {
      resetForm();
      navigate("/");
    }
  };
  return (
    <div className="grid h-screen place-items-center justify-center md:justify-normal">
      <div className="w-full rounded bg-white p-5 md:w-1/3 md:shadow-md">
        <h5 className="mb-7 text-center text-2xl font-semibold capitalize text-black">
          SignUp
        </h5>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            password: Yup.string().required("Password is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
          })}
          onSubmit={SubmitForm}
        >
          <Form>
            <div className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="">
                  <BaseInput
                    ref={inputRef}
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="">
                  <BaseInput
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="">
                <BaseInput
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>

              <div className="">
                <BaseInput
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className=" w-full">
                <BaseButton
                  classes="block w-full bg-primary rounded text-white p-2"
                  type="submit"
                  isDisabled={isLoading ? true : false}
                >
                  {isLoading ? <ButtonLoader /> : "Register"}
                </BaseButton>
              </div>
              <div className="">
                <h6 className=" mb-3 text-base font-normal text-primary">
                  You Already have a Account ?
                  <BaseLink
                    pageLink="login"
                    classes="font-bold ms-1"
                    content="Sign In"
                  />
                </h6>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
