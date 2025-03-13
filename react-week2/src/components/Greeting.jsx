import NameInput from "./NameInput"

export default function Greeting({NameInput}) {
    return(
        <div className="bordered">
    <h1>Hello {NameInput}</h1>
    </div>
    )
}