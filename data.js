export const sampleData = [
  {
    no: '01',
    roundNo: '01',
    chan: '1',
    jl: '1'
  }
]

const paramsData = sampleData.map((item) => ({ no: item.no, chan: item.chain, roundNo: item.roundNo }))
const resultData = sampleData.map((item) => ({ no: item.no, jl: item.jl }))
const processCommon = {
  totalTime: '15',
  leftTime: '3',
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
      accuracy: '0.5S',
      props: [...paramsData],
    },
    '3.6': {
      accuracy: '0.5S',
      liftGear: '',
      upperLoad: '10',
      powerFactor: '0.8L',
      turnNum: '',
      primaryLimit: '150',
      secondaryLimit: '5',
      lowerLoad: '3.75',
      varyRatioNum: '01',
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
      accuracy: '0.5S',
      liftGear: '',
      upperLoad: '10',
      powerFactor: '0.8L',
      turnNum: '',
      primaryLimit: '150',
      secondaryLimit: '5',
      lowerLoad: '3.75',
      varyRatioNum: '01',
      props: [...paramsData]
    }
  },

  result: {
    '3.5': [...resultData.map(item => ({ ...item, resistValue: '0L' }))],
    '3.6': [...resultData.map(item => ({ ...item, resistValue: '0.0' }))],
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
    '3.10': resultData
  },

  process: {
    '3.5': {
      ...processCommon,
      props: [...sampleData.map((item) => ({ no: item.no, resistValue: '0L' }))]
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
    }
  }
}
