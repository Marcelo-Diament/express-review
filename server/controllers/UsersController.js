const usuarios = [
  {
    id: 1,
    nome: 'Abirosvaldo'
  },
  {
    id: 2,
    nome: 'Ofélia'
  },
  {
    id: 3,
    nome: 'Jotalhão'
  },
  {
    id: 4,
    nome: 'Jotalhinho'
  }
]

const controller = {}

// controller.index = (req, res) => {
//   res.render('usuarios', {
//     title: 'Página dos Usuários',
//     usuarios
//   })
// }

controller.show = (req, res) => {
  const { id } = req.params.id
  if(id) {
    res.render('usuario', {
      title: 'Página do Usuário',
      usuario: usuarios.find(user => user.id == id)
    })
  } else {
    res.render('usuarios', {
      title: 'Página dos Usuários',
      usuarios
    })
  }
}

module.exports = controller