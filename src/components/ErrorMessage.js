function ErrorMessage({ message }) {
  return (
    <div style={{ color: "red", padding: "1rem", textAlign: "center" }}>
      <p>Error: {message}</p>
    </div>
  );
}

export default ErrorMessage;
