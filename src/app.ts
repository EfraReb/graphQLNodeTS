import app from './appExpress';

const port: any = process.env.PORT || 8091;

app.listen(port, (err) => {
    if(err) {
        return console.log(err);
    }
    return console.log(`server is listening on ${port}`)
})