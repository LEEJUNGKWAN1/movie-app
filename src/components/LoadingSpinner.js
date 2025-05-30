import styled from "styled-components";

function LoadingSpinner() {
  return (
    <Loading>
      <Spinner />
      Loading...
    </Loading>
  );
}

export default LoadingSpinner;

const Loading = styled.h1`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #82aaff;
`;

const Spinner = styled.div`
  margin-bottom: 16px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #82aaff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
