export default function ErrorAlert({ message }) {
  return (
    <div className="alert alert-danger mt-4">
      <small>{message} 😥</small>
    </div>
  )
};

ErrorAlert.defaultProps = {
  message: ''
};
