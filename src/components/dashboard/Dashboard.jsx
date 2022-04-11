import TransactionsTable from "components/transactionsTable";
import s from './Dashboard.module.css'
import Nav from '../nav'
import BackgroundContainer from "components/backgroundContainer";

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

