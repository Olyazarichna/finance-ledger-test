import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  className,
  buttonType = "button",
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={buttonType}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
};
export default Button;
