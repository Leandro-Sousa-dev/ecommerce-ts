import { useNav } from "@hooks/useNav"
import { DashboardContainer } from "./styles"

export const Dashboard = () => {
    const { nav } = useNav()
    return (
        <DashboardContainer $isMenuOpen={nav.active}>
            <p>aaa</p>
        </DashboardContainer>
    )
}