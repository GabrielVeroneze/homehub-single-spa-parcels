import { useForm } from 'react-hook-form'
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    TextField,
} from '@mui/material'
import { loginFunction } from '@homehub/react-utils'

type FormData = {
    email: string
    password: string
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>()

    const onSubmit = (data: FormData) => loginFunction(data.email)

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                pt: 4,
                pb: 2,
                width: '100%',
            }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <TextField
                id="email"
                label="Email"
                variant="standard"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...register('email', {
                    required: 'O e-mail é obrigatório.',
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'E-mail inválido.',
                    },
                })}
            />
            <TextField
                id="password"
                label="Password"
                variant="standard"
                type="password"
                error={!!errors.password}
                helperText={errors.password?.message}
                {...register('password', {
                    required: 'A senha é obrigatória.',
                })}
            />
            <FormControlLabel
                label="Lembrar-me"
                control={
                    <Checkbox
                        defaultChecked
                        sx={{
                            '&.Mui-checked': {
                                color: '#9C27B0',
                            },
                        }}
                    />
                }
                sx={{
                    color: '#00000099',
                }}
            />
            <Button
                variant="contained"
                size="large"
                type="submit"
                sx={{ bgcolor: '#9C27B0' }}
            >
                Login
            </Button>
            <Box sx={{ display: 'flex', gap: 3 }}>
                <Link href="#" variant="body2" color="#9C27B0">
                    Criar conta
                </Link>
                <Link href="#" variant="body2" color="#9C27B0">
                    Esqueceu a senha?
                </Link>
            </Box>
        </Box>
    )
}

export default LoginForm
