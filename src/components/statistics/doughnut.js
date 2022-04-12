import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels,
} from '@progress/kendo-react-charts';
import { COLORS } from './constans';

// Graph data
const applicationsStatusThisMonth = [
  {
    status: '',
    value: 14,
    color: COLORS.accepted,
  },
  {
    status: '',
    value: 14,
    color: COLORS.interviewing,
  },
  {
    status: '',
    value: 40,
    color: COLORS.rejected,
  },
  {
    status: '',
    value: 32,
    color: COLORS.pending,
  },
];

// Show category label for each item in the donut graph
const labelContent = e => e.category;

const Charts = props => {
  return (
    <Chart>
      <ChartTitle text="Applications status - this month" />
      <ChartLegend visible={false} />
      <ChartSeries>
        <ChartSeriesItem
          type="donut"
          data={applicationsStatusThisMonth}
          categoryField="status"
          field="value"
          width='100px'
        >
          <ChartSeriesLabels
            color="#fff"
            background="none"
            content={labelContent}
          />
        </ChartSeriesItem>
      </ChartSeries>
    </Chart>
  );
};

export default Charts;
