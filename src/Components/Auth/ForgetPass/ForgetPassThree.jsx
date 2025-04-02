import { Formik, Field, Form, ErrorMessage } from "formik";
import CustomField from "../CustomField";
import CustomButton from "../CustomButton";
import * as yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ForgetPassThree = () => {
  const validation = yup.object().shape({
    newPassword: yup.string().required("فیلد اجباریست")
  });

  const navigate = useNavigate();
  const onSubmit = (values) => {
    console.log("sign in step 2 ", values);
    toast.success(" زمز استاتیک با موفقیت عوض شد :)");
    navigate("/");
  };

  return (
    <div className=" flex flex-col gap-3.5 h-full gap-8 justify-around">
      <div>
        <h1 className="font-semibold text-4xl mb-4 "> رمز عبور جدید </h1>
        <p className="font-normal text-xl text-[#6D6C80]">
          {" "}
          رمز عبور جدید خود را وارد نمایید{" "}
        </p>
        <Formik
          initialValues={{ newPassword: "" }}
          className="flex flex-col gap-5"
          onSubmit={(values) => onSubmit(values)}
          validationSchema={validation}
        >
          <Form>
            <CustomField name="newPassword" type="text " placeholder="رمز عبور" />
            <ErrorMessage name="newPassword" />

            <CustomButton text="تکمیل فرایند" />
          </Form>
        </Formik>
      </div>

      <div className="relative items-center flex justify-cente">
        <div className=" w-full h-full flex justify-center items-center  absolute  left-0 right-0 ">
          <div className="bg-[#5751E1] w-1/2 h-2  "></div>
          <div className="bg-[#5751E1] w-1/2 h-2"></div>
        </div>
        <div className="w-full h-14  flex justify-between items-center z-40">
          <div
            className="size-14 rounded-full bg-[#5751E1] text-white flex justify-center items-center font-semibold text-xl z-20"
            onClick={() => {
              navigate(-2);
              toast("بازگشت به مرحله ی اول");
            }}
          >
            1
          </div>

          <div
            className="size-14 rounded-full bg-[#5751E1]  text-white flex justify-center items-center font-semibold text-xl"
            onClick={() => {
              navigate(-1);
              toast("بازگشت به مرحله س قبل");
            }}
          >
            2
          </div>

          <div className="size-14 rounded-full bg-[#FFC224] flex justify-center items-center font-semibold text-xl">
            3
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgetPassThree;
