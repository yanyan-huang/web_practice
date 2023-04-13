import { useParams } from "react-router-dom";

export default function AddScreen(
    {
        a=123, b=32
    })
    
    {
        const {paramA, paramB} = useParams()
        console.log(paramA, paramB)
        a = parseInt(paramA)
        b = parseInt(paramB)
    // console.log(props)
    // const a = props.a
    // const b = props.b
    // const {a, b} = props

    return (
        <div>
            <h2>Add Screen</h2>
            a = {a} <br/>
            b = {b} <br/>
            a + b = {a + b}
        </div>
    )
}