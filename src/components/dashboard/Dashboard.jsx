import TransactionsTable from "components/transactionsTable";
import s from './Dashboard.module.css'

export default function DashBoard({transactions}) {
    return <div className={s.background}>
        <TransactionsTable transactions={transactions} />
    </div>
    
}