"use client";
import React from 'react'
import Slide from './_components/Slide'
import Category from './_components/Category';
import Featurepdct from './_components/Featurepdct';


const page = () => {
  return (
    <div className="md:pt-[4.944rem] sm:pt-[2.455rem] ">
      <Slide />
      <Category/>
      <Featurepdct/>


    </div>
  )
}

export default page
