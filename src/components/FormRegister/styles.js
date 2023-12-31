import styled from "styled-components";

export const DivRegister = styled.form`
  height: 892px;
  max-height: max-content;
  width: 370px;
  padding: 42px 22px;

  border-radius: 4px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: var(--grey-0);
  align-items: center;
  gap: 1rem;
  @media (max-width: 800px) {
    width: 100%;
    padding: 1rem 1rem;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    font-weight: 400;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 800px) {
      width: 100%;
      align-items: center;
    }
  }
  select {
    color: #868e96;
  }
  .active {
    color: var(--grey-0);
  }
`;
