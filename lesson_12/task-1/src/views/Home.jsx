import ExpenseList from '@/components/ExpenseManager/ExpenseList'
import ExpenseSelectedTaskComp from '@/components/ExpenseManager/ExpenseSelectedTaskComp'
import Container from '@layout/Container/Container'

const taskList = ['продукти', 'комуналка', 'авто', 'розваги', 'навчання']

function Home() {
    return (
        <>
            <Container>
                <ExpenseSelectedTaskComp taskList={taskList} />
                <ExpenseList />
            </Container>
        </>
    )
}

export default Home
