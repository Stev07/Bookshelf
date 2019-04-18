import React, {Component} from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import CoolTabs from "react-cool-tabs";
import "./scss/coachinterface.scss";
import Footer from "./Footer";

class Content1 extends Component {
    render() {
        return (
            <div className="tabs-content">
                <div className="coach-form1">
                    <p>First Name:</p>
                    <input />
                    <p>Last Name:</p>
                    <input />
                    <div />
                    <select form="class-name">
                        <option value="Hamilton">Hamilton</option>
                        <option value="Jepsen">Jepsen</option>
                    </select>
                </div>

                <div className="coach-form2">
                    <p>Email:</p>
                    <input type="email" />
                    <p>Password:</p>
                    <input type="password"/>
                    <p>Confirm password:</p>
                    <input type="password"/>

                    <input type="submit"/>
                </div>
            </div>
        );
    }
}
class Content2 extends Component {
    render() {
        return (
            <div className="tabs-content">
                <div className="coach-form1">
                    <form>
                        <p>Book Title:</p>
                        <input />
                        <p>ISBN</p>
                        <input />
                        <p>Physical</p>
                        <input type="checkbox" name="physical"/>
                    </form>
                </div>

                <div className="coach-form2">
                    <form>
                        <p>Author:</p>
                        <input />
                        <p>Release date:</p>
                        <input />
                        <br />
                        <p>Ebook</p>
                        <input type="checkbox" name="ebook"/>
                        <br/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default class CoachInterface extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <div className="tabs">
                    <CoolTabs
                        tabKey={"1"}
                        style={{
                            width: "100%",
                            height: "70vh",
                            background: "white",
                        }}
                        activeTabStyle={{background: "white", color: "#50a8a2"}}
                        unActiveTabStyle={{
                            background: "#50a8a2",
                            color: "white",
                        }}
                        activeLeftTabBorderBottomStyle={{
                            background: "#50a8a2",
                            height: 4,
                        }}
                        activeRightTabBorderBottomStyle={{
                            background: "#50a8a2",
                            height: 4,
                        }}
                        tabsBorderBottomStyle={{background: "white", height: 4}}
                        leftContentStyle={{background: "white"}}
                        rightContentStyle={{background: "#50a8a2"}}
                        leftTabTitle={"Add members"}
                        rightTabTitle={"Add books"}
                        leftContent={<Content1 />}
                        rightContent={<Content2 />}
                        contentTransitionStyle={"transform 0.6s ease-in"}
                        borderTransitionStyle={"all 0.6s ease-in"}
                    />
                </div>
            </div>
        );
    }
}
