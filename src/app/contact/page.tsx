'use client'
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import { log } from "console";
 

const Contact = () => {

  const validationSchema=yup.object().shape({
    name:yup.string().required().label('name is required'),
    email:yup.string().required().email('email is required'),
    // message:yup.string().required()
  })

  const {
    control,
    reset,
    setError,
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<any>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit=(data:any)=>{
    console.log("data",data);
  }

  console.log('error',errors)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input type="text"
              id="name"
              {...register("name")} placeholder="name" className={styles.input}/>
              <p style={{color:'red'}}>{errors.name?.message}</p>
          <input type="text" id="email" {...register("email")}  placeholder="email" className={styles.input} />
          <p style={{color:'red'}}>{errors.email?.message}</p>
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"

            {...register("message")} 
          ></textarea>
          <p style={{color:'red'}}>{errors.message?.message}</p>

         <input type="submit"/>
          {/* <Button url="#" text="Send" /> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;