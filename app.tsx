import { FC } from 'react';
import { Theme } from '@material-ui/core';
import { createGenerateClassName } from '@material-ui/styles';
import ErrorBoundary from 'components/shared/ErrorBoundary';
import AppError from './AppError';
import index from 'pagesIndex';

export const App: FC<IProps> = ({ authToken, theme }) => {
  return (
    <ErrorBoundary FallbackComponent={AppError}>
      <div style={{ padding: 20 }}>
            <Pages />
      </div>
    </ErrorBoundary>
  );
};

export default App;
