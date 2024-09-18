import useAlert from './useAlert';

const Alert = ({ clients }) => {
  const displayAlert = useAlert({ clients });

  if (!displayAlert) return null;

  return (
    <div className="alert">
      <p> New client has been added </p>
    </div>
  );
};

export default Alert;