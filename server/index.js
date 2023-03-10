require('dotenv').config()

const express = require('express')
const cors = require('cors')

const {sequelize} = require('./util/database')
const {PORT} = process.env


const {User} = require('./models/user')
const {register, login} = require('./controllers/auth')


const app = express()

app.use(express.json())
app.use(cors())

// User.hasMany(Vehicle)
// Vehicle.belongsTo(User)

//ENDPOINTS

//AUTH
app.post('/register', register)
app.post('/login', login)

// app.post('/createVehicle', createVehicle)
// app.get('/uservehicles/:userId', getVehicles)
// app.get('/vehicle/:id', getDetails)
// app.put('/editvehicle', putVehicle)
// app.delete('/deletevehicle/:id', deleteVehicle)

// app.post('/createMaintenace', createMaintenace)
// app.get('/maintenance/:id', getMaintenance)
// app.put('/editmaintenance', putMaintenance)
// app.delete('/deletemaintenance/:id', deleteMaintenance)

sequelize.sync()
    

    app.listen(PORT, () => console.log(`server running on port ${PORT}`))