import React from 'react';
import PieChart, {
  Legend,
  Export,
  Series,
  Label,
  Font,
  Connector
} from 'devextreme-react/pie-chart';

class DevPieChart extends React.Component {
    constructor(props){
        super(props)
        this.dataSource = [{
                asset: 'Tables',
                count: 1864
            }, {
                asset: 'Cots',
                count: 576
            }, {
                asset: 'Cpu',
                count: 262
            }, {
                asset: 'Refrigerator',
                count: 236
            }, {
                asset: 'Cabinets',
                count: 1076
            }, {
                asset: 'Artwork',
                count: 476
            }, {
                asset: 'Chairs',
                count: 1446
            }, {
                asset: 'Benches',
                count: 299
            }];
    }

  render() {
    return (
      <PieChart id="pie"
        palette="Bright"
        dataSource={this.dataSource}
        theme="generic.light"
      >
        <Legend
          orientation="horizontal"
          itemTextPosition="right"
          horizontalAlignment="center"
          verticalAlignment="bottom"
          columnCount={12} />
        <Export enabled={true} />
        <Series argumentField="asset" valueField="count">
          <Label
            visible={true}
            position="columns"
            customizeText={customizeText}>
            <Font size={16} />
            <Connector visible={true} width={0.5} />
          </Label>
        </Series>
      </PieChart>
    );
  }
}

function customizeText(arg) {
  return `${arg.valueText} nos`;
}

export default DevPieChart;
