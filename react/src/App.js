// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes } from "./utils/customRoutes";
import { SnackbarProvider } from "notistack";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { MembersDashboard } from "src/screens/members/dashboard";
import store from "./redux/store";
import SocialsM from "./components/socialsM/socialsM"
const allPublicRoutes = Object.values(publicRoutes);

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={1} preventDuplicate>
        <Router>
          <SocialsM/>
          <Switch>
            {allPublicRoutes.map((route, index) => (
              <Route
                exact
                key={index}
                path={route.path}
                component={route.component}
              />
            
            ))}
            <PrivateRoute
              exact
              path="/dashboard"
              component={MembersDashboard}
            />
          </Switch>
        </Router>
      </SnackbarProvider>
    </Provider>
  );
}

const PrivateRoute = ({ component: Component, ...propsRest }) => {
  const userSignin = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignin;
  return (
    <Route
      {...propsRest}
      render={(props) => {
        return userInfo && userInfo.token ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default App;
