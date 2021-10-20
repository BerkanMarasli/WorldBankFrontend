import "./App.css"
import CreateAccount from "./createAccount"
import Login from "./login"

function App() {
    return (
        <div className="text-center">
            <head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossorigin="anonymous"></link>
            </head>
            <img
                src="https://www.bellanaija.com/wp-content/uploads/2015/08/World-Bank-logo.jpg"
                class="w-25"
                alt="worldBankLogo"
            />
            <CreateAccount />
            {/* <Login /> */}
        </div>
    )
}

export default App
