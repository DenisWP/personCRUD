import styled from 'styled-components';

export const TableHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
        input {
            border: 0;
            border-bottom: 2px solid #9e9e9e;
            outline: none;
            width: 100%
        }
        
        Button {
          font-size:15px;
          font-family:Arial;
          width:140px;
          height:50px;
          border-width:1px;
          color:#fff;
          border-color:#18ab29;
          border-top-left-radius:28px;
          border-top-right-radius:28px;
          border-bottom-left-radius:28px;
          border-bottom-right-radius:28px;
          text-shadow: 1px 1px 0px #2f6627;
          background:#5584AC;
        }
`;


/*.button-table{
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}*/