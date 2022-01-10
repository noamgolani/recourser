import app from './api/app';

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
	console.log(`Listening on port: ${port}`);
})
