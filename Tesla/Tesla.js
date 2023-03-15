import React from 'react'
import Header from './Header'
import Section from './Section'
import "./Tesla.css"


function Tesla() {
  return (
    <div>
        <Header/>
        <Section
         Name = "Model 3"
         desc = "Order Online for touchless delivery"
         backimg = "model-3.jpg"
         leftbtn = "Custom Order"
         rightbtn = "Existing Inventory"
         ico = {true}
         />
        <Section 
        Name = "Model Y"
        desc = "Order Online for touchless delivery"
        backimg = "model-y.jpg"
        leftbtn = "Custom Order"
        rightbtn = "Existing Inventory"
        />
        <Section 
        Name = "Model S"
        desc = "Order Online for touchless delivery"
        backimg = "model-s.jpg"
        leftbtn = "Custom Order"
        rightbtn = "Existing Inventory"

         />
        <Section 
        Name = "Model X"
        desc = "Order Online for touchless delivery"
        backimg = "model-X.jpg"
        leftbtn = "Custom Order"
        rightbtn = "Existing Inventory"

        />
        <Section
         Name = "Solar Panel"
         desc = "Lower Cost Solar Panels in India"
        backimg = "solar-panel.jpg"
        leftbtn = "Custom Order"
        rightbtn = "Existing Inventory"

         />
        <Section 
        Name = "Solar Roof" 
        desc = "Produce Clean Energy from your roof"
        backimg = "solar-roof.jpg"
        leftbtn = "Custom Order"
        rightbtn = "Existing Inventory"

        />
        <Section
         Name = "Accessories"
         backimg = "accessories.jpg"
         leftbtn = "Order Now"
         blackbg = {true}
         />
    </div>
  )
}

export default Tesla