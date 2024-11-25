import Button from "../component/button";
import { Footer } from "../fragment/footer";
import Form from "../fragment/form";
import Header from "../fragment/header";

export default function Login() {
    return (
        <>
        <div className=" w-1/3 bg-gray-200 px-10 py-20 mt-20 mx-auto rounded-lg shadow-2xl">
         <Header/>

         <div className="mt-14">
        <Form label="Username" input="Fill The Username"   />
         </div>
        
        <Form label="Password" input="Fill The Password"/>
        <Button/>
        <Footer/>
        </div>
       

        </>
    )
}