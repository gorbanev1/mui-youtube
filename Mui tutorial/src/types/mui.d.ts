import '@mui/material'

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true; // добавляем вариант
    }
}

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        mobile: true; // ✅ добавляем свои
        tablet: true;
        laptop: true;
        desktop: true;
        xs: true;
        sm: true;
        d: true;
        lg: true;
        xl: true;


    }
}