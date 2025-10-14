const theme = {
    colors: {
        // Primary palette - Azul moderno e sofisticado
        primary: {
            50: "#f0f9ff",
            100: "#e0f2fe", 
            200: "#bae6fd",
            300: "#7dd3fc",
            400: "#38bdf8",
            500: "#0ea5e9", // Principal
            600: "#0284c7",
            700: "#0369a1",
            800: "#075985",
            900: "#0c4a6e",
        },

        // Secondary palette - Violeta elegante
        secondary: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7", // Principal
            600: "#9333ea",
            700: "#7c3aed",
            800: "#6b21a8",
            900: "#581c87",
        },

        // Accent - Verde moderno
        accent: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e", // Principal
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
        },

        // Neutrals - Escala de cinzas moderna
        neutral: {
            50: "#fafafa",
            100: "#f4f4f5",
            200: "#e4e4e7",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
        },

        // Background system
        background: {
            primary: "#ffffff",
            secondary: "#f8fafc",
            tertiary: "#f1f5f9",
            dark: "#0f172a",
            glass: "rgba(255, 255, 255, 0.1)",
            overlay: "rgba(15, 23, 42, 0.5)",
        },

        // Text system
        text: {
            primary: "#1e293b",
            secondary: "#475569",
            tertiary: "#64748b",
            accent: "#0ea5e9",
            inverse: "#ffffff",
            muted: "#94a3b8",
        },

        // Status colors
        status: {
            success: "#22c55e",
            warning: "#f59e0b",
            error: "#ef4444",
            info: "#3b82f6",
        },

        // Gradients
        gradients: {
            primary: "linear-gradient(135deg, #0ea5e9 0%, #a855f7 100%)",
            secondary: "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)",
            accent: "linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)",
            dark: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
        },
    },

    // Typography system
    typography: {
        fontFamily: {
            sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
            mono: "'JetBrains Mono', 'Fira Code', monospace",
            display: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        },
        
        fontSize: {
            xs: "0.75rem",      // 12px
            sm: "0.875rem",     // 14px
            base: "1rem",       // 16px
            lg: "1.125rem",     // 18px
            xl: "1.25rem",      // 20px
            "2xl": "1.5rem",    // 24px
            "3xl": "1.875rem",  // 30px
            "4xl": "2.25rem",   // 36px
            "5xl": "3rem",      // 48px
            "6xl": "3.75rem",   // 60px
            "7xl": "4.5rem",    // 72px
            "8xl": "6rem",      // 96px
            "9xl": "8rem",      // 128px
        },

        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },

        lineHeight: {
            none: "1",
            tight: "1.25",
            snug: "1.375",
            normal: "1.5",
            relaxed: "1.625",
            loose: "2",
        },

        letterSpacing: {
            tighter: "-0.05em",
            tight: "-0.025em",
            normal: "0em",
            wide: "0.025em",
            wider: "0.05em",
            widest: "0.1em",
        },
    },

    // Spacing system (rem)
    spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",   // 4px
        2: "0.5rem",    // 8px
        3: "0.75rem",   // 12px
        4: "1rem",      // 16px
        5: "1.25rem",   // 20px
        6: "1.5rem",    // 24px
        8: "2rem",      // 32px
        10: "2.5rem",   // 40px
        12: "3rem",     // 48px
        16: "4rem",     // 64px
        20: "5rem",     // 80px
        24: "6rem",     // 96px
        32: "8rem",     // 128px
        40: "10rem",    // 160px
        48: "12rem",    // 192px
        56: "14rem",    // 224px
        64: "16rem",    // 256px
    },

    // Border radius
    borderRadius: {
        none: "0",
        sm: "0.125rem",
        base: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
    },

    // Shadows
    shadows: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    },

    // Breakpoints
    breakpoints: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
    },

    // Z-index scale
    zIndex: {
        auto: "auto",
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        modal: "1000",
        popover: "1010",
        tooltip: "1020",
        toast: "1030",
    },

    // Animation easing
    easing: {
        linear: "linear",
        in: "cubic-bezier(0.4, 0, 1, 1)",
        out: "cubic-bezier(0, 0, 0.2, 1)",
        inOut: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    },

    // Animation duration
    duration: {
        fastest: "150ms",
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
        slowest: "800ms",
    },
};

export default theme;
