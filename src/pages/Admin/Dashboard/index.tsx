import { useNav } from "@hooks/useNav"
import { DashboardContainer } from "./styles"
import { Colors } from "@Admin/Colors"

export const Dashboard = () => {
    const { nav } = useNav()
    return (
        <DashboardContainer $isMenuOpen={nav.active}>
            <Colors />
        </DashboardContainer>
    )
}