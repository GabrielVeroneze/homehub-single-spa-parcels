import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Snackbar, TextField } from '@mui/material'
import {
    AuthInfo,
    checkIsAuthenticated,
    editAuthInfo,
} from '@homehub/react-utils'
import Parcel from 'single-spa-react/parcel'

type FormData = Omit<typeof AuthInfo, 'authId'>

const EditProfileForm = () => {
    const { authInfo } = checkIsAuthenticated()
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isSnackbarVisible, setIsSnackbarVisible] = useState<boolean>(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: authInfo,
    })

    const onSubmit = (data: FormData) => {
        editAuthInfo({
            ...data,
            authId: authInfo.authId,
        })

        setIsVisible(false)
        setIsSnackbarVisible(true)
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                py: 2,
                width: '100%',
            }}
        >
            <TextField
                id="email"
                label="Email"
                variant="standard"
                error={!!errors.email}
                helperText={errors.email?.message as string}
                {...register('email', {
                    required: 'O e-mail é obrigatório.',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'E-mail inválido.',
                    },
                })}
            />
            <TextField
                id="firstName"
                label="Nome"
                variant="standard"
                error={!!errors.firstName}
                helperText={errors.firstName?.message as string}
                {...register('firstName')}
            />
            <TextField
                id="lastName"
                label="Sobrenome"
                variant="standard"
                error={!!errors.lastName}
                helperText={errors.lastName?.message as string}
                {...register('lastName')}
            />
            <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: '#9C27B0' }}
                onClick={() => setIsVisible(true)}
            >
                Editar Perfil
            </Button>
            {isVisible && (
                <Parcel
                    config={() =>
                        import(
                            /* webpackIgnore: true */ // @ts-ignore-next
                            '@homehub/react-parcel'
                        )
                    }
                    title="HomeHub"
                    description="Confirmar as alterações?"
                    leftBtnText="Cancelar"
                    rightBtnText="Confirmar"
                    leftBtnAction={() => setIsVisible(false)}
                    rightBtnAction={handleSubmit(onSubmit)}
                    isVisible={isVisible}
                />
            )}
            {isSnackbarVisible && (
                <Snackbar
                    open={isSnackbarVisible}
                    autoHideDuration={2000}
                    onClose={() => setIsSnackbarVisible(false)}
                    message="Usuário editado com sucesso."
                />
            )}
        </Box>
    )
}

export default EditProfileForm
