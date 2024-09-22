const express = require('express');
const app = express();
const path = require('path');
const db = require('./models/database');
const userRoutes = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', userRoutes);



db.sequelize.sync().then(() => {
    console.log("Sicronizado com DB");
    app.listen(3000, () => {
        console.log('Servidor online');
    });
}).catch(err => 
{
    console.error('ERRO sincronização com DB: ' + err);
});