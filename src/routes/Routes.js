import React from 'react';
import {Switch, Route, Redirect  } from 'react-router-dom';
import ROUTES from "../constants/routesNames";
import CounterContainer from '../pages/CounterPage/containers/CounterContainer';
import CounterContainer2 from '../pages/CounterPage2/containers/CounterContainer2';

const Routes = () => {
        return (       
                        <Switch>
                                <Route exact path={ROUTES.HOMEPAGE} component={()=><div>home page</div>}/>
                                <Route exact path={ROUTES.COUNTER} component={CounterContainer}/>
                                <Route exact path={ROUTES.COUNTER_OF_COUNTERS} component={CounterContainer2}/>
                        </Switch>
        );
};

export default Routes;