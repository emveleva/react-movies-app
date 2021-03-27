import style from './ErrorHandler.module.css';

const ErrorHandler = ({
  children,
}) => {
  if (!children) {
      return null;
  }

  return (
      <div className={style.errorStyle}>
        <span>{children}</span></div>
  );
}


export default ErrorHandler