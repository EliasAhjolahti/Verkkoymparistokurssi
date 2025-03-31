import { useState } from "react"

export default function TransactionForm({ onAdd }) {
const[description, setDescription] = useState("")
const[sum, setSum] = useState("")

const handleSubmit = (e) => {
    e.preventDefault();
onAdd({ description, sum: parseFloat(sum) });
setDescription("");
setSum("");
}


return(
<div>
<form onSubmit={handleSubmit}>
Description:
<input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
Sum:
<input type="number" value={sum} onChange={(e) => setSum(e.target.value)}/>

<button type="submit">Add transaction</button>

</form>
</div>
)

}