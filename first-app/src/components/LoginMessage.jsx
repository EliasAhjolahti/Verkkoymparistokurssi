export default function LoginMessage({ isLoggedIn }) {
    return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>
}