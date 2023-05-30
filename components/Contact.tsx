"use client";

import { AnimatePresence } from "framer-motion";
import  { Cursor, Typewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Contact() {
    const  handleSubmit =  (e:any) => {
        e.preventDefault();
        console.log(handleSubmit);
        };

        const onSubmit = async (e:any ) => {
            console.log(e.target.value);
            
        }
        
  return (
    <motion.div
     initial={{ opacity: 0,scale:0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2,delay:0.5, ease: 'easeInOut'}}

    className="h-screen max-w-7xl mx-auto flex items-center flex-col justify-center">
          

        <AnimatePresence
         initial={false}
              //exitBeforeEnter={true}
          onExitComplete={() => null}
         >
            {/*drop && <DropContact handelClose={() => setDrop(!drop)} />*/}
        </AnimatePresence>
            <h1 className="text-center pb-5 tracking-wider text-xl font-[900]
              bg-gradient-to-r from-[#25D366] via-gray-400 to-[#25D366]  bg-clip-text  text-transparent ">
                <span >
                <Typewriter loop={true} delaySpeed={1000} words={['Contact me . . . ']} />
                </span>
                <Cursor cursorColor='#4b9ae3' />
            </h1>
     
       <div className="flex flex-row items-center">


       <div className="text-white px-10 hidden md:block">
        deaa
       </div>
       <div className=" 
       relative
       w-full mx-auto mt-8 lg:m-0 filter  bg-black pointGreen  border-2 border-[#25D366] mix-blend-screen  rounded-2xl p-8">
           
           <div className="absolute w-full h-full top-0 left-0 rounded-2xl  z-0">
            <div className="h-48 w-48 z-0  absolute contactBgSchadow  blur-sm top-24  left-14 rounded-full opacity-30 bg-[#ADD8E6]/70  " />
            <div className="h-48 w-48 z-0  rounded-full contactBgSchadow bottom-16 blur-sm    absolute left-0 opacity-30 bg-[#ADD8E6]/70 " />
            <div className="h-48 w-48 z-0  rounded-full contactBgSchadow bottom-16 blur-sm   absolute right-0 opacity-30 bg-[#ADD8E6]/70 " />
          </div>

            <motion.div 
             initial={{ opacity: 0,scale:0.5 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 2, delay:1.2, type:"spring", stiffness: 100,ease: 'easeInOut' }}
       
            className="mb-4 flex items-center justify-evenly z-50 ">
                <SocialIcon url="https://api.whatsapp.com/send/?phone=491630299378&text&type=phone_number&app_absent=0"
                 className="hover:scale-125 hover:pointGreen rounded-full transition-all duration-300 "  fgColor="#fff" style={{height:30, width:30}} />
                <SocialIcon url="https://www.facebook.com/profile.php?id=100078049085080" 
                className="hover:scale-125 hover:facebookschadow rounded-full transition-all duration-300"  fgColor="#fff" style={{height:30, width:30}} />
                <SocialIcon url="https://www.linkedin.com/in/deaa-aldin-8a706a257/" 
                className="hover:scale-125 hover:linkedinshadow rounded-full transition-all duration-300"  fgColor="#fff" style={{height:30, width:30}} />
            </motion.div>
            <hr className="border-[#25D366] blur-[2px]  my-5 animate-pulse " />
        <form 
        //onSubmit={handleSubmit(onSubmit)}
        className=" z-50  w-full flex flex-col text-white text-sm font-semibold space-y-3  mix-blend-lighten">
            {/*Nmae faild */}
            <input className="text-white bg-gray-500 rounded-lg opacity-30 md:text-xl border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
               type="text" placeholder="Name"
               
             //onChange={(e)=> setDataSend((prevData) => ({...prevData, name:e.target.value}))}
             //value={dataSend.name}  {/*{...register("name", { required: true})} */} 
            />
            {/*errors.name && <span className="mx-6 my-2 text-pink-500 text-sm">please write your fullname</span>*/}

            {/*Email faild */}
            <input className="'text-white bg-gray-500 rounded-lg opacity-30 md:text-xl border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
              type="email" placeholder="Email"
             
             //onChange={(e)=> setDataSend((prevData) => ({...prevData, email:e.target.value}))}
             //value={dataSend.email} /*{...register("email", { required: true,  pattern: /\S+@\S+\.\S+/ })} 
             />
            {/*errors.email && <span className="mx-6 my-2 text-pink-500 text-sm">please write a valid email</span>*/}
          
            {/*message faild */}
            <textarea className="text-white bg-gray-500 opacity-30 md:text-xl rounded-lg border-b-2 py-3 placeholder-white border-[#25D366]/40 focus:border-[#25D366] outline-none"
               placeholder="Message" 
              
             //onChange={(e)=> setDataSend((prevData) => ({...prevData, message:e.target.value}))}
             //value={dataSend.message}   {/*{...register("message", { required: true })}  */}
             />
            {/*errors.message && <span className="mx-6 my-2 text-pink-500 text-sm">please write your message</span>*/}
            
            {/*checkbox faild */}
           <div className="flex flex-row space-x-2 py-[18px] ">
           <input 
             type="checkbox" 
             
              //onChange={(e)=> setDataSend((prevData) => ({...prevData, checkbox:e.target.checked}))}
             //checked={dataSend.checkbox}   {/*{...register("checkbox", { required: true })} */}
              />
            <label className="text-white text-sm font-semibold">I agree to the <button type="button" className="text-[#25D366]/40 font-[800] cursor-pointer hover:text-[#25D366] text-center pl-1">privacy policy</button></label>
           </div>
           {/*onClick={handleClick} for privsy button */} 
           {/*errors.checkbox && <span className="mx-3 pb-4  text-pink-500 text-sm ">please agree to the privacy policy</span>}
           
            
            {/*submit button */}
            <button  className="link animate-pulse " type="submit">Submit</button>

            {/*status */}
            {/*status && <div className='my-8 text-center md:text-xl text-white transition ease-in-out duration-300'>Sending....</div>}
           
            {/*success */}
            {/*success && <div className={`${success ?"text-sky-500":"text-pink-500"} my-8 text-center md:text-xl`}>{result}</div>}
            {/*drop component  */}
           
                </form>
               
        </div>
       </div>
    
        </motion.div>
  )
}

export default Contact