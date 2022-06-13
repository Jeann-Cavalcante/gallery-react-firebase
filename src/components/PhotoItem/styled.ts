import styled from "styled-components";

export const Container = styled.div`
  background-color: #3d3f43;
  border-radius: 10px;
  padding: 10px;
  height: 200px;
  width: 280px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    min-width: 100%;
    max-height: 80%;

    margin-bottom: 10px;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 632px) {
    height: 200px;
    width: 220px;
    padding: 5px;
    margin: 0;

    justify-content: space-between;

    img {
      max-width: 90%;
      min-height: 80%;
    }
  }
`;

export const cardButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
`;

export const Name = styled.div`
  height: 30px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 5px;

  display: flex;

  @media (max-width: 631px) {
    font-size: 14px;

    margin-bottom: 0;
  }
`;

export const ButtonDelete = styled.div`
  margin: 0;
  padding: 0;
  button {
    background-color: #756df4;
    border: 0;
    color: #fff;
    padding: 8px 8px;
    font-size: 15px;
    border-radius: 10px;
    margin: 0 5px;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
