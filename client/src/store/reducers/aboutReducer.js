const initState={
    data:[
        {
            id:'1', 
            header:'Something Something', 
            context:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium vero doloribus facilis impedit consectetur! Architecto, alias, sunt rerum possimus doloremque assumenda ducimus reprehenderit ex numquam sint reiciendis officia distinctio."
        },
        {
            id:'2', 
            header:'Something Something', 
            context:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium vero doloribus facilis impedit consectetur! Architecto, alias, sunt rerum possimus doloremque assumenda ducimus reprehenderit ex numquam sint reiciendis officia distinctio."
        },
        {
            id:'3', 
            header:'Something Something', 
            context:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium vero doloribus facilis impedit consectetur! Architecto, alias, sunt rerum possimus doloremque assumenda ducimus reprehenderit ex numquam sint reiciendis officia distinctio."
        },
    ]
}

const aboutReducer= (state=initState, action)=>{
    return{
        ...state
    }
}

export default aboutReducer