export default function Greeting({ name }) {
    return (
        <div className="bordered">
            <h1>Hello {name ? name : "Guest"}</h1>
        </div>
    );
}
