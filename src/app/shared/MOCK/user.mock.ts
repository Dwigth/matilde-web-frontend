import { User } from 'src/app/classes/user';

export const ADMIN_MOCK_USER = new User(
    {
        UserCopy:
        {
            cveUsuario: 1,
            correo: 'test@test.com',
            usuario: 'test',
            fechaRegistro: '2020-12-05T06:06:11.730Z',
            activo: true,
            registroCompleto: true,
            confirmarCorreo: true,
            maPersona: {
                cvePersona: 1,
                nombre: 'test',
                apellidoPaterno: 'test',
                apellidoMaterno: 'test',
                imagen: 'https://dritdi.mx/avatars/avatar-1615486901499-340766928',
                fechaNacimiento: '1997-10-26',
                cvePersonaReg: 0,
                activo: true,
                genero: true,
                registroCompleto: true,
                tokenSeguimientoRegistro: 'bf688c31a9a452721157e9fdc9f4f6e0f5278fee7089948de01d2aac3cf07a3c'
            },
            roles: [
                { id: 1, activo: true, rol: { cveRol: 4, nombre: 'usuario', activo: true } },
                {
                    id: 8, activo: true, rol: { cveRol: 2, nombre: 'administrador', activo: true }
                }],
            persona: {
                cvePersona: 1, nombre: 'Dwigth', apellidoPaterno: 'Astacio', apellidoMaterno: 'Hernández',
                imagen: 'https://dritdi.mx/avatars/avatar-1615486901499-340766928',
                fechaNacimiento: '1997-10-26',
                cvePersonaReg: 0, activo: true, genero: true, registroCompleto: true,
                tokenSeguimientoRegistro: 'bf688c31a9a452721157e9fdc9f4f6e0f5278fee7089948de01d2aac3cf07a3c'
            },
            modulos: [
                {
                    id: 2, activo: true,
                    modulo: {
                        cveModulo: 2, nombre: 'Administrativo',
                        ruta: '/dashboard', icono: 'fas fa-universal-access', activo: true, cvePersonaReg: 0
                    }
                },
                {
                    id: 4,
                    activo: true,
                    modulo: {
                        cveModulo: 1, nombre: 'Estudiantes',
                        ruta: '/estudiantes', icono: 'fas fa-user-graduate', activo: true, cvePersonaReg: 0
                    }
                }]
        },
        iat: 1617321755, exp: 1617408155
    }
);