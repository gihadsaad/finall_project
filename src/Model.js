import "./FormStyles.css"
export default function Model({isVisable,errorMessage=null}){
    if(isVisable){
    return(
        <div id="model">
            <div id="model-content">
                
                <h1 style={{color :errorMessage?"red" :"green"}}>
                {errorMessage!=null ? errorMessage : "the form successfully"}</h1>
            </div>
        </div>
    )
}else{
    return <></>
}
}