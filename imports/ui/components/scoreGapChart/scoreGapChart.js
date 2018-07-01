import { Template } from 'meteor/templating';
import 'meteor/peernohell:c3';
import { TAPi18n } from 'meteor/tap:i18n';

import './scoreGapChart.jade';

Template.scoreGapChart.onRendered(function() {
  let chart = c3.generate({
    size: {
      height: 240
    },
    bindto: this.find('#gameGapChart'),
    padding: {
      right: 50
    },
    data: {
      xs: {
        [`${TAPi18n.__('gameGap')}`]: 'x'
      },
      columns: [
        [`${TAPi18n.__('gameGap')}`]
      ],
      axes: {
        [`${TAPi18n.__('gameGap')}`]: 'y2'
      }
    },
    axis: {
      x: { show: false },
      y: { show: false },
      y2: { show: true }
    },
    tooltip: {
      format: {
        title() {
          return `${TAPi18n.__('gameGap')}`;
        }
      }
    }
  });

  this.autorun(function() {
    let xArray = ['x'];
    let yArray = [`${TAPi18n.__('gameGap')}`];
    Template.parentData(1).gameData.evolution.map((cur) => {
      xArray.push(cur[0]);
      yArray.push(cur[1]);
    });
    chart.load({
      columns: [
        xArray,
        yArray, []
      ]
    });
  });
});
