import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { createGenerateClassName } from '@material-ui/styles';
import ErrorBoundary from 'components/shared/ErrorBoundary';
import AppError from './AppError';
import index from 'pagesIndex';
import { BrowserRouter as Router } from 'react-router-dom';
export const App: FC<IProps> = ({ authToken, theme }) => {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <div style={{ padding: 20 }}>
        <Router>
            <Pages />
        </Router>
      </div>
    </ErrorBoundary>
  );
};

export default App;
