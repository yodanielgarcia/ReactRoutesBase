import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Routes from '../../constants/routes';
import { selectValidatePermission, TOption } from 'state/permissions';
interface IProps {
  grant: TOption;
}
const ProtectedRoute: FC<IProps> = ({ children, grant }) => {
  const hasAccess = useSelector(selectValidatePermission(grant));
  return hasAccess ? <>{children}</> : <Navigate replace to={Routes.base} />;
};
export default ProtectedRoute;
