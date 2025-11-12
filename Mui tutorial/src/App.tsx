import { Container, ToggleButton, ToggleButtonGroup, Button, Typography } from "@mui/material";
import { useStore } from "./hooks/useStore";
import { LocaleCheck} from "./components/localeCheck.tsx";// импортируем компонент

function App() {
    const locale = useStore(state => state.locale);
    const changeLocale = useStore(state => state.changeLocale);

    return (
        <Container maxWidth={false} sx={{ mt: 4, textAlign: 'center' }}>
            <ToggleButtonGroup
                value={locale}
                exclusive
                onChange={(_, newLocale: 'en' | 'ar') => {
                    if (newLocale) changeLocale(newLocale);
                }}
                sx={{ mb: 2 }}
            >
                <ToggleButton value="en">EN</ToggleButton>
                <ToggleButton value="ar">AR</ToggleButton>
            </ToggleButtonGroup>

            {/* Кнопки */}
            <Button sx={{ m: 1 }}>Default</Button>
            <Button variant="outlined" color="secondary" sx={{ m: 1 }}>Outlined</Button>
            <Button variant="dashed" sx={{ m: 1 }}>Dashed</Button>

            {/* Тест локали */}
            <LocaleCheck />

            <Typography variant="h3" sx={{ mt: 4 }}>
                Responsive H3 Text
            </Typography>
        </Container>
    );
}

export default App;
