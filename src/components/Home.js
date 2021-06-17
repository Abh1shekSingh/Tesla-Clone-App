import React from 'react'
import Section from "./Section"

function Home() {
  
      
    return (
        <div>
            <Section 
                model= "Model S"
                backgroungImg = "model-s.jpg"
                description = "Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section 
                model= "Model Y"
                backgroungImg = "model-y.jpg"
                description = "Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section 
                model= "Model 3"
                backgroungImg = "model-3.jpg"
                description = "Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section 
                model= "Model X"
                backgroungImg = "model-x.jpg"
                description = "Order Online For Touchless Delivery"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
             <Section 
                model= "Lower Cost Solar Panels In India"
                backgroungImg = "solar-panel.jpg"
                description = "Money-back guarantee"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
             <Section 
                model= "Solar for New Roofs"
                backgroungImg = "solar-roof.jpg"
                description = "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                leftBtnText="Order Now"
                rightBtnText="Learn More"
            />
             <Section 
                model= "Accessories"
                backgroungImg = "accessories.jpg"
                description = ""
                leftBtnText="Shop Now"
                rightBtnText="Learn More"
            />
        </div>
    )
}

export default Home;
