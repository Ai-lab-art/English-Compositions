import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'fredoka': ['Fredoka', 'cursive'],
				'comic': ['Comic Neue', 'cursive'],
				'poppins': ['Poppins', 'sans-serif'],
				'nunito': ['Nunito', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				education: {
					purple: 'hsl(var(--education-purple))',
					blue: 'hsl(var(--education-blue))',
					cyan: 'hsl(var(--education-cyan))',
					green: 'hsl(var(--education-green))',
					yellow: 'hsl(var(--education-yellow))',
					orange: 'hsl(var(--education-orange))',
					pink: 'hsl(var(--education-pink))',
					red: 'hsl(var(--education-red))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-rainbow': 'var(--gradient-rainbow)',
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-purple-pink': 'var(--gradient-purple-pink)',
				'gradient-blue-cyan': 'var(--gradient-blue-cyan)',
				'gradient-green-yellow': 'var(--gradient-green-yellow)',
				'gradient-orange-red': 'var(--gradient-orange-red)'
			},
			boxShadow: {
				'purple': 'var(--shadow-purple)',
				'blue': 'var(--shadow-blue)',
				'green': 'var(--shadow-green)',
				'orange': 'var(--shadow-orange)',
				'pink': 'var(--shadow-pink)',
				'rainbow': 'var(--shadow-rainbow)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'rainbow-pulse': {
					'0%, 100%': {
						filter: 'hue-rotate(0deg) brightness(1)'
					},
					'50%': {
						filter: 'hue-rotate(180deg) brightness(1.2)'
					}
				},
				'color-shift': {
					'0%': { filter: 'hue-rotate(0deg)' },
					'25%': { filter: 'hue-rotate(90deg)' },
					'50%': { filter: 'hue-rotate(180deg)' },
					'75%': { filter: 'hue-rotate(270deg)' },
					'100%': { filter: 'hue-rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'rainbow-pulse': 'rainbow-pulse 3s ease-in-out infinite',
				'color-shift': 'color-shift 6s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
