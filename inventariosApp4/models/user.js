const login = (email, passwd, callback) =>{
  var err;
  var bd_data; // simula la inf proveniente de la bd

  if (email == 'joe@doe.com' && passwd == '1234') {
    //consultar en BD la info faltante
    bd_data={
      'email':email,
      'depto':'ventas',
      'phone':'567435675'

    }
  } else {
    err = {'mensaje':"Credenciales incorrectas"}

  }
  callback(err,bd_data);
} //const login = function(){}

exports.login = login;
