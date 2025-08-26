function Greetings(props){


return(
    props.name.map((singleElement)=>{
        return <div>Hello {singleElement}</div>
    })
)
}
export default Greetings;