import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "../Shared/ui/Themes/theme-provider"

export function ToggleThemeButton() {
    const { theme, setTheme } = useTheme()
    return (
        <div>
          <Button variant="outline" size="icon" className="mt-1"  onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>  
        )
}