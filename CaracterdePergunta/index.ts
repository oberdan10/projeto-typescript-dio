interface IUsuario {
    id: string,
    email: string,
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; //Dado Opcional
}

function redirecionamento(usuario: IUsuario) {
    if (usuario.cargo) {
        //Redirecionar para Área de Administração
    }
    
    // Redirecionar a outras Áreas
}
