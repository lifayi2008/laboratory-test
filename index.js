import fetch from 'node-fetch'
import { data } from './data.js'

const requestUrl = 'http://192.168.0.157:8094/task/dataCollection'

const requestCode = ['试验开始', '试验停止', '试验进行']
const requestDataKey = ['params', 'result', 'process']

async function request (code, chapter) {
  const jsonStr = {
    code,
    msg: requestCode[code],
    data: {
      chapter,
      [requestDataKey[code]]: data[requestDataKey[code]][chapter]
    }
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
  await request(2, '3.9');

}

startAllExperiment().then(console.log);