import React from "react"

const AboutContent = (props)=>{
    console.log(props)
    const {data} = props
    return(
        <div>
            {
                data && data.map(item=>{
                    return(
                        <div key={item.id}> 
                        <h3>{item.header}</h3>
                        <p>{item.context}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AboutContent