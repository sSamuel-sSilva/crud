const db = require('../models/database');
const User = db.User;

exports.listUsers = async (req, res) => 
{
    try {
        const users = await User.findAll();
        res.render('users', {users});
    } catch (err) {
        res.status(500).send('ERRO "listUsers": ' + err.message);
    }
};


exports.createUser = async(req, res) => 
{
    const {email, password} = req.body
    try
    {
        await User.create({email, password});
        res.redirect('/users');
    } catch (err) {
        res.status(500).send('ERRO "createUser": ' + err.message);
    }
};


exports.showAddUserForm = async (req, res) =>
{
    res.render('addUser')
}


exports.showEditUserForm = async(req, res) => 
{
    const id = req.params.id;
    try
    {
        const user = await User.findByPk(id);
        if(user)
        {
            res.render('editUser', {user});
        } else {
            res.status(404).send('USER não encontrado');
        }
    } catch(err) {
        res.status(500).send('ERRO "showEditUserForm": ' + err.message);
    }
};


exports.updateUser = async (req, res) => 
{
    const id = req.params.id;
    const { email, password } = req.body;
    try
    {
        const user = await User.findByPk(id);
        if (user)
        {
            await user.update({ email, password });
            res.redirect('/users');
        } else {
            res.status(404).send('USER não encontrado');
        }
    } catch (err) {
        res.status(500).send('ERRO "updateUser": ' + err.message);
    }
};


exports.deleteUser = async(req, res) =>
{
    const id = req.params.id;
    try
    {
        const user = await User.findByPk(id);
        if (user)
        {
            user.destroy();
            res.redirect('/users');
        } else {
            res.status(400).send('USER não encontrado');
        }
    } catch (err) {
        res.status(500).send('ERRO "deleteUser": ' + err.message);
    }
}