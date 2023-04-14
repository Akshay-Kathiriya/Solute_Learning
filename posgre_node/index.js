const {Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config()


const connectDb = async()=>{
    try{
        const client = new Client()

        await client.connect()
        const res = await client.query('SELECT * FROM customer where customer_id=74');
        console.log(res);
        await client.end()
    }catch(error){
        console.log(error)
    }
}

connectDb()


// {
//     user: process.env.PGUSER,
//     host: process.env.PGHOST,
//     database: process.env.PGDATABASE,
//     password: process.env.PGPASSWORD,
//     port: process.env.PGPORT
// }