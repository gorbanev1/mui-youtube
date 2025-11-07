import {Container, CssBaseline, Slider, type SliderProps, Stack, styled} from "@mui/material";

type CustomSliderProps = SliderProps & {
    error?: boolean
}

const CustomSlider = styled(Slider, {
    shouldForwardProp: (prop)=>prop!=='error'
})<CustomSliderProps>(({theme, error})=>({
    width: theme.spacing(10),
    color: theme.palette.success.main,
    '& .MuiSlider-thumb':{
        '&:hover, &.Mui-focusVisible':{
            backgroundColor:error?'bisque':"green"
        }
    }

}))

function App() {


    return (
        <>
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
                    bgcolor: '#f9f9f9',
                    height: '100vh'
                }}
            >
                <Stack gap={2}>
                    <CustomSlider error={true}/>
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
                </Stack>
            </Container>
        </>
    );
}

export default App;
