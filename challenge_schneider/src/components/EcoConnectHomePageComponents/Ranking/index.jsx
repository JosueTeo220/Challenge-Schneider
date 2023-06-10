import styles from './Ranking.module.css'
import RankingFuncionariosContainer from './RankingFuncionariosContainer'
export function Ranking(){
    return (
        <div className={styles.RankingContainer}>
            <h2>Melhores Rankings de Funcionários</h2>
            <RankingFuncionariosContainer/>
        </div>
    )
}
