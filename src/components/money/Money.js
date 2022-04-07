import s from './Money.module.css';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Svg from './Svg';
export default function Money() {
  return (
    <div className={s.container}>
      <TableHeader />
      <div className={s.gap}>
        <TableRow />
        <TableRow />
        <TableRow />
      </div>
      <Svg />
    </div>
  );
}
