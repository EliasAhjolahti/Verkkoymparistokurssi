import { useFormStatus } from 'react-dom';

export default function Submit({ pending_text, action_text, formAction }) {
    const { pending } = useFormStatus();


    return (
        <form action={formAction}>
        <button type="submit" disabled={pending}>
        {pending ? pending_text : action_text}
        </button>
        
        </form>
        
        )
}

