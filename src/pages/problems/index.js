import styled from 'styled-components'
import Text from '../../components/Text'

const Wrapper = styled.div`
  display: flex;
  .problems{
    flex:1;
  }
`;
const Control = styled.div``;
const Sidebar = styled.div`
  width:30rem;
`;
const ProblemsTable = styled.div`
  background: ${({theme})=>theme.colors.light[4]};
  padding: 2rem;
  border-radius: 1.6rem;
  .table{
    display: table;
    width: 100%;

    &__row{
      display: table-row;
      vertical-align: baseline;
    }
    &__cell{
    display: table-cell;
    vertical-align: middle;
  padding: 0 2rem 1rem;
  color:1px solid ${({theme})=>theme.colors.dark[1]};
    font-size:1.5rem;
    border-bottom: 1px solid ${({theme})=>theme.colors.light[1]};
    &:nth-child(2){
      width:100%;
    }
    }
    &.table__row_head{
      .table__cell{
        padding-top: 24px;
        padding-bottom: 24px;
        font-size: 13px;
        line-height: 1.38462;
        font-weight: 500;
        color: #B2B3BD;
      }
    }
  }

`;

const Problems = ()=>{
  return <Wrapper className="wrapper" >
    <div className="problems">
      <Control>
        <Text type="h3">Control</Text>
      </Control>
      <ProblemsTable>
       <div className="table">
         <div className="table__row table__row_head{}">
           <div className="table__cell">#</div>
           <div className="table__cell">name</div>
           <div className="table__cell">difficulty</div>
           <div className="table__cell">solution</div>
         </div>
       </div>
     </ProblemsTable>
    </div>
    <Sidebar>
      <Text type="h3">Sidebar</Text>
    </Sidebar>
  </Wrapper>
}

export default Problems;
