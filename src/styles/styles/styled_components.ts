import styled from "styled-components";

export const StyledMainInput = styled.input`
    width: 300px;
    font-size: 15px;
    height: 25px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid lightgray;
`;

export const StyledMainButton = styled.button`
  appearance: none;
  background-color: #fbfafa;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  padding: 6px 16px;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
`;

export const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledTable = styled.table`
  width: 100%;
  margin: 0 1rem;
`;

export const StyledTableTr = styled.tr`
  &:nth-child(even) {background: #fbfafa}
  &:nth-child(odd) {background: #FFF}
`;

export const StyledTableTh = styled.th`
  padding: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
`;

export const StyledTableTd = styled.td`
  padding: 0.5rem 1rem;
  text-align: center;
`;