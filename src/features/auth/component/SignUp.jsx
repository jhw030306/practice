import React from "react";
import { Form } from "../../../component/form/Form";
import { InputField } from "../../../component/form/InputField";

const SignUp = () => {
  const testSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Form onSubmit={testSubmit}>
      {({ register, formState }) => (
        <>
          <InputField
            label="아이디"
            name="id"
            type="text"
            registration={register("id")}
            error={formState.errors?.id}
          />
          <InputField
            label="비밀번호"
            name="password"
            type="password"
            registration={register("password")}
            error={formState.errors?.password}
          />
          <InputField
            label="이름"
            name="name"
            type="text"
            registration={register("name")}
            error={formState.errors?.name}
          />
          <InputField
            label="이메일"
            name="email"
            type="email"
            registration={register("email")}
            error={formState.errors?.email}
          />
          <button type="submit">제출</button>
        </>
      )}
    </Form>
  );
};

export default SignUp;
