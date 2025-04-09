import { useActionState } from "react";




function AddHobbyFormAction(prevFormState, formData) {
const name = formData.get('name');
const description = formData.get('description')
const skillLevel = formData.get('skill-level')





let errors = [];

if (errors.length > 0){
    return {errors, enteredValues : {
        name, description, skillLevel
    }}
}

}








export default function AddHobbyForm() {

    const [formState, formAction] = useActionState(AddHobbyFormAction, {errors: null})

    return (

        <form action={formAction}>
            <div>
                <label htmlFor="name">name</label>
                <input
                id="name"
                type="text"
                name="name"
                defaultValue={formState.enteredValues?.name}
                />
                
               
            </div>

            <div>
            <label htmlFor="description">description</label>
            <input
            id="description"
            type="text"
            name="description"
            defaultValue={formState.enteredValues?.description}
            />
            
            
            </div>


            <div>
            <label htmlFor="skill-level">Skill Level</label>
            <input
            id="skill-level"
            type="text"
            name="skill-level"
            defaultValue={formState.enteredValues?.skillLevel}
            />

            </div>

        <button type="submit"> Add hobby </button>
        </form>
    );
}