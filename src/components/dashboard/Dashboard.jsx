import { connect } from 'react-redux';
import TransactionsTable from "components/transactionsTable";
import s from './Dashboard.module.css'
import Nav from '../nav'
import { transactionsOperations } from 'redux/transactions';
import BackgroundContainer from "components/backgroundContainer";

function DashBoard({ transactions }) {
    return <BackgroundContainer>
        <div  className={s.main_thumb}>
            <div className={s.left_thumb}>
            <Nav/>
        </div>
        <div className={s.right_thumb}>
            <TransactionsTable transactions={transactions} />
        </div>
        </div>
        
    </BackgroundContainer>
    
}

const mapStateToProps = state => ({
  transactions: transactionsOperations.getTransactions(state)
});

export default connect(mapStateToProps)(DashBoard);