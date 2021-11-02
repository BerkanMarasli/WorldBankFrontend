### README

Welcome to World bank indicators, where you can search 5.66 million rows of development indicators data.

Want to know the total Employment in Brazil between 1970 and 1989? Or the % of urban population that have access to non-liquid fuel in Canada between 2010 and 2015? What about the GDP per capita of Mongolia in 1962? Use this website to answer all these questions and more.

Data is available between 1960 and 2017 only. Please note some countries do not have data recorded for every indicator in every year. All data is collected from “World Development Indicators” dataset on Kaggle: https://www.kaggle.com/kaggle/world-development-indicators

### Features:

**Search history.** This displays what other users are searching for (including when the search was made).

**Graphs.** If data is available for multiple years, the data will be displayed in a line-graph. _Please note, if data is unavailable for a certain period, then the graph will not include data from that period. For example, suppose you searched for the GDP of Burkina Faso between 1970 and 2010, but there was no data available for the years 1970-90. In this case, the graph will begin from 1991 and not include any years prior to this._

**Create account/login.** To use this website you must first create an account. Users will be logged out of their account after 2 minutes.
**Logout.** Logs a user out.
**Range sliders.** Choose your year range by sliding the dots on the sliders.

### Features not yet implemented:

**Search history -** “View this search” button - please note that these buttons are for aesthetic purposes only at this time.

**Search history - “user” -** please note that all searches are recorded as being from “admin@admin.com" .

**Search history -** “filter by user”. Please note that ALL users will be able to see what ALL OTHER users have searched for. There is no option to only display searches from a specific user.

### Technologies used:

**React bootstrap (NOT regular bootstrap).** This was used to style the buttons, forms and layout of our webpages. https://react-bootstrap.github.io/getting-started/introduction/
**Formik.** This was used to handle form submission. https://formik.org/
**Yup.** This was used to handle form validation. https://www.npmjs.com/package/react-yup
**ReCharts.** Makes the charts to display our data. https://recharts.org/en-US/
**Express.** Used tor backend magic. https://expressjs.com/
**Axios.** used to handle HTTP requests and responses. https://axios-http.com/
**ElephantSQL.** Used to create and host our databases. https://www.elephantsql.com/
**Yarn.** Package manager used to install the relevant packages above. https://yarnpkg.com/

### Installation guide

Available soon!

### Endpoints:

**/signup -** this creates a user account.
**/login -** this logs users in
**/distinctcountries -** this returns the distinct country for your search. For example, if countryName=“Argentina”, this would return Argentina’s data for all available indicators.  
**/history -** this returns the global search history. (i.e. every search from every user).
**/username/:userid -** this returns the username for the relevant user_id. For example, suppose you wanted to know what user has the user_id of 60. In this case, you would go to /username/60 and this endpoint would return the relevant username (e.g.“Berkan99”).

### Contributors

Mo Hazrati - https://github.com/mohhaz64
Berkan Maraşlı - https://github.com/BerkanMarasli
Sean Flynn - https://github.com/sf17490

We hope you enjoy this service. Any suggestions, requests, contributions or feedback is welcome! Open up a pull request.
