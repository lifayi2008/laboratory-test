import fetch from 'node-fetch'
import {data, processCommon, sampleData} from './data.js'
import { sleep } from './utils.js'

const requestUrl = 'http://192.168.0.157:8094/task/dataCollection'

const requestCode = ['试验开始', '试验停止', '试验进行']
const requestDataKey = ['params', 'result', 'process']

async function request (code, chapter, reqData) {
  const jsonStr = {
    code,
    msg: requestCode[code],
    data: [
      {
        chapter,
        [requestDataKey[code]]: reqData ? reqData : data[requestDataKey[code]][chapter]
      }
    ]
  }
  console.log(JSON.stringify(jsonStr, null, '  '));
  const response = await fetch(requestUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonStr })
  })
  const result = await response.json()
  console.log(result);
}

async function startAllExperiment() {
  //3.5
  console.log(`=======================3.5 start===================`)
  await request(0, '3.5');
  await sleep(10000);
  for(let i = 5; i >= 0; i--) {
    let resistValue = '0L';
    if(i === 5) {
      resistValue = '4769';
    }
    let props = sampleData.map((item) => ({no: item.no, resistValue}))
    let reqData = {...processCommon, leftTime: i.toString(), props}
    await request(2, '3.5', reqData);
  }
  await sleep(10000);
  await request(1, '3.5');
  await sleep(10000);
  console.log(`=======================3.5 end===================`)

  console.log(`=======================3.6 start===================`)
  await request(0, '3.6');
  await sleep(10000);
  for(let i = 60; i > 0; i--) {
    let props = sampleData.map((item) => ({no: item.no, standValtage: i + 3000 + '', leakCurrValue: '0.01'}))
    let reqData = {...processCommon, leftTime: i.toString(), props}
    await request(2, '3.6', reqData);
  }
  await sleep(10000);
  await request(1, '3.6');
  await sleep(10000);
  console.log(`=======================3.6 end===================`)

  console.log(`=======================3.7 start===================`)
  await request(0, '3.7');
  await sleep(10000);
  await request(2, '3.7');
  await sleep(10000);
  await request(1, '3.7');
  await sleep(10000);

  await request(2, '3.8');
  await sleep(10000);
  await request(1, '3.8');
  await sleep(10000);
  console.log(`=======================3.8 end===================`)

  console.log(`=======================3.9 start===================`)
  await request(0, '3.9');
  await sleep(10000);
  for(let i = 6; i > 0; i--) {
    await request(2, '3.9');
  }
  await sleep(10000);
  await request(1, '3.9');
  await sleep(10000);
  console.log(`=======================3.9 end===================`)

  console.log(`=======================3.10 start===================`)
  await request(0, '3.10');
  await sleep(10000);
  await request(2, '3.10');
  await request(2, '3.10');
  await sleep(10000);
  await request(1, '3.10');
  console.log(`=======================3.10 end===================`)

  console.log(`=======================3.13 start===================`)
  await request(0, '3.13');
  await sleep(10000);
  for(let i = 9; i > 0; i--) {
    await request(2, '3.13');
  }
  await sleep(10000);
  await request(1, '3.13');
  console.log(`=======================3.13 end===================`)

  console.log(`=======================3.12 start===================`)
  await request(0, '3.12');
  await sleep(10000);
  for(let i = 9; i > 0; i--) {
    await request(2, '3.12');
  }
  await sleep(10000);
  await request(1, '3.12');
  await sleep(10000);
  console.log(`=======================3.12 end===================`)

  console.log(`=======================3.15 start===================`)
  await request(0, '3.15');
  await sleep(10000);
  for(let i = 9; i > 0; i--) {
    await request(2, '3.15');
  }
  await sleep(10000);
  await request(1, '3.15');
  console.log(`=======================3.15 end===================`)

  console.log(`=======================3.14 start===================`)
  await request(0, '3.14');
  await sleep(10000);
  for(let i = 60; i > 0; i--) {
    await request(2, '3.14');
  }
  await sleep(10000);
  await request(1, '3.14');
  console.log(`=======================3.14 end===================`)
}

startAllExperiment().then(console.log);
