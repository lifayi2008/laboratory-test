export const sampleData = [
  {
    no: '01',
    roundNo: '01',
    chan: '1',
    jl: '1'
  },
  {
    no: '02',
    roundNo: '02',
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

const process39 = {
  ratioDiff: {
    upperLoads: {
      stand: [
        {
          value: '0.45',
          rate: '5.0'
        }
      ],
      round: [
        {
          value: '0.0891',
          rate: '5.0'
        }
      ]
    }
  },
  angleDiff: {
    upperLoads: {
      stand: [
        {
          value: '27',
          rate: '5.0'
        }
      ],
      round: [
        {
          value: '7.707',
          rate: '5.0'
        }
      ]
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
    '3.15': resultData
  },

  process: {
    '3.5': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, resistValue: '4798' }))]
    },
    '3.6': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, leakCurrValue: '0.0', standValtage: '23' }))]
    },
    '3.7': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, secFator: '3.0' }))]
    },
    '3.8': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, secFator: '3.0' }))]
    },
    '3.9': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39 }))]
    },
    '3.10': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39 }))]
    },
    '3.12': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39 }))]
    },
    '3.13': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, ...process39 }))]
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
    }
  }
}
