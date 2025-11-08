import '@mui/material'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true; // добавляем вариант
    }
}