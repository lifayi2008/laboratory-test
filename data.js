export const sampleData = [
  {
    no: '221900052303',
    roundNo: '221900052303',
    chan: '1',
    jl: '1'
  },
  {
    no: '221900052304',
    roundNo: '221900052304',
    chan: '2',
    jl: '1'
  }
]

const paramsData = sampleData.map((item) => ({ no: item.no, chan: item.chan, roundNo: item.roundNo }))
const resultData = sampleData.map((item) => ({ no: item.no, jl: item.jl }))

const paramsCommon = {
  accuracy: '0.5S',
  liftGear: '',
  upperLoad: '10',
  powerFactor: '0.8L',
  turnNum: '',
  primaryLimit: '150',
  secondaryLimit: '5',
  lowerLoad: '3.75',
  varyRatioNum: '01',
}

export const processCommon = {
  totalTime: '60',
  leftTime: '4',
  propCount: sampleData.length.toString(),
}

const process39 = function (rate = '1.0', loads='upperLoads', radioStand = '1.2', radioRound = '0.1413', angleStand = '72', angleRound = '15.42') {
  return {
    ratioDiff: {
      [loads]: {
        stand: [
          {
            value: radioStand,
            rate
          }
        ],
        round: [
          {
            value: radioRound,
            rate
          }
        ]
      }
    },
    angleDiff: {
      [loads]: {
        stand: [
          {
            value: angleStand,
            rate
          }
        ],
        round: [
          {
            value: angleRound,
            rate
          }
        ]
      }
    }
  }
}

export const data = {
  params: {
    '3.5': {
      props: [...paramsData],
    },
    '3.6': {
      standValtage:"3000",
      totalTime:"60",
      leakCurrValue:"5",
      secCurrValue:"40",
      props: [...paramsData]
    },
    '3.7': {
      primaryValtageUpperValue: '3000',
      secondaryValtageLowerValue: '1',
      curr2Value: '5',
      curr1Value: '150',
      secFactor: '5',
      totalTime: '60',
      props: [...paramsData]
    },
    '3.9': {
      ...paramsCommon,
      props: [...paramsData]
    },
    '3.10': {
      ...paramsCommon,
      props: [...paramsData],
    },
    '3.12': {
      ...paramsCommon,
      turnNum: "1",
      props: [...paramsData],
    },
    '3.13': {
      ...paramsCommon,
      props: [...paramsData],
    },
    '3.14': {
      liftGear:"0(自动)",
      upperLoad:"10",
      powerFactor:"1.0",
      varyRatioNum:"01",
      lowerLoad:"3.75",
      primaryLimit:"200",
      secondaryLimit:"5",
      accuracy:"0.5S",
      plan2:{
        humid:"60",
        duration:"60",
        tempe:"150",
        humidDiff:"7.0",
        tempeDiff:"1.0"
      },
      plan1:{
        humid:"50",
        duration:"60",
        tempe:"-40",
        humidDiff:"7.0",
        tempeDiff:"1.0"
      },
      props: [...paramsData],
    },
    '3.15': {
      ...paramsCommon,
      props: [...paramsData],
    },
  },

  result: {
    '3.5': [...resultData.map(item => ({ ...item, resistValue: '0L' }))],
    '3.6': [...resultData.map(item => ({ ...item, resistValue: '0.01' }))],
    '3.7': [...resultData.map(item => ({
      ...item,
      resistValue: '0.044',
      secondaryValtage: '28.2',
      secFator: '3.0'
    }))],
    '3.8': [...resultData.map(item => ({
      ...item,
      resistValue: '0.044',
      secondaryValtage: '28.2',
      secFator: '3.0'
    }))],
    '3.9': resultData,
    '3.10': resultData,
    '3.12': resultData,
    '3.13': resultData,
    '3.14': resultData,
    '3.15': [...resultData.map(item => ({ ...item, riseTempe: '6.222' }))],
    '3.15.1': [...resultData.map(_ => ({no: "", jl: "1", riseTempe: ""}))]
  },

  process: {
    '3.5': [...sampleData.map((item) => ({ no: item.no, resistValue: '4798' }))],
    '3.6': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, leakCurrValue: '0.0', standValtage: '23' }))]
    },
    '3.7': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, secondaryValtage: '29.0Vp' }))]
    },
    '3.7-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, secFator: '3.0' }))]
    },
    '3.8': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, secFator: '3.0' }))]
    },
    '3.9': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39() }))]
    },
    '3.9-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('1.0', 'lowerLoads', '1.2', '0.1750', '72', '9.142') }))]
    },
    '3.9-5': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5.0', 'upperLoads', '0.45', '0.0865', '27', '12.89') }))]
    },
    '3.9-5-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5.0', 'lowerLoads', '0.45', '0.1504', '27', '8.413') }))]
    },
    '3.9-20': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20.0', 'upperLoads', '0.3', '0.0260', '18', '6.348') }))]
    },
    '3.9-20-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20.0', 'lowerLoads', '0.3', '0.1042', '18', '4.961') }))]
    },
    '3.9-100': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100.0', 'upperLoads', '0.3', '0.0745', '18', '3.23') }))]
    },
    '3.9-100-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100.0', 'lowerLoads', '0.3', '0.1207', '18', '1.78') }))]
    },
    '3.9-120': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('120.0', 'upperLoads', '0.3', '0.0826', '18', '5.32') }))]
    },
    '3.9-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('1.0', 'upperLoads', '1.3', '0.2750', '75', '12.142') }))]
    },
    '3.9-1-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('1.0', 'lowerLoads', '1.3', '0.2750', '75', '12.142') }))]
    },
    '3.9-5-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5.0', 'upperLoads', '0.45', '0.0865', '27', '12.89') }))]
    },
    '3.9-5-1-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5.0', 'lowerLoads', '0.45', '0.1504', '27', '8.413') }))]
    },
    '3.9-20-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20.0', 'upperLoads', '0.3', '0.0260', '18', '6.348') }))]
    },
    '3.9-20-1-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20.0', 'lowerLoads', '0.3', '0.1042', '18', '4.961') }))]
    },
    '3.9-100-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100.0', 'upperLoads', '0.3', '0.0745', '18', '3.23') }))]
    },
    '3.9-100-1-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100.0', 'lowerLoads', '0.3', '0.1207', '18', '1.78') }))]
    },
    '3.9-120-lt': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('120.0', 'upperLoads', '0.3', '0.0826', '18', '5.32') }))]
    },
    '3.10': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100.0', 'upperLoads', '0.3', '0.1002', '18', '2.53') }))]
    },
    '3.10-150': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('150', 'upperLoads','0.45', '-0.0587', '27', '5.48') }))]
    },
    '3.12': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39() }))]
    },
    '3.12-5': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5') }))]
    },
    '3.12-20': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20') }))]
    },
    '3.12-100': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100') }))]
    },
    '3.12-120': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('120') }))]
    },
    '3.13': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39() }))]
    },
    '3.13-5': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('5') }))]
    },
    '3.13-20': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('20') }))]
    },
    '3.13-100': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('100') }))]
    },
    '3.13-120': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39('120') }))]
    },
    '3.14': {
      curHumidity:"25.15",
      totalTime:"60",
      curTempe:"24.99",
      leftTime:"60"
    },
    '3.15': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, initialResist: '0.0645' }))]
    },
    '3.15-1': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, initialTempe: '25.2' }))]
    },
    '3.15-2': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, surfTempe: '26.2' }))]
    }
  }
}
