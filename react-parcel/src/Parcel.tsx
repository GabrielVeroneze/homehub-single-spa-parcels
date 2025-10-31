import { forwardRef, useState } from 'react'
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

interface ParcelProps {
    title: string
    description: string
    leftBtnText: string
    rightBtnText: string
    leftBtnAction: () => void
    rightBtnAction: () => void
    isVisible: boolean
}

const Parcel = ({
    title,
    description,
    leftBtnText,
    rightBtnText,
    leftBtnAction,
    rightBtnAction,
    isVisible,
}: ParcelProps) => {
    const [open, setOpen] = useState<boolean>(isVisible)

    const leftBtnHandler = () => {
        leftBtnAction()
        setOpen(false)
    }

    const rightBtnHandler = () => {
        rightBtnAction()
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            slots={{
                transition: Transition,
            }}
            onClose={() => setOpen(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={leftBtnHandler}>{leftBtnText}</Button>
                <Button onClick={rightBtnHandler}>{rightBtnText}</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Parcel
