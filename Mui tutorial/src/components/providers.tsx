import type {ReactNode} from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {useTheme} from "../hooks/useTheme.ts";

import {CacheProvider} from '@emotion/react'
import createCache from '@emotion/cache'
import {prefixer} from 'stylis'
import rtlPlugin from '@mui/stylis-plugin-rtl'
import {useStore} from "../hooks/useStore.ts";

type ProviderProps = {
    children: ReactNode;
}
const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const emptyCache = createCache({
    key: 'dfsggfdsgdsf'
})

export const Providers = ({children}: ProviderProps) => {
    const theme = useTheme()
    const locale =useStore(state =>state.locale )

    return <CacheProvider value={locale==='ar'?rtlCache:emptyCache}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
    </CacheProvider>
}

