function Button(props){

    const incrementChange =()=>{
        props.increment();
    }
    const decrementChange =()=>{
        props.decrement();
    }
    return(
        <div>
            <button onClick={incrementChange} style={{background:'green'}}>+</button>
        
            <button onClick={decrementChange} style={{background:'red'}}>-</button>
        </div>
    )
}
export default Button;