import { Formik, Field, Form , ErrorMessage } from "formik";
import CustomField from "../CustomField";
import CustomButton from "../CustomButton";
import * as yup from 'yup'
import toast from "react-hot-toast";
const SignInOne = () => { 
    const onSubmit = (values) => {
        console.log("sign in step ", values)
        toast.success("ورود استاتیک انجام شد :)")
    }
    const phoneRegEx = /^(\+98|0)?9\d{9}$/;
    const validation = yup.object().shape(
        {
            phoneOrGmail: yup.string().test('is-email-or-phone', 'Please enter a valid email or phone number', (value) => {
                const isEmail = yup.string().email().isValidSync(value);
                const isPhone = phoneRegEx.test(value);

                return isEmail || isPhone;
            }).required("ایمیل یا شماره ی همراه خود را وارد نمایید "), 

            password: yup.string().required("لطفا رمز عبور خود را وارد نمایید ")
            
        }
    )
    return (
        <div className=" flex flex-col gap-3.5 h-full gap-8">
            <h1 className="font-semibold text-4xl mb-4 "> !خوش اومدید  </h1>
            <p className="font-normal text-xl text-[#6D6C80]"> برای ورود به حساب خود ایمیل یا شماره ی موبایل و رمز خود را وارد کنید  </p>
            <Formik initialValues={{ phoneOrGmail: "", password: "" , rememberMe: false }} className="flex flex-col gap-5"
                onSubmit={(values) => onSubmit(values)}
            validationSchema={validation}
            >
                
                <Form>

                    <CustomField name="phoneOrGmail" type="text " placeholder="ایمیل خود را وارد کنید " />
                    <ErrorMessage  name="phoneOrGmail"/>
                    <CustomField name="password" type="password" placeholder="رمز عبور خود  را وارد کنید " />
                    <ErrorMessage name= "password" />
                    <div className="felx  justify-between">
                        <label htmlFor="checkbox" className="pr-2 flex gap-2" >
                            
                     <Field  type="checkbox" name="rememberMe"  className = "px-3.5" />
              مرا به خاطر بسپار 
            </label>
                    </div>
                    <CustomButton text="ورود به حساب کاربری" />
                        
                </Form>
            </Formik>
        </div>
        
    )
}

export default SignInOne