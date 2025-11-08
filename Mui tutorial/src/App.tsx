import {
    Button,
    Container,
    createTheme,
    CssBaseline, FormControlLabel, Radio, RadioGroup,
    Slider,
    type SliderProps,
    Stack,
    styled,
    ThemeProvider, Typography, useColorScheme
} from "@mui/material";
import {blue, red} from "@mui/material/colors";

type CustomSliderProps = SliderProps & {
    error?: boolean
}

const CustomSlider = styled(Slider, {
    shouldForwardProp: (prop) => prop !== 'error'
})<CustomSliderProps>(({theme, error}) => ({
    width: theme.spacing(10),
    color: theme.palette.success.main,
    '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
            backgroundColor: error ? 'bisque' : "green"
        }
    }

}))

function ThemeToggle() {
    const {mode, setMode} = useColorScheme()
    if (!mode) return null
    return <RadioGroup value={mode} onChange={(e)=>setMode(e.currentTarget.value as 'system'|'light'|'dark')}>
        <FormControlLabel control={<Radio/>} value={'system'} label={'System'}/>
        <FormControlLabel control={<Radio/>} value={'light'} label={'Light'}/>
        <FormControlLabel control={<Radio/>} value={'dark'} label={'Dark'}/>
    </RadioGroup>
}

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
    },
    colorSchemes: {
        dark: true
    },
    components: {
        MuiButton:
            {
                defaultProps: {
                    disableRipple: true,
                    variant: "contained",
                },
                styleOverrides: {
                    root: {
                        fontSize: "2rem"
                    }
                },
                variants: [
                    {
                        props: {
                            variant: 'outlined',
                            color: 'secondary'
                        },
                        style: {
                            fontSize: "4rem",
                            backgroundColor: 'tan'
                        }
                    },
                    {
                        props: {
                            variant: "dashed",

                        },
                        style: {
                            border: `11px dashed  ${red[500]}`
                        }
                    },
                    {
                        props: (props) =>
                            props.variant === "dashed" && props.color !== 'secondary',
                        style: {
                            border: `2px dashed ${blue[500]}`
                        }
                    }

                ]
            },
        MuiCssBaseline: {
            styleOverrides: (themeParam) => `
            h1 {
            color: ${themeParam.palette.success.main}
            }`
        }
    }

})

function App() {


    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '800px',
                        width: '100%',
                        mx: 'auto',
                        p: 2,
                        //bgcolor: '#f9f9f9',
                        height: '100vh'
                    }}
                >
                    <Stack gap={2}>
                        <ThemeToggle/>
                        <CustomSlider error/>
                        {/*<Slider*/}
                        {/*    disabled*/}
                        {/*    sx={{*/}
                        {/*        backgroundColor: "blue",*/}
                        {/*        // '& .MuiSlider-thumb':{*/}
                        {/*        //     ':hover': {*/}
                        {/*        //         backgroundColor: 'gold'*/}
                        {/*        //     },*/}
                        {/*        //     background: 'red'*/}
                        {/*        // },*/}
                        {/*        width: 100,*/}
                        {/*        color: 'success.main',*/}
                        {/*        '&.Mui-disabled': {*/}
                        {/*            ' .MuiSlider-thumb': {*/}
                        {/*                backgroundColor: 'red',*/}
                        {/*            },*/}
                        {/*            '.MuiSlider-rail'*/}
                        {/*        },*/}

                        {/*    }}/>*/}

                        <Button>{'fsadf'}</Button>
                        <Button variant={'outlined'} color={'secondary'}>dsfgsdfdgd</Button>
                        <Button variant={'dashed'}> dfsd</Button>
                        <Typography variant={'h1'}>h1</Typography>
                        <Typography variant={'h2'}>h2</Typography>
                    </Stack>
                </Container>
            </ThemeProvider>
        </>
    );
}

export default App;
