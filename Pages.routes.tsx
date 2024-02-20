import { Navigate, useRoutes } from 'react-router-dom';
import Routes from 'constants/routes';
import Hierarchy from 'pages/Hierarchy/Hierarchy';
import Edit from './Edit';
import { useGetUserRolesQuery } from 'api/hierarchy/getUserRoles';
import Loader from 'components/shared/Loader';
import { Typography } from '@portal-platform/ui-components';
import * as Strings from 'constants/strings';
import ProtectedRoute, { StateRoute } from 'components/ProtectedRoute';
import { GetHierarchyNodeInformationParameters } from 'api/hierarchy';
import { LocationState } from 'types/LocationState';

const PagesRoutes = () => {
  const { isError, isFetching } = useGetUserRolesQuery();

  const routes = useRoutes([
    {
      path: '/',
      element: <Navigate replace to={Routes.base} />,
    },
    {
      path: `${Routes.base}`,
      element: <Hierarchy />,
    },
    {
      path: `${Routes.base}${Routes.edit}`,
      element: (
        <ProtectedRoute grant="canUpdateHierarchy">
            <Edit />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <Navigate replace to={Routes.base} />,
    },
  ]);

  if (isFetching) return <Loader />;
  if (isError)
    return (
      <Typography variant="h6" align="center">
        {Strings.errorValidatingUserRoles()}
      </Typography>
    );

  return routes;
};

export default PagesRoutes;
