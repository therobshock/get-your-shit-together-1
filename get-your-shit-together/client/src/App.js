import React, { Component } from "react";
import * as Survey from "survey-react";
import API from "./utils/API";

import {BrowserRouter as Router} from "react-router-dom";
import Route from "react-router-dom/Route";
import "survey-react/survey.css";
// import SurveyCreator from "./SurveyCreator";
import ItemQuestions from "./Components/ItemQuestions";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Description from "./Components/Description";
import DashBody from "./Components/DashBody";
import Nav from "./Components/Nav";
import JournalQs from "./Components/JournalQs";
// import logo from "./logo_draft.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";
import * as widgets from "surveyjs-widgets";

import "icheck/skins/square/blue.css";
window["$"] = window["jQuery"] = $;
require("icheck");

Survey.StylesManager.applyTheme("default");

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {

  state = {
    shit: [],
    item: "",
    importance: "",
    sentiment: "",
    usefulness: "",
    replaceable: "",
    danger: "",
    rating: "",
    journal: ""
  };

  componentDidMount() {
    console.log("Mounted");
  };

  loadShit = () => {
    API.getShit()
      .then(res =>
        this.setState({ shit: res.data, item: "", type: "", journal: "" })
      )
      .catch(err => console.log(err));
  };

  deleteShit = id => {
    API.deleteShit(id)
      .then(res => this.loadShit())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.item && this.state.type) {
      API.saveShit({
        item: this.state.item,
        importance: this.state.importance,
        sentiment: this.state.sentiment,
        usefulness: this.state.usefulness,
        replaceable: this.state.replaceable,
        danger: this.state.danger,
        rating: this.state.rating,
        journal: this.state.journal
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };


  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      // Note: Router tags are wrapped around the App div
      <Router>
        <div className="App">
          {/* Routes - dependent on React-router  */}

          <Route path="/dashboard" exact render={
            () => {
              return (<div><Nav /><Header /><DashBody /></div>)
            }
          } />

          {/* Routes - dependent on React-router  */}

          <Route path="/Home" exact render={
            () => {
              return (<div><Nav /><Header /> <br /> <h1>Welcome! Get Your 💩 Together</h1></div>)
            }
          } />
          <Route path="/" exact render={
            () => {
              return (<div><Nav /><Header />
                <Description />
                <Footer />
              </div>)
            }
          } />
          <Route path="/add-shit" exact render={
          ()=> {
            return (<div><Nav /><Header /> <div className="itemQuestDiv"><h1 className="surveyTitle">Add Your $#!T</h1><p className="questInstructions">Just fill out this quick form to add an item you want to get rid of. </p> <ItemQuestions /><div id="yourScore"></div></div>
                    </div>
            )
          }
          }/>
          <Route path="/journal" exact render={
          ()=> {
            return (<div><Nav /><Header /><div className="journalDiv"><h1>Talk About Your $#!T</h1><JournalQs /> <Footer /></div>
              
          </div>
            )
          }
          }/>
      </div>
      </Router>
    );
  }
}

export default App;