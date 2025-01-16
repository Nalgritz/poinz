import {Route, Routes, Link} from 'react-router-dom';
import {Provider} from 'react-redux';

import initialState from './state/initialState';
import configureStore from './state/configureStore';
import ErrorBoundary from './components/common/ErrorBoundary';
import { WithL10n } from './services/l10n';
import GlobalStyle from './components/GlobalStyle';
import Main from './components/Main';

const store = configureStore(initialState());
export function App() {
  return (
    <div>
      {/* <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route. <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes> */}

      <ErrorBoundary>
        <Provider store={store}>
          <WithL10n>
            <GlobalStyle />
            <Main />
          </WithL10n>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
