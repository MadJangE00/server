const express = require("express")
const app = express()

app.use
app.listen(8080, () =>{
    console.log('http://localhost:8080 에서 서버 실행 중')
})

app.get('/', (요청, 응답) =>{
    응답.sendFile(__dirname +'/index.html')
})