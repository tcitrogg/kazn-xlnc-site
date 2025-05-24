"use client"
import { useState, useEffect } from 'react';
import { motion } from "framer-motion"
import { toast } from "sonner"
import Loading from './Loading';
import { addRegistration } from '@/app/actions';

export default function JoinWaitlist() {

  const [isPending, setIsPending] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState("")
  const [submitError, setSubmitError] = useState("")

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setIsPending(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const res = await addRegistration(formData)
    if (res.successMessage) {
      setSubmitSuccess(res.successMessage)
      toast.success(res.successMessage)
      console.log(res.successMessage)
    } else {
      setSubmitError(`${res.errorMessage}`)
      toast.error(res.errorMessage)
      console.log(res.errorMessage)
    }
    setIsPending(false)
  }

  return (<>
    {submitSuccess && <motion.h4 initial={{ opacity: 0, translateY: -12 }} whileInView={{ opacity: 1, translateY: 0}} className="font-semibold text-xl md:text-2xl lg:text-3xl">Thank you!!</motion.h4>}
    
    {/* {submitError && <></>} */}
    
    {(!submitSuccess || submitError) && (<form onSubmit={(e)=>handleRegister(e)} className="w-full">
        <section className="w-full md:w-auto flex flex-col md:flex-row items-center justify-center gap-5">
          <motion.input type="email" name='email' initial={{ opacity: 0, translateX: 5 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{delay: 0.2}} className="rounded-[16px] py-[12px] px-[12px] bg-none border-foreground border-2 w-10/12 md:w-72 md:focus:w-80 transition-all animate-fade-left" placeholder="Email" />
          <motion.section initial={{ opacity: 0, translateX: 5 }} whileInView={{ opacity: 1, translateX: 0 }} transition={{delay: 0.2}}>
            <button disabled={isPending} className={`rant-button hover:cursor-pointer rounded-[16px] ${!isPending ? "p-[12px]" : "py-[12px] px-[30px]"} animate-fade-right font-semibold whitespace-nowrap`}>
              {isPending
                ? <Loading/>
                : "Join Waitlist"
              }
            </button>
          </motion.section>
        </section>
      </form>)}
  </>);
}