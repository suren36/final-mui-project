import React from 'react'
import { Box } from "@mui/material"
import { ContentItem } from '../content/ContentItem'

export const content = () => {

  const contentArray = [
    {
      title: "Fried Chicken",
      description: "This is the description for title1. It provides an overview of the content and its main points.",
      image: "/src/assets/img1.avif"
    },
    {
      title: "Burger",
      description: "This is the description for title2. It includes details about the content and its significance.",
      image: "/src/assets/img2.avif"
    },
    {
      title: "Combo",
      description: "This is the description for title3. It highlights the key aspects and important information.",
      image: "/src/assets/img3.avif"
    }
  ]
  return (
    <Box>
      {contentArray.map((cont, index) => (
        <ContentItem cont={cont} title={cont.title} description={cont.description} img={cont.image} key={index}  swap={index % 2 == 0}/>
      ))}
    </Box>
  )
}

export default content
