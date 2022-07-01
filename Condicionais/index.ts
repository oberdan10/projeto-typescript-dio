interface IUsuario {
    id: string,
    email: string;
}

interface IAdmin {
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionamento(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //Redirecionar para Área de Administração
    } else {
        // Redirecionar a outras Áreas
    }
}
