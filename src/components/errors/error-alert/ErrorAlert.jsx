export default function ErrorAlert({ message }) {
  return (
    <div className="alert alert-danger">
      <small>{message} 😥</small>
    </div>
  )
}
