import { createTheme } from "@mui/material";
import { blue, purple, red } from "@mui/material/colors";
import { arSA, enUS } from "@mui/material/locale";
import { useStore } from "./useStore.ts";
import { useEffect } from "react";

export const useTheme = () => {
    const locale = useStore(state => state.locale); // используем локаль из Zustand

    useEffect(() => {
        // Устанавливаем направление текста для страницы
        document.documentElement.setAttribute('dir', locale === 'en' ? 'ltr' : 'rtl');
    }, [locale]);

    const theme = createTheme(
        {
            direction: locale === 'en' ? 'ltr' : 'rtl',
            palette: {
                primary: purple,
            },
            typography: {
                fontFamily: 'Poppins',
            },
            colorSchemes: {
                dark: true,
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        disableRipple: true,
                        variant: "contained",
                    },
                    styleOverrides: {
                        root: {
                            fontSize: "2rem",
                        },
                    },
                    variants: [
                        {
                            props: { variant: 'outlined', color: 'secondary' },
                            style: { fontSize: "4rem", backgroundColor: 'tan' },
                        },
                        {
                            props: { variant: "dashed" },
                            style: { border: `11px dashed ${red[500]}` },
                        },
                        {
                            props: (props) => props.variant === "dashed" && props.color !== 'secondary',
                            style: { border: `2px dashed ${blue[500]}` },
                        },
                    ],
                },
                MuiCssBaseline: {
                    styleOverrides: (themeParam) => `
            h1 {
              color: ${themeParam.palette.success.main};
            }
          `,
                },
            },
        },
        locale === "en" ? enUS : arSA
    );

    // Пример адаптивного H3
    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width: 600px)': { fontSize: '1.5rem' },
        [theme.breakpoints.up('lg')]: { fontSize: '2.4rem' },
    };

    return theme;
};
