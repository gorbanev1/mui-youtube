// LocaleCheck.tsx
import { Typography } from "@mui/material";
import { useStore} from "../hooks/useStore.ts";

export function LocaleCheck() {
    // Берём текущую локаль из Zustand
    const locale = useStore(state => state.locale);

    return (
        <Typography variant="h6" sx={{ mt: 2 }}>
            Current locale: {locale}
        </Typography>
    );
}
