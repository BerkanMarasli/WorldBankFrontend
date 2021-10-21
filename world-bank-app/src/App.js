import "./App.css"
import CreateAccount from "./CreateAccount"
import Login from "./Login"
import MainSearch from "./MainSearch"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="text-center">
                <img
                    src="https://www.bellanaija.com/wp-content/uploads/2015/08/World-Bank-logo.jpg"
                    class="w-25"
                    alt="worldBankLogo"
                />
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/createAccount" component={CreateAccount} />
                    <Route path="/mainSearch" component={MainSearch} />
                </Switch>
            </div>
        </Router>
    )
}

export default App
