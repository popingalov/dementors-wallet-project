import BackgroundContainer from "components/backgroundContainer";
import TransactionsTable from "components/transactionsTable";
import Nav from '../nav';
import s from './Dashboard.module.css';

export default function DashBoard() {
    return <BackgroundContainer>
        <div  className={s.main_thumb}>
            <div className={s.left_thumb}>
            <Nav/>
        </div>
        <div className={s.right_thumb}>
                <TransactionsTable/>
        </div>
        </div>
        
    </BackgroundContainer>
    
}

